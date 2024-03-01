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
        sm: "1rem",
        lg: "5rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "primary-color": "#294E5B",
        "secondary-color": "#ACA2A0",
        "background-color": "#FAFAFA",
        "body-background-color": "#D9D9D9",
        transparent: "transparent",
        white: "#FFFF",
        black: "#000007",
        gray: "#8F8F8F",

        // Dark Theme
        "dark-primary-color": "#000",
      },
      boxShadow: {
        "inner-md": "inset 0px 0px 3px 0px rgb(0 0 0 / 1);",
      },
    },
  },
  plugins: [],
};
export default config;
