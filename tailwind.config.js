module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "coundown-linear-gradient":
          "linear-gradient(180deg, rgba(255, 144, 149, 0.15) 0%, rgba(255, 216, 192, 0.15) 100%)",
      },
      boxShadow: {},
      colors: {
        primary1: "#F0F9FC",
        primary4: "#4760C2",
        primary5: "#34499D",
        primary6: "#04A9E0",
        stroke1: "#F5F6F7",
        stroke2: "#EEF0F2",
        stroke4: "#DCE3FF66",
        surface: "#F4F6FF",
        blue5: "#4C87D9",
        red4: "#EE2F2F",
        gray1: "#F4F6F4",
        gray2: "#DDE3DD",
        gray3: "#BCC8BC",
        gray4: "#8FA38F",
        gray5: "#6E876E",
        gray6: "#536553",
        gray7: "#6E7987",
        gray8: "#535B65",
        gray9: "#003D52",
        green1: "#ECFEEE",
        green2: "#CFF3D3",
        green3: "#52CE92",
        green4: "#038546",
        green5: "#02733C",
        green7: "#004222",
        brown1: "#F8EFE6",
        brown6: "#8F5C28",
        yellow4: "#FFD800",
        purple4: "#1274F6",
        senmaticred1: "#FFF5F5",
        senmaticred2: "#FFD6D6",
        error3: "#E55C5C",
        neutral6: "#666666",
        neutral7: "#525252",
        accent6: "#1C9B47",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollbarUtilities = {
        ".hide-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Chrome, Safari, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(scrollbarUtilities);
    },
  ],
};
