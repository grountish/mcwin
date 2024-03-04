/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: "#524DF6",
        mainGreen: "#17CAC6",
        lightBlack: "#001325",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.375rem",
        "5xs": "0.25rem",
        headline: "140px",
      },
      fontFamily: {
        interBlack: ["Inter-Black", "sans-serif"],
        interBold: ["Inter-Bold", "sans-serif"],
        interExtraBold: ["Inter-ExtraBold", "sans-serif"],
        interLight: ["Inter-Light", "sans-serif"],
        inter: ["Inter-Regular", "sans-serif"],
        aonik: ["aonik-black", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: { max: "380px" },
      },
    },
  },
  plugins: [],
};
