import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';

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

// Lightweight Vite dev middleware to emulate netlify/functions/submit-lead locally during `npm run dev`
function netlifyFunctionDevPlugin(webhookUrl?: string, apiKey?: string): Plugin {
  return {
    name: 'netlify-function-dev-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/.netlify/functions/submit-lead' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const payload: Record<string, unknown> = {};
              for (const key of FIELDS) {
                const value = data[key];
                payload[key] = typeof value === 'string' ? value.slice(0, 2000) : value;
              }

              const headers: Record<string, string> = {
                'Content-Type': 'application/json',
              };
              if (apiKey) {
                headers['x-api-key'] = apiKey;
              }

              if (!webhookUrl) {
                console.warn('[Vite Netlify Proxy Dev]: N8N_WEBHOOK_URL is not configured in .env');
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'N8N_WEBHOOK_URL not configured in .env' }));
                return;
              }

              const forwardRes = await fetch(webhookUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
              });

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = forwardRes.ok ? 200 : 502;
              res.end(JSON.stringify({ success: forwardRes.ok }));
            } catch (err) {
              console.error('[Vite Netlify Proxy Dev Error]:', err);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 502;
              res.end(JSON.stringify({ success: false }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      netlifyFunctionDevPlugin(env.N8N_WEBHOOK_URL, env.N8N_API_KEY),
    ],
  };
});
