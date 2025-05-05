import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.html',
        './node_modules/@material-tailwind/html/**/*.{js,ts,jsx,tsx}', // <- AÑADIDO
    ],
    theme: {
        extend: {},
    },
    plugins: [typography],
    mode: 'jit',
};
