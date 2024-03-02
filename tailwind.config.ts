import type { Config } from "tailwindcss";
import teste from "./public/next.svg";
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
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        "primary-color": "#294E5B",
        "secondary-color": "#ACA2A0",
        "background-color": "#FAFAFA",
        "body-background-color": "#D9D9D9",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000007",
        gray: "#8F8F8F",

        // Dark Theme
        "dark-primary-color": "#000",
      },
      boxShadow: {
        "inner-md": "inset 0px 0px 3px 0px rgb(0 0 0 / 1);",
        large: "0 0px 2px rgba(0, 0, 0, .9)",
        xlarge: "0 0px 10px rgba(0, 0, 0, .8)",
      },
      dropShadow: {
        text: "0 0px 1px rgba(0, 0, 0, .35)",
      },
    },
  },
  plugins: [],
};
export default config;
