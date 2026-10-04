import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

function apiDevMiddleware(): Plugin {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/contact' && req.method === 'POST') {
          let bodyRaw = '';
          req.on('data', chunk => {
            bodyRaw += chunk;
          });
          req.on('end', async () => {
            try {
              let body = {};
              try {
                body = JSON.parse(bodyRaw);
              } catch {
                // empty or text
              }

              // Load api/contact handler using Vite SSR loader
              const module = await server.ssrLoadModule('/api/contact.ts');
              const handler = module.default;

              const extendedReq = Object.assign(req, { body });
              const extendedRes = Object.assign(res, {
                status(code: number) {
                  res.statusCode = code;
                  return extendedRes;
                },
                json(data: any) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                },
              });

              await handler(extendedReq, extendedRes);
            } catch (err: any) {
              console.error('[Vite Dev API] Error handling /api/contact:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Internal dev server error' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables (.env) and make them available to process.env in dev
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [tailwindcss(), react(), apiDevMiddleware()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      host: true,
      allowedHosts: true,
    },
  };
});

