module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vazirmatn: ["Vazirmatn"],
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
