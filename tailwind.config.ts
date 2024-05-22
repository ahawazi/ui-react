import type {Config} from "tailwindcss";

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
            colors: {
                "primary": "#3fdaca",
                "secondary": "#9655e7",
                "onSecondary": "#5b46a5",
                "onPrimary": "#effef7",
                "surface": "#f2efff",
            },
            borderRadius: {
                '4xl': "1.75rem",
                '5xl': "2rem",
                '6xl': "2.25rem",
                '7xl': "2.5rem",
                '8xl': "2.75rem",
                '9xl': "3rem",
                '10xl': "3.25rem",
            }
        },
    },
    plugins: [],
};
export default config;
