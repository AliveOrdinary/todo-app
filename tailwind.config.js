/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      BrightBlue: "hsl(220, 98%, 61%)",
      CheckBackground:
        "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      VLGrayLT: "hsl(0, 0%, 98%)",
      VLGrayBlueLT: "hsl(236, 33%, 92%)",
      LGrayBlueLT: "hsl(233, 11%, 84%)",
      DGrayBlueLT: "hsl(236, 9%, 61%)",
      VDGrayBlueLT: "hsl(235, 19%, 35%)",
      VDBlueDT: "hsl(235, 21%, 11%)",
      VDDesBlueDT: "hsl(235, 24%, 19%)",
      LGrayBlueDT: "hsl(234, 39%, 85%)",
      LGrayBlueHoverDT: "hsl(236, 33%, 92%)",
      DGrayBlueDT: "hsl(234, 11%, 52%)",
      VDGrayBlueDT: "hsl(233, 14%, 35%)",
      VDGrayBlueDT: "hsl(237, 14%, 26%)",
    },
    extend: {
      backgroundImage: {
        "dark-bgi": "url('/images/bg-desktop-dark.jpg')",
        "light-bgi": "url('/images/bg-desktop-light.jpg')",
        "mobile-dark-bgi": "url('/images/bg-mobile-dark.jpg')",
        "mobile-light-bgi": "url('/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
