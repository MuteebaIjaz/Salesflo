const FIELDS = [
  "name",
  "email",
  "phone",
  "company",
  "service",
  "budget_range",
  "message",
  "consent",
  "source",
  "lead_source",
];

export default async (req) => {
  const json = (body, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let data;
  try {
    data = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // Forward only known fields, capped in length
  const payload = {};
  for (const key of FIELDS) {
    const value = data[key];
    payload[key] = typeof value === "string" ? value.slice(0, 2000) : value;
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[Netlify Function] Missing N8N_WEBHOOK_URL environment variable.");
    return json({ error: "Server configuration error: webhook URL not configured" }, 500);
  }

  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (process.env.N8N_API_KEY) {
      headers["x-api-key"] = process.env.N8N_API_KEY;
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    return json({ success: res.ok }, res.ok ? 200 : 502);
  } catch (err) {
    console.error("[Netlify Function] Error forwarding to n8n:", err);
    return json({ success: false }, 502);
  }
};
