import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// If you deploy to a PROJECT repo (e.g. github.com/ULTRONLORD/portfolio),
// uncomment the `base` line and set it to '/portfolio'.
export default defineConfig({
  site: 'https://ULTRONLORD.github.io',
  // base: '/portfolio',
  integrations: [react()],
});
