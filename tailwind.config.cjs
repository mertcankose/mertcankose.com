/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        main: "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
};
