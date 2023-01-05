/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/**/*.{html,js}",
    "./client/src/**/*.{app,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
