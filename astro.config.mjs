import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://shrnd.com',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  adapter: cloudflare(),
});