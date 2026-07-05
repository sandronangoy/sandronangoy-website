import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sandronangoy.com',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
