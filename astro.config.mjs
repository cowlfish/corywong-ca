// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: 'https://corywong.ca',
  output: 'static',
  adapter: cloudflare(),
});