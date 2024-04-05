/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        brutalist: "2px 2px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
