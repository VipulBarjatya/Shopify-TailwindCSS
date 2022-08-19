module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)",
      },
      colors: {
        shopgreen: "#008060",
        shopcream: "#fdf8ee",
        shopcream2: "#fbf7ed",
        shopdarkgreen: "#004c3f",
        shopextradark: "#002e25",
        shoplightgreen: "#f3fcf4",
      },
    },
  },
  plugins: [require("daisyui")],
};
