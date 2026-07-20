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
    <rect x="130.5" y="36.5" width="13" height="13" fill="#f8f7f3" transform="rotate(45 137 43)"/>
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
      <linearGradient id="curve" gradientUnits="userSpaceOnUse" x1="664" y1="500" x2="1064" y2="150">
        <stop stop-color="#fff" stop-opacity=".2"/>
        <stop offset="1" stop-color="#a7a0ff" stop-opacity=".9"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0c0d0e"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <g fill="none">
      <path d="M664 560H1064M664 560v8M764 560v8M864 560v8M964 560v8M1064 560v8" stroke="#fff" stroke-opacity=".12"/>
      <path d="M664 500H848M1064 150H880" stroke="#fff" stroke-opacity=".22" stroke-dasharray="1 6" stroke-linecap="round"/>
      <circle cx="848" cy="500" r="6" stroke="#fff" stroke-opacity=".45" stroke-width="1.3"/>
      <circle cx="880" cy="150" r="6" stroke="#fff" stroke-opacity=".45" stroke-width="1.3"/>
      <rect x="657" y="493" width="14" height="14" fill="#d7d3ff" transform="rotate(45 664 500)"/>
      <rect x="1057" y="143" width="14" height="14" fill="#d7d3ff" transform="rotate(45 1064 150)"/>
      <path d="M664 500C848 500 880 150 1064 150" stroke="url(#curve)" stroke-width="2.5"/>
      <g fill="#fff">
        <circle cx="714.9" cy="490.2" r="4.5" fill-opacity=".16"/>
        <circle cx="758.6" cy="463.6" r="4.5" fill-opacity=".19"/>
        <circle cx="796.8" cy="424.4" r="4.5" fill-opacity=".22"/>
        <circle cx="831.3" cy="376.8" r="4.5" fill-opacity=".25"/>
        <circle cx="864" cy="325" r="4.5" fill-opacity=".28"/>
        <circle cx="896.7" cy="273.2" r="4.5" fill-opacity=".31"/>
        <circle cx="931.2" cy="225.6" r="4.5" fill-opacity=".34"/>
        <circle cx="969.4" cy="186.4" r="4.5" fill-opacity=".37"/>
        <circle cx="1013.1" cy="159.8" r="4.5" fill-opacity=".4"/>
      </g>
      <circle cx="1046" cy="152" r="22" fill="#7469ff" fill-opacity=".35"/>
      <circle cx="1046" cy="152" r="9" fill="#fff"/>
    </g>
    <text x="64" y="70" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="-1">SHRND</text>
    <rect x="150.5" y="50" width="7" height="7" fill="#fff" transform="rotate(45 154 53.5)"/>
    <text x="64" y="303" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">Every frame,</text>
    <text x="64" y="386" fill="#fff" font-family="Helvetica Neue,Arial,sans-serif" font-size="84" font-weight="400" letter-spacing="-5">considered.</text>
    <text x="66" y="552" fill="#fff" fill-opacity=".52" font-family="Helvetica Neue,Arial,sans-serif" font-size="17" letter-spacing="1.6">INDEPENDENT APP STUDIO · LONDON</text>
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
