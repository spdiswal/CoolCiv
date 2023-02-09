/**
 * @type {import("prettier").Config}
 * @see https://prettier.io/docs/en/configuration.html
 */
const prettierConfig = {
	plugins: ["prettier-plugin-organize-imports"],
	semi: false,
	trailingComma: "all",
}

module.exports = prettierConfig
