import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peace: {
          "400": "#361E1E",
        },
        crusta: {
          // "50": "#fff6ed",
          // "100": "#ffebd4",
          // "200": "#ffd2a8",
          // "300": "#ffb271",
          // "350": "#FFA86F",
          // "400": "#ff8434",
          // "500": "#fe6511",
          // "600": "#ef4a07",
          // "700": "#c63408",
          // "800": "#9d2b0f",
          // "900": "#7e2610",
          // "950": "#441006",

          "50": "#f9f9ed",
          "100": "#efefd2",
          "200": "#e1dda7",
          "300": "#d0c774",
          "350": "#cfc56d",
          "400": "#c4b454",
          "500": "#b29d40",
          "600": "#997f35",
          "700": "#7b602d",
          "800": "#684f2b",
          "900": "#5a4329",
          "950": "#332415",
        },
        "soft-peach": {
          "50": "#faf6f6",
          "100": "#f5eeee",
          "200": "#ebdddd",
          "300": "#ddc4c4",
          "400": "#c7a2a2",
          "500": "#b18282",
          "600": "#9a6868",
          "700": "#805555",
          "800": "#6c4848",
          "900": "#5c4040",
          "950": "#301f1f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
