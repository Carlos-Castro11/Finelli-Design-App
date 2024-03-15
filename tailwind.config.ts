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
        "background-color-gradient": "rgba(200,200,200,1)",
        "body-background-color": "#D9D9D9",
        "black-banner": "rgba(0,0,0,.65)",
        "light-blue": "#4a8284",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000007",

        // Dark Theme
        "dark-primary-color": "#000",
      },
      boxShadow: {
        "inner-md": "inset 0px 0px 3px 0px rgb(0 0 0 / 1);",
        large: "0 0px 2px rgba(0, 0, 0, .9)",
        "large-white": "0 0px 2px rgba(255, 255, 255, .9)",
        xlarge: "0 0px 10px rgba(0, 0, 0, .8)",
      },
      dropShadow: {
        text: "0 0px 1px rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: [],
};
export default config;
