import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      affair: '#744aa3',
        astronaut: '#272d70',
        viking: '#64d6d6',
        'catskill-white': '#f1f4f8',
        'puerto-rico': '#3ecbbc',
        'muddy-waters': '#b4905a',
        'london-hue': '#bb9ec3',
        'jagged-ice': '#bbe3e5',
        pavlova: '#dcc99d',
        prelude: '#d9c6e5', 
    }
  },
  plugins: [],
};
export default config;
