/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure it covers all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // class-based dark mode
};
