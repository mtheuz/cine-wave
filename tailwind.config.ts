import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-primary': '#000625',
        'blue-secondary' : '#000937',
        'font-logo' : '#0592C6'
      },
      height:{
        'section-height' : '48rem',
        'header-height' : '5rem'
      },
      maxWidth:{
        'header-maxWidht' : '90rem'
      }

    },
  },
  plugins: [],
};
export default config;
