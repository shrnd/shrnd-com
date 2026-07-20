import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDirectory = new URL('../public/', import.meta.url);
const outputPath = (name) => fileURLToPath(new URL(name, publicDirectory));

await mkdir(publicDirectory, { recursive: true });

const iconSvg = (size) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 180 180">
    <rect width="180" height="180" rx="40" fill="#0c0d0e"/>
    <path d="M126 49H78c-18 0-30 9.5-30 23s12 21 30 21h28c18 0 30 9.5 30 23s-12 21-30 21H54"
      fill="none" stroke="#f8f7f3" stroke-linecap="round" stroke-width="17"/>
    <circle cx="137" cy="43" r="9" fill="#7469ff"/>
  </svg>`;

const ogImageSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48 0H0v48" fill="none" stroke="#fff" stroke-opacity=".045"/>
      </pattern>
      <radialGradient id="glow" cx="75%" cy="50%" r="42%">
        <stop stop-color="#7469ff" stop-opacity=".38"/>
        <stop offset="1" stop-color="#7469ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="core" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#a7a0ff"/>
        <stop offset=".45" stop-color="#7469ff"/>
        <stop offset="1" stop-color="#171820"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0c0d0e"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <g fill="none" stroke="#fff" stroke-opacity=".2">
      <rect x="790" y="92" width="430" height="430" rx="165" transform="rotate(-8 1005 307)"/>
      <rect x="823" y="125" width="364" height="364" rx="137" transform="rotate(-4 1005 307)"/>
      <rect x="856" y="158" width="298" height="298" rx="108"/>
    </g>
    <rect x="901" y="203" width="208" height="208" rx="73" transform="rotate(5 1005 307)" fill="url(#core)" stroke="#fff" stroke-opacity=".28"/>
    <circle cx="1075" cy="228" r="5" fill="#fff"/>
    <text x="64" y="70" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="-1">SHRND</text>
    <circle cx="151" cy="55" r="4" fill="#7469ff"/>
    <text x="64" y="303" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">Software,</text>
    <text x="64" y="386" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">thoughtfully built.</text>
    <text x="66" y="552" fill="#fff" fill-opacity=".52" font-family="Helvetica Neue,Arial,sans-serif" font-size="17" letter-spacing="1.6">APPS · MOBILE ENGINEERING · SOFTWARE CONSULTING</text>
  </svg>`;

await Promise.all([
  sharp(Buffer.from(iconSvg(32)))
    .png()
    .toFile(outputPath('favicon-32.png')),
  sharp(Buffer.from(iconSvg(180)))
    .png()
    .toFile(outputPath('apple-touch-icon.png')),
  sharp(Buffer.from(ogImageSvg)).png().toFile(outputPath('og-image.png')),
]);
