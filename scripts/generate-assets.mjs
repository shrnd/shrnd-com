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
        <stop stop-color="#f2c58a"/>
        <stop offset=".43" stop-color="#7469ff"/>
        <stop offset="1" stop-color="#171820"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0c0d0e"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <g transform="translate(832 65)">
      <rect width="310" height="500" rx="24" fill="#141519" stroke="#fff" stroke-opacity=".24"/>
      <path d="M0 46H310M0 416H310" stroke="#fff" stroke-opacity=".14"/>
      <circle cx="24" cy="23" r="4" fill="#7469ff"/>
      <text x="37" y="27" fill="#fff" fill-opacity=".48" font-family="Helvetica Neue,Arial,sans-serif" font-size="10" letter-spacing="1.2">LIVE</text>
      <text x="245" y="27" fill="#fff" fill-opacity=".38" font-family="Helvetica Neue,Arial,sans-serif" font-size="10">00:08:24</text>
      <rect y="46" width="310" height="370" fill="url(#core)" fill-opacity=".36"/>
      <path d="M0 112H310M0 178H310M0 244H310M0 310H310M62 46V416M124 46V416M186 46V416M248 46V416" stroke="#fff" stroke-opacity=".06"/>
      <rect x="42" y="170" width="226" height="126" fill="#0c0d0e" fill-opacity=".48" stroke="#fff" stroke-opacity=".34"/>
      <text x="59" y="201" fill="#fff" fill-opacity=".56" font-family="Helvetica Neue,Arial,sans-serif" font-size="11" letter-spacing="1.4">01</text>
      <text x="57" y="260" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="52" letter-spacing="-3">MOVE</text>
      <path d="M58 276H252" stroke="#fff" stroke-opacity=".36"/>
      <path d="M24 448H286" stroke="#fff" stroke-opacity=".13"/>
      <rect x="48" y="460" width="174" height="18" rx="4" fill="#7469ff" fill-opacity=".28" stroke="#a7a0ff" stroke-opacity=".64"/>
      <path d="M65 448V488" stroke="#fff"/>
      <path d="M62 448l3-4 3 4z" fill="#fff"/>
    </g>
    <text x="64" y="70" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="-1">SHRND</text>
    <circle cx="151" cy="55" r="4" fill="#7469ff"/>
    <text x="64" y="303" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">We make</text>
    <text x="64" y="386" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">software move.</text>
    <text x="66" y="552" fill="#fff" fill-opacity=".52" font-family="Helvetica Neue,Arial,sans-serif" font-size="17" letter-spacing="1.6">ORIGINAL APPS · MEDIA · MOTION · NATIVE PERFORMANCE</text>
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
