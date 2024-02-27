import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "6rem",
        xl: "12rem",
        "2xl": "20rem",
      },
    },
    colors: {
      "primary-color": "#294E5B",
      "secondary-color": "#ACA2A0",
      "background-color": "#FAFAFA",
      "body-background": "#D9D9D9",
      transparent: "transparent",
      white: "#FFFF",
      black: "#000007",
      gray: "#8F8F8F",

      // Dark Theme
      "dark-primary-color": "#000",
    },
  },
  plugins: [],
};
export default config;
