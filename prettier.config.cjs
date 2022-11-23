/**
 * @type {import("prettier").Config}
 * @see https://prettier.io/docs/en/configuration.html
 */
const prettierConfig = {
	plugins: ["@trivago/prettier-plugin-sort-imports"],
	semi: false,
}

module.exports = prettierConfig
