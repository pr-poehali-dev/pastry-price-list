
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'cream-bg': '#F9F5F0',
        'cream-card': '#F7F1E9',
        'brown': {
          DEFAULT: '#6B4025',
          light: '#A67F5D',
        },
      },
    },
  },
  plugins: [],
});
