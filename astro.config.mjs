// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';

import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  integrations: [tailwindcss(), react(), icon()],

  env: {
    schema: {
      SHOW_GENERAL_STATUS: envField.boolean({ default: true, context: 'server', access: 'secret' }),
      BASE_DASHBOARD_URL: envField.string({ context: 'server', access: 'secret' })
    }
  },

  adapter: node({mode: 'standalone'}),
});