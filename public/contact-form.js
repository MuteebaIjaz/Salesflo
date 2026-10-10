// SalesFlo Contact Form Webhook Handler
const WEBHOOK_URL = "https://muteebaijaz.app.n8n.cloud/webhook-test/salesflo-lead-capture";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    // If handled by React, let React process it or handle via standalone DOM
    const status = document.getElementById("formStatus");
    const data = Object.fromEntries(new FormData(form));
    data.consent = form.consent ? form.consent.checked : true;
    data.source = "website-contact-form";
    data.lead_source = "Website";

    if (status) status.textContent = "Sending...";
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      if (status) status.textContent = "Thank you! We'll be in touch shortly.";
      form.reset();
    } catch (err) {
      if (status) status.textContent = "Something went wrong. Please try again.";
    }
  });
});
