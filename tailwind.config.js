/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#80BBAD",
          secondary: "#81a1c1",
          accent: "#D08770",
          neutral: "#2E3440",
          "neutral-content": "#A6ADBB",
          "base-100": "#3b4252",
          "base-content": "#A6ADBB",
          info: "#5E81ac",
          success: "#a3be8c",
          warning: "#EBCB8B",
          error: "#BF616A",
        },
      },
    ],
  },
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      colors: {
        youtube: "#BF616A",
        github: "#222222",
      },
    },
  },
};
