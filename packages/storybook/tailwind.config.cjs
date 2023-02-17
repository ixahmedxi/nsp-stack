const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config.cjs')],
  darkMode: 'class',
  content: [join(__dirname, '../**/*.{js,ts,jsx,tsx}')],
};
