// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';

import deno from '@astrojs/deno';

export default defineConfig({
  output: 'server',
  integrations: [tailwindcss(), react(), icon()],

  adapter: deno(),
});