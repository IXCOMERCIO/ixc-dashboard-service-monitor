// @ts-check
import { defineConfig , envField} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   plugins: [tailwindcss()]
  // },
  output: 'server',

  integrations: [tailwindcss(), react()],

//   env:{
//     schema:{
//       SHOW_BUY_BUTTON: envField.boolean({default:true,context:'server',access:'secret'}),
//       SCORE_API_ENDPOINT: envField.string({context:'server',access:'secret'})
//     }
//   },
});