// @ts-check
import { defineConfig , envField} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   plugins: [tailwindcss()]
  // },
  output: 'server',

  integrations: [tailwindcss(), react()],

  env:{
    schema:{
     SHOW_GENERAL_STATUS: envField.boolean({default:true,context:'server',access:'secret'}),
     BASE_DASHBOARD_URL: envField.string({context:'server',access:'secret'})
    }
  },

  adapter: vercel(),
});