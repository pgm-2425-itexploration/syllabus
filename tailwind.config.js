/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './.vitepress/theme/theme-components/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],

}

