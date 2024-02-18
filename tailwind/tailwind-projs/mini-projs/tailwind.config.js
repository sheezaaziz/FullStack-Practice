/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      // // this will add a new font family in tailwind. we can use this in html code by adding the elem class as 'font-mulish'
      // mulish: ['Mulish', 'sans-serif'],
      // // by default, tailwind uses 'sans'. therefore, to override the default font, we can just override 'sans' as below
      // sans: ['monospace']

      // for login modal:
      sans: ['Mulish', 'sans-serif'],
      mono: ['monospace'],
    }
  },
  plugins: [],
}

