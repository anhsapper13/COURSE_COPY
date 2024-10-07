
/** @type {import('tailwindcss').Config} */
const createTransformer = require("tailwind-group-variant");
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    transform:createTransformer()
  },
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {},
  },
  plugins: [],
};
