// vite.config.js
export default {
  // config options
  //   base: "/publicify/",
};
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "about.html"),
        main: resolve(__dirname, "contact.html"),
      },
    },
  },
});
