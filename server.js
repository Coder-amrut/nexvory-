// Production Static Backend Server for ABC Digital Intelligence
// High-performance, zero-dependency Node.js static building server

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  // CORS & Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Health API endpoint
  if (req.url === '/api/health' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: 'ONLINE',
      service: 'ABC Systems & Technologies',
      founders: [
        { name: 'Amrutkiran Kshirsagar', role: 'Lead Software Architect', education: 'MCA' },
        { name: 'Pratik Salunkhe', role: 'Lead DevOps & Cloud Engineer', education: 'B.E. Engineering' }
      ],
      metrics: {
        deliveredWebsites: 10,
        happyClients: 10,
        uptimeSLA: '99.999%',
        fontPrimary: 'Arial'
      },
      timestamp: new Date().toISOString()
    }));
  }

  // Parse path and prevent path traversal
  const safeSuffix = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(DIST_DIR, safeSuffix);

  // If path is root or directory without file, serve index.html
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA Fallback: serve index.html if file not found
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.readFile(indexPath, (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error: Static bundle not found. Please run "npm run build" first.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(indexData);
        }
      });
      return;
    }

    // Cache control: assets with hash cache for 1 year, html cache must revalidate
    if (ext === '.html') {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`[ABC Production Server] Running static build at http://localhost:${PORT}`);
  console.log(`[ABC Production Server] Healthcheck available at http://localhost:${PORT}/api/health`);
});
