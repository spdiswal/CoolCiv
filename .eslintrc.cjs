/**
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://eslint.org/docs/latest/rules
 */
const defaultConfiguration = {
	files: ["*.cjs", "*.mjs", "*.ts", "*.tsx"],
	rules: {
		"accessor-pairs": [
			"error",
			{
				setWithoutGet: true,
				getWithoutSet: false,
			},
		],
		"array-callback-return": ["error", { allowImplicit: false }],
		"arrow-body-style": ["error", "as-needed"], // Might conflict with Prettier. Please disable this rule if it does :)
		"block-scoped-var": "error",
		camelcase: [
			"error",
			{
				ignoreDestructuring: false,
				ignoreGlobals: false,
				ignoreImports: false,
				properties: "always",
			},
		],
		"capitalized-comments": "off",
		complexity: "off",
		"consistent-return": "off", // Does not work properly in exhaustive switch-statements.
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		eqeqeq: ["error", "always"],
		"for-direction": "error",
		"func-name-matching": ["error", "always"],
		"func-names": ["error", "always"],
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"getter-return": ["error", { allowImplicit: false }],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "error",
		"id-denylist": "off", // Not configured for now.
		"id-length": ["error", { min: 2 }],
		"id-match": "off", // Not configured for now.
		"init-declarations": ["error", "always"],
		"max-depth": ["error", { max: 3 }],
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": ["error", { max: 2 }],
		"max-params": ["error", { max: 3 }],
		"max-statements": "off",
		"multiline-comment-style": ["error", "separate-lines"],
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"no-console": ["error", { allow: ["debug", "info", "warn", "error"] }],
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", { checkLoops: true }],
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-args": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-eq-null": "off", // Redundant with "eqeqeq".
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "off", // Allows function declarations.
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": [
			"error",
			{
				skipStrings: false,
				skipComments: false,
				skipRegExps: false,
				skipTemplates: false,
			},
		],
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": [
			"error",
			{
				ignore: [-1, 0, 1],
				ignoreArrayIndexes: true,
			},
		],
		"no-misleading-character-class": "error",
		"no-mixed-operators": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "off",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": "error",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-exports": "off", // Not configured for now.
		"no-restricted-globals": "off", // Not configured for now.
		"no-restricted-imports": "off", // Not configured for now.
		"no-restricted-properties": "off", // Not configured for now.
		"no-restricted-syntax": "off", // Not configured for now.
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-setter-return": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-undef": "error",
		"no-undef-init": "off", // Conflicts with "init-declarations".
		"no-undefined": "off",
		"no-underscore-dangle": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-vars": "error",
		"no-use-before-define": [
			"error",
			{
				functions: false, // Allows the step-down rule by Uncle Bob (https://dzone.com/articles/the-stepdown-rule).
				variables: true, // Desired due to block-level bindings in ES2015.
			},
		],
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-with": "error",
		"object-shorthand": ["error", "always"],
		"one-var": ["error", "never"],
		"operator-assignment": "error",
		"prefer-arrow-callback": "error", // Might conflict with Prettier. Please disable this rule if it does :)
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "off", // Supported by browsers only since 2018.
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "off", // Supported by Safari only since 2022.
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		radix: ["error", "always"],
		"require-atomic-updates": "error",
		"require-await": "error",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"sort-keys": "off", // Changes the program semantics, as the evaluation order of keys may change.
		"sort-vars": "off", // Redundant with "one-var".
		"spaced-comment": ["error", "always", { markers: ["/"] }],
		strict: ["error", "never"],
		"symbol-description": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"vars-on-top": "off", // Redundant with "no-var".
		yoda: ["error", "never"],
	},
}

/**
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules
 */
const eslintCommentsConfiguration = {
	files: ["*.cjs", "*.mjs", "*.ts", "*.tsx"],
	plugins: ["eslint-comments"],
	rules: {
		"eslint-comments/disable-enable-pair": "error",
		"eslint-comments/no-aggregating-enable": "error",
		"eslint-comments/no-duplicate-disable": "error",
		"eslint-comments/no-unlimited-disable": "error",
		"eslint-comments/no-unused-disable": "error",
		"eslint-comments/no-unused-enable": "error",
		"eslint-comments/no-restricted-disable": "off", // Not configured for now.
		"eslint-comments/no-use": "off", // Conflicts with other rules in eslint-comments.
		"eslint-comments/require-description": [
			"error",
			{ ignore: ["eslint-enable"] },
		],
		//
		"unicorn/no-abusive-eslint-disable": "off",
	},
}

/**
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://github.com/eslint-functional/eslint-plugin-functional#supported-rules
 */
const functionalConfiguration = {
	files: ["*.cjs", "*.mjs", "*.ts", "*.tsx"],
	plugins: ["functional"],
	rules: {
		"functional/functional-parameters": [
			"error",
			{
				allowRestParameter: true,
				allowArgumentsKeyword: false,
				enforceParameterCount: false,
			},
		],
		"functional/immutable-data": [
			"error",
			{
				assumeTypes: false,
				ignoreImmediateMutation: true,
				ignorePattern:
					"(\\.current)" + // Allows refs.
					"|(document\\.)" + // Allows modifying document attributes.
					"|(location\\.href)" + // Allows programmatic navigation.
					"|(module\\.exports)", // Allows CommonJS module exports.
			},
		],
		"functional/no-class": "error",
		"functional/no-conditional-statement": "off",
		"functional/no-expression-statement": "off",
		"functional/no-let": [
			"error",
			{
				allowInForLoopInit: true,
				allowLocalMutation: false,
			},
		],
		"functional/no-loop-statement": "off",
		"functional/no-method-signature": ["error", { ignoreIfReadonly: true }],
		"functional/no-mixed-type": "off", // Allows render props in components.
		"functional/no-promise-reject": "off",
		"functional/no-return-void": "off",
		"functional/no-this-expression": "error",
		"functional/no-throw-statement": "off", // Allows explicit program crashes to indicate programming errors.
		"functional/no-try-statement": "off", // Allows interoperability with browser APIs, third-party libraries etc.
		"functional/prefer-tacit": "error",
		//
		"class-methods-use-this": "off",
		"consistent-this": "off",
		"constructor-super": "off",
		"lines-between-class-members": "off",
		"max-classes-per-file": "off",
		"no-class-assign": "off",
		"no-constructor-return": "off",
		"no-dupe-class-members": "off",
		"no-invalid-this": "off",
		"no-this-before-super": "off",
		"no-unused-private-class-members": "off",
		"no-useless-constructor": "off",
		//
		"unicorn/custom-error-definition": "off",
		"unicorn/no-array-method-this-argument": "off",
		"unicorn/no-static-only-class": "off",
		"unicorn/no-this-assignment": "off",
		//
		"@typescript-eslint/class-literal-property-style": "off",
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/lines-between-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "off",
		"@typescript-eslint/no-extraneous-class": "off",
		"@typescript-eslint/no-invalid-this": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-useless-constructor": "off",
		"@typescript-eslint/parameter-properties": "off",
		"@typescript-eslint/prefer-readonly": "off",
		"@typescript-eslint/prefer-return-this-type": "off",
	},
}

/**
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules
 */
const unicornConfiguration = {
	files: ["*.cjs", "*.mjs", "*.ts", "*.tsx"],
	plugins: ["unicorn"],
	rules: {
		"unicorn/better-regex": "error",
		"unicorn/catch-error-name": "error",
		"unicorn/consistent-destructuring": "error",
		"unicorn/consistent-function-scoping": "error",
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/expiring-todo-comments": [
			"error",
			{
				allowWarningComments: false,
				ignore: [/\(#\d+\)/u], // Ignores comments that include a GitHub issue number in parentheses, e.g. (#1337).
			},
		],
		"unicorn/explicit-length-check": "error",
		"unicorn/filename-case": [
			"error",
			{
				cases: {
					kebabCase: true,
					pascalCase: true,
				},
			},
		],
		"unicorn/import-style": "error",
		"unicorn/new-for-builtins": "error",
		"unicorn/no-array-callback-reference": "error",
		"unicorn/no-array-for-each": "error",
		"unicorn/no-array-push-push": "error",
		"unicorn/no-array-reduce": "error",
		"unicorn/no-await-expression-member": "error",
		"unicorn/no-console-spaces": "error",
		"unicorn/no-document-cookie": "error",
		"unicorn/no-empty-file": "error",
		"unicorn/no-for-loop": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"unicorn/no-keyword-prefix": "off",
		"unicorn/no-lonely-if": "error",
		"unicorn/no-nested-ternary": "off", // Disabled in favour of "no-nested-ternary", which is stricter.
		"unicorn/no-new-array": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-null": "off", // We prefer null over undefined.
		"unicorn/no-object-as-default-parameter": "error",
		"unicorn/no-process-exit": "error",
		"unicorn/no-thenable": "error",
		"unicorn/no-unreadable-array-destructuring": "error",
		"unicorn/no-unreadable-iife": "error",
		"unicorn/no-unsafe-regex": "error",
		"unicorn/no-unused-properties": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"unicorn/no-useless-spread": "error",
		"unicorn/no-useless-switch-case": "error",
		"unicorn/no-useless-undefined": "off", // Conflicts with "init-declarations".
		"unicorn/no-zero-fractions": "error",
		"unicorn/number-literal-case": "error",
		"unicorn/numeric-separators-style": "error",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-array-flat": "off", // Only supported by browsers since 2018.
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-some": "error",
		"unicorn/prefer-at": "off", // Only supported by browsers since 2021.
		"unicorn/prefer-code-point": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-default-parameters": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-dom-node-text-content": "error",
		"unicorn/prefer-event-target": "error",
		"unicorn/prefer-export-from": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-json-parse-buffer": "error",
		"unicorn/prefer-keyboard-event-key": "error",
		"unicorn/prefer-logical-operator-over-ternary": "error",
		"unicorn/prefer-math-trunc": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-modern-math-apis": "error",
		"unicorn/prefer-module": "off", // Allows configuration files in CommonJS.
		"unicorn/prefer-native-coercion-functions": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-node-protocol": "error",
		"unicorn/prefer-number-properties": "error",
		"unicorn/prefer-object-from-entries": "error",
		"unicorn/prefer-optional-catch-binding": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/prefer-reflect-apply": "error",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-set-has": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-string-replace-all": "off", // Only supported by browsers since 2020.
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-switch": "error",
		"unicorn/prefer-ternary": "error",
		"unicorn/prefer-top-level-await": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/prevent-abbreviations": [
			"error",
			{
				checkProperties: true,
				ignore: [
					"^.*[dD]ir[s]?",
					"^.*[eE]nv[s]?",
					"^.*[pP]aram[s]?",
					"^.*[pP]rop[s]?",
					"^.*[rR]ef[s]?",
				],
			},
		],
		"unicorn/relative-url-style": ["error", "never"],
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		"unicorn/require-post-message-target-origin": "error",
		"unicorn/string-content": [
			"error",
			{
				patterns: {
					// eslint-disable-next-line unicorn/string-content -- This particular string is appropriate, as it declares the forbidden multi-space pattern :P
					"  ": {
						suggest: " ",
						message: "Replace multiple spaces with a single one.",
					},
				},
			},
		],
		"unicorn/template-indent": "error",
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",
		//
		"no-warning-comments": "off",
	},
}

/**
 * The Vitest API is compatible with that of Jest whose ESLint support is more mature.
 *
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://github.com/jest-community/eslint-plugin-jest#rules
 */
const vitestConfiguration = {
	env: {
		jest: true,
	},
	files: ["*.spec.cjs", "*.spec.mjs", "*.spec.ts", "*.spec.tsx"],
	plugins: ["jest"],
	rules: {
		"max-nested-callbacks": ["error", { max: 4 }], // Allows nested tests.
		//
		"jest/consistent-test-it": "error",
		"jest/expect-expect": "error",
		"jest/max-expects": ["error", { max: 5 }],
		"jest/max-nested-describe": ["error", { max: 3 }],
		"jest/no-alias-methods": "error",
		"jest/no-commented-out-tests": "error",
		"jest/no-conditional-expect": "error",
		"jest/no-conditional-in-test": "error",
		"jest/no-deprecated-functions": "off", // Not applicable for Vitest.
		"jest/no-disabled-tests": "error",
		"jest/no-done-callback": "error",
		"jest/no-duplicate-hooks": "error",
		"jest/no-export": "error",
		"jest/no-focused-tests": "error",
		"jest/no-hooks": "error",
		"jest/no-identical-title": "error",
		"jest/no-interpolation-in-snapshots": "error",
		"jest/no-jasmine-globals": "error",
		"jest/no-large-snapshots": "error",
		"jest/no-mocks-import": "error",
		"jest/no-restricted-matchers": "error",
		"jest/no-standalone-expect": "error",
		"jest/no-test-prefixes": "error",
		"jest/no-test-return-statement": "error",
		"jest/prefer-called-with": "error",
		"jest/prefer-comparison-matcher": "error",
		"jest/prefer-equality-matcher": "error",
		"jest/prefer-expect-assertions": "off",
		"jest/prefer-expect-resolves": "error",
		"jest/prefer-hooks-in-order": "off", // Conflicts with "jest/no-hooks".
		"jest/prefer-hooks-on-top": "off", // Conflicts with "jest/no-hooks".
		"jest/prefer-lowercase-title": ["error", { ignoreTopLevelDescribe: true }],
		"jest/prefer-mock-promise-shorthand": "error",
		"jest/prefer-snapshot-hint": "error",
		"jest/prefer-spy-on": "error",
		"jest/prefer-strict-equal": "error",
		"jest/prefer-to-be": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-todo": "error",
		"jest/require-hook": "off", // Conflicts with "jest/no-hooks".
		"jest/require-to-throw-message": "error",
		"jest/require-top-level-describe": "error",
		"jest/unbound-method": "error",
		"jest/valid-describe-callback": "error",
		"jest/valid-expect": "error",
		"jest/valid-expect-in-promise": "error",
		"jest/valid-title": "error",
		//
		"@typescript-eslint/no-magic-numbers": "off",
		"@typescript-eslint/unbound-method": "off",
		//
		"unicorn/numeric-separators-style": "off",
	},
}

/**
 * @type {import("eslint").Linter.ConfigOverride}
 * @see https://github.com/a-tarasyuk/eslint-plugin-redundant-undefined#usage
 * @see https://typescript-eslint.io/rules/#supported-rules
 */
const typescriptConfiguration = {
	files: ["*.ts", "*.tsx"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "redundant-undefined"],
	rules: {
		"no-restricted-syntax": [
			"error",
			{
				selector: "TSEnumDeclaration",
				message: "Prefer string literal types over enums",
			},
		],
		//
		"functional/prefer-readonly-type": [
			"error",
			{
				allowLocalMutation: false,
				allowMutableReturnType: false,
				checkImplicit: false,
				ignoreClass: true,
				ignoreInterface: false,
				ignoreCollections: false,
			},
		],
		//
		"redundant-undefined/redundant-undefined": "error",
		//
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", { default: "generic" }],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-tslint-comment": "error",
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {}, // Not configured for now.
				extendDefaults: true,
			},
		],
		"@typescript-eslint/consistent-generic-constructors": [
			"error",
			"constructor",
		],
		"@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				assertionStyle: "as",
				objectLiteralTypeAssertions: "allow-as-parameter",
			},
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-exports": [
			"error",
			{
				fixMixedExportsWithInlineTypeSpecifier: true,
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				disallowTypeAnnotations: true,
			},
		],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off", // Allows function declarations of components and hooks without explicit return types.
		"@typescript-eslint/init-declarations": ["error", "always"],
		"@typescript-eslint/member-ordering": "off", // This rule is not auto-fixable, which would have caused a poor developer experience.
		"@typescript-eslint/method-signature-style": ["error", "property"],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variableLike",
				format: [
					"camelCase", // Default.
					"PascalCase", // Components.
				],
			},
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["has", "is"],
			},
			{
				selector: "parameter",
				format: ["PascalCase"],
				filter: { regex: "^(Component|Story)$", match: true },
			},
			{
				selector: "property",
				format: [
					"camelCase", // Default.
					"PascalCase", // Components.
				],
				leadingUnderscore: "forbid",
			},
			{
				selector: "objectLiteralProperty",
				format: null, // Allows keys with special formatting such HTTP headers etc.
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": [
			"error",
			{
				ignoreArrowShorthand: true,
				ignoreVoidOperator: true,
			},
		],
		"@typescript-eslint/no-duplicate-enum-values": "off", // Redundant with "no-restricted-syntax" that disallows enum declarations.
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "off", // Redundant with "@typescript-eslint/consistent-type-definitions".
		"@typescript-eslint/no-explicit-any": "error", // Encourages people to use the `unknown` type instead of `any`.
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-loop-func": "error",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/no-magic-numbers": [
			"error",
			{
				ignore: [-1, 0, 1],
				ignoreArrayIndexes: true,
				ignoreNumericLiteralTypes: true,
				ignoreTypeIndexes: true,
			},
		],
		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false, // Allows asynchronous event handlers on DOM elements.
			},
		],
		"@typescript-eslint/no-namespace": "off", // Allows nested type declaration via namespaces.
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-redeclare": "off", // Allows nested type declaration via namespaces.
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-restricted-imports": "off", // Not configured for now.
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-type-alias": "off", // Conflicts with "@typescript-eslint/consistent-type-definitions".
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "off", // Redundant with "@typescript-eslint/no-explicit-any".
		"@typescript-eslint/no-unsafe-assignment": "off", // Redundant with "@typescript-eslint/no-explicit-any".
		"@typescript-eslint/no-unsafe-call": "off", // Redundant with "@typescript-eslint/no-explicit-any".
		"@typescript-eslint/no-unsafe-member-access": "off", // Redundant with "@typescript-eslint/no-explicit-any".
		"@typescript-eslint/no-unsafe-return": "off", // Redundant with "@typescript-eslint/no-explicit-any".
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{
				enums: false, // Redundant with "no-restricted-syntax" that disallows enum declarations.
				functions: false, // Allows the step-down rule by Uncle Bob (https://dzone.com/articles/the-stepdown-rule).
				classes: false,
				typedefs: false, // Allows the step-down rule by Uncle Bob (https://dzone.com/articles/the-stepdown-rule).
				variables: true, // Desired due to block-level bindings in ES2015.
			},
		],
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-enum-initializers": "off", // Redundant with "no-restricted-syntax" that disallows enum declarations.
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "off", // Redundant with "no-restricted-syntax" that disallows enum declarations.
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "off", // Allows interoperability with third-party libraries etc.
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/return-await": "error",
		"@typescript-eslint/sort-type-union-intersection-members": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/typedef": "off",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "error",
		//
		camelcase: "off",
		"default-param-last": "off",
		"dot-notation": "off",
		"init-declarations": "off",
		"no-array-constructor": "off",
		"no-duplicate-imports": "off",
		"no-empty-function": "off",
		"no-extra-semi": "off",
		"no-implied-eval": "off",
		"no-invalid-this": "off",
		"no-loop-func": "off",
		"no-loss-of-precision": "off",
		"no-magic-numbers": "off",
		"no-redeclare": "off",
		"no-restricted-imports": "off",
		"no-shadow": "off",
		"no-throw-literal": "off",
		"no-unused-expressions": "off",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"no-useless-constructor": "off",
		"require-await": "off",
	},
}

/**
 * @type {import("eslint").Linter.ConfigOverride}
 */
const prettierConfiguration = {
	files: ["*.cjs", "*.mjs", "*.ts", "*.tsx"],
	rules: {
		"array-bracket-newline": "off",
		"array-bracket-spacing": "off",
		"array-element-newline": "off",
		"arrow-parens": "off",
		"arrow-spacing": "off",
		"block-spacing": "off",
		"brace-style": "off",
		"comma-dangle": "off",
		"comma-spacing": "off",
		"comma-style": "off",
		"computed-property-spacing": "off",
		curly: "off",
		"dot-location": "off",
		"eol-last": "off",
		"func-call-spacing": "off",
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": "off",
		"implicit-arrow-linebreak": "off",
		indent: "off",
		"jsx-quotes": "off",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"line-comment-position": "off",
		"linebreak-style": "off",
		"lines-around-comment": "off",
		"max-len": "off",
		"max-statements-per-line": "off",
		"multiline-ternary": "off",
		"new-parens": "off",
		"newline-per-chained-call": "off",
		"no-confusing-arrow": "off",
		"no-extra-parens": "off",
		"no-extra-semi": "off",
		"no-floating-decimal": "off",
		"no-mixed-spaces-and-tabs": "off",
		"no-multi-spaces": "off",
		"no-multiple-empty-lines": "off",
		"no-tabs": "off",
		"no-trailing-spaces": "off",
		"no-whitespace-before-property": "off",
		"nonblock-statement-body-position": "off",
		"object-curly-newline": "off",
		"object-curly-spacing": "off",
		"object-property-newline": "off",
		"one-var-declaration-per-line": "off",
		"operator-linebreak": "off",
		"padded-blocks": "off",
		"padding-line-between-statements": "off",
		"quote-props": "off",
		quotes: "off",
		"rest-spread-spacing": "off",
		semi: "off",
		"semi-spacing": "off",
		"semi-style": "off",
		"sort-imports": "off",
		"space-before-blocks": "off",
		"space-before-function-paren": "off",
		"space-in-parens": "off",
		"space-infix-ops": "off",
		"space-unary-ops": "off",
		"switch-colon-spacing": "off",
		"template-curly-spacing": "off",
		"template-tag-spacing": "off",
		"unicode-bom": "off",
		"wrap-iife": "off",
		"wrap-regex": "off",
		"yield-star-spacing": "off",
		//
		"@typescript-eslint/brace-style": "off",
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/comma-spacing": "off",
		"@typescript-eslint/func-call-spacing": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/keyword-spacing": "off",
		"@typescript-eslint/member-delimiter-style": "off",
		"@typescript-eslint/no-extra-parens": "off",
		"@typescript-eslint/no-extra-semi": "off",
		"@typescript-eslint/object-curly-spacing": "off",
		"@typescript-eslint/padding-line-between-statements": "off",
		"@typescript-eslint/quotes": "off",
		"@typescript-eslint/semi": "off",
		"@typescript-eslint/space-before-blocks": "off",
		"@typescript-eslint/space-before-function-paren": "off",
		"@typescript-eslint/space-infix-ops": "off",
		"@typescript-eslint/type-annotation-spacing": "off",
		//
		"unicorn/empty-brace-spaces": "off",
	},
}

/**
 * @type {import("eslint").Linter.Config}
 * @see https://eslint.org/docs/latest/user-guide/configuring
 */
const eslintConfig = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	overrides: [
		defaultConfiguration,
		eslintCommentsConfiguration,
		functionalConfiguration,
		typescriptConfiguration,
		unicornConfiguration,
		vitestConfiguration,
		prettierConfiguration, // Must be declared last in order to take precedence over the other configurations.
	],
}

module.exports = eslintConfig
