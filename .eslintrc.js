module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'import',
		'vuetify',
	],
	// add your custom rules here
	rules: {
		'linebreak-style': 0,
		'no-tabs': 'off',
		camelcase: 'off',
		'no-new': 'off',
		'no-param-reassign': [2, { props: false }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'class-methods-use-this': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab'],
		'vue/script-indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		semi: ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'never', named: 'never' }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					// ["~global", "./src/components/global"],
					// ["~lib", "./src/common/lib"],
					// ["~logic", "./src/common/logic"],
					['~', './src'],
					['@', './src'],
				],
				extensions: ['.js', '.ts', '.vue', 'json'],
			},
		},
	},
};
