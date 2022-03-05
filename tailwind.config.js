module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
