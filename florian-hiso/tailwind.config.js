/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",

  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["coffee", "lemonade"],
  },
};
