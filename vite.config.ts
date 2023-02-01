import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

/**
 * @see https://vitejs.dev/config
 * @see https://vitest.dev/guide/#configuring-vitest
 */
const viteConfig = defineConfig({
	build: {
		assetsInlineLimit: 2048 /* bytes */,
		chunkSizeWarningLimit: 256 /* kilobytes */,
		emptyOutDir: true,
		minify: "esbuild",
		outDir: inProjectDirectory("build"),
		reportCompressedSize: false,
	},
	preview: {
		host: "0.0.0.0",
		port: 80,
		strictPort: true,
	},
	publicDir: false,
	resolve: {
		alias: {
			"+game": inProjectDirectory("src/game/"),
			"+game/turn-taking": inProjectDirectory("src/game/turn-taking/"),
			"+game/world-age": inProjectDirectory("src/game/world-age/"),
			"+game/world-layout": inProjectDirectory("src/game/world-layout/"),
			"+utilities": inProjectDirectory("src/utilities/"),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 8000,
		strictPort: true,
	},
	test: {
		coverage: {
			include: ["**/*.{ts,tsx}"],
			reporter: ["html"],
		},
		globals: true, // Makes test cases compatible with Jest-related tooling, such as ESLint and Testing Library (for automatic cleanup).
		include: ["**/*.spec.{ts,tsx}"],
	},
})

function inProjectDirectory(relativeToProjectRoot: string): string {
	return resolve(__dirname, relativeToProjectRoot)
}

export default viteConfig
