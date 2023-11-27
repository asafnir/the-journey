const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'serif': ['NewSpirit', 'serif']
    },
    colors: {
      ...colors,
      'primary': '#05053C',
      'amber': '#F2ECE4',
      'cream': '#FDFCF8',
      'brown': '#B57C71',
      'cream-light': '#F5F1EB',
      'soft-cream': '#FAF6EF',
      'floral': '#FDFCF9',
      'red': '#A63528',
      'blue': '#62ABBC',
      'eastern-blue':'#007E9E',
      'sky-light': '#66B9CF',
      'blue-light': '#d7ebef',
      'cyan-blue':  '#DDECFA',
      'gray': '#94918D',
      'gray-light': '#eeeeee',
      'sky': "#539BAD",
      'bone': '#FDFCF9',
      'green': '#3A8D2C',
      'green-light': '#C5EBD2',
      'orange': '#FF9F2D',
      'orange-light': '#FFCA8C',
      'mistry-purple': '#32446C',
      'purple-light': '#EDEBFF',
      'purple': '#5E59AF',
      "gray-primary": "#1F1D2B"
    },
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(101.67deg, #41bb54 27.21%, #387fe7 74.94%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
