/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        cardo: ["var(--font-cardo)"],
        tenor: ["var(--font-tenor)"],
        gochi: ["var(--font-gochi)"],
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slidein: "1s ease-out 0s 1 slide-in",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-blue-400",
    "text-base",
    "py-1",
    "px-2.5",
    "rounded",
    "bg-red-600",
    "hover:cursor-pointer",
    "text-white",
    "min-h-[20rem]",
    "max-h-[20rem]",
    "overflow-y-scroll",
    "px-2",
    "font-bold",
    "italic",
    "line-through",
    "p-4",
    "my-4",
    "w-max",
    "mx-auto",
    "bg-gray-100",
    "border-1-4",
    "border-gray-300",
    "text-4xl",
    "text-2xl",
    "text-xl",
    "text-lg",
    "underline",
    "flex",
    "mx-auto",
    "max-w-[80%]",
    "text-sm",
    "bg-black",
    "text-3xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
  ],
};
