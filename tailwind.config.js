module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      orbitron: "'Orbitron', sans-serif",
      merienda: "'Merienda', cursive",
      "dm-sans": "'DM Sans', sans-serif",
    },
    extend: {
      colors: {
        "gray-primary": "#1F1D2B",
      },

      backgroundImage: {
        "text-gradient":
          "linear-gradient(101.67deg, #41bb54 27.21%, #387fe7 74.94%)",
      },
    },
  },
  plugins: [],
};
