import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

// Remove and recreate dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(distDir, 'index.html'));
}

// Copy logo.png
if (fs.existsSync('logo.png')) {
  fs.copyFileSync('logo.png', path.join(distDir, 'logo.png'));
}

// Recursive copy helper
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir('assets', path.join(distDir, 'assets'));
if (fs.existsSync('public')) {
  copyDir('public', path.join(distDir, 'public'));
}

console.log('Build successful: dist/ generated with index.html and assets.');
