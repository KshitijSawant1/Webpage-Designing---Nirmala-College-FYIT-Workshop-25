export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        code: ["Fira Mono", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
