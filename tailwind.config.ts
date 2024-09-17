import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        'body1': '12rem',  // 2px
        'mobile':"1rem",
      },
      screens: {
        // '3xl': '1600px', //  (>= 1600px)
        '3xl': '1620px', //  (>= 1920px)
        "4xl":	"1880px",
        "5xl":"2000px"

        // sm	640px
        // md	768px	
        // lg	1024px	
        // xl	1280px	
        // 2xl	1536px
      },
    },
  },
  plugins: [],
};
export default config;
