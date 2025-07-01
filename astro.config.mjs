// @ts-check
import { defineConfig , envField} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';

//import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   plugins: [tailwindcss()]
  // },
  output: 'static',

  integrations: [tailwindcss(), react(), icon()],

  env:{
    schema:{
     SHOW_GENERAL_STATUS: envField.boolean({default:true,context:'server',access:'secret'}),
     BASE_DASHBOARD_URL: envField.string({context:'server',access:'secret'})
    }
  },

  //adapter: vercel(),
});