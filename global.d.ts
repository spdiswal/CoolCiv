/**
 * By using triple-slash references instead of the `compilerOptions.types`
 * setting in `tsconfig.json`, we can preserve the default TypeScript setting
 * that automatically adds all `@types/*` third-party dependencies to the
 * globally visible types.
 *
 * @see https://www.typescriptlang.org/tsconfig#types
 */
/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
