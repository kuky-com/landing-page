/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-custom': '0px 2px 2px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'custom-gray': 'rgba(102, 102, 102, 1)',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        nunito: "Nunito Sans",
        nan: "nunito",
      },
    },
  },
  plugins: [],
}

