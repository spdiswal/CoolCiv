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
		outDir: resolve(__dirname, "build"),
		reportCompressedSize: false,
	},
	preview: {
		host: "0.0.0.0",
		port: 80,
		strictPort: true,
	},
	publicDir: false,
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

export default viteConfig
