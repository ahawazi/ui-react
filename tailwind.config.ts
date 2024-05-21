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
        'black-haze': '#edefee',
        'butterfly-bush': '#705294',
        'turquoise-blue': '#5deadc',
        edward: '#aab0b1',
        'clay-creek': '#897d5a',
        'blue-smoke': '#6f8784',
        aquamarine: '#80f9f7',
        'ship-cove': '#6883b7',
        roman: '#d65b65',
        'jelly-bean': '#2c80b4',
        'gray-nurse': '#ecefed',
        'butterfly-bushh': '#62508d',
        'turquoise-bluee': '#5febde',
        opal: '#a1bec5',
        'smalt-blue': '#538083',
        astral: '#3086ac',
        dingley: '#688254',
        'chestnut-rose': '#d25963',
        keppel: '#3baca4',
        java: '#20e0a4',
    }
  },
  plugins: [],
};
export default config;
