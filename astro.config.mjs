import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shrnd.com',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
});
