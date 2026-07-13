// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lynnb.design',
  // /about moved to the landing page; keep old links working.
  redirects: { '/about': '/' },
});
