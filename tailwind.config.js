// tailwind.config.js
import { defineConfig } from 'vite'

export default {
  darkMode: 'class', // <-- Это обязательно
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
