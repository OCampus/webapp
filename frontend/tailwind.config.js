/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "primary": "#755AE2",
        "secondary": "#fff",
        "tertiary": "#fff",
        "tertiary-2" : "#F6F3FD",
        "content-1" : "#140227"

      },
      screens: {
        "mdf": "950px"
      }
    },
  },
  plugins: [],
};
