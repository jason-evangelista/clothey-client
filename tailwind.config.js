/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#F5EFE6',
        secondaryColor: '#AEBDCA',
        primaryAccent: '#E8DFCA',
        secondaryAccent: '#7895B2',
        black: '#252525',
      },
    },
  },
  plugins: [],
}
