/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  semi: true,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
};
