/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  important: '#app',
  content: [
    './.vitepress/theme/theme-components/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],

}

