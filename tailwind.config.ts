import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE724C',
        background: "#F8F3ED",
        gray_: "#5F5F5F",
        black_: "#1E1E1E",
        title: "#101828",
        description: "#5A5151",
        
        dark_gray: "#555454",
        sky_light: "#F5F8FD",
        
      },

    },
  },
  plugins: [],
};
export default config;
