export default {
	srcDir: 'src/',
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s',
		title: 'notes-library',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
			{ hid: 'description', name: 'description', content: '' },
			// dev only
			{ 'http-equiv': 'cache-control', content: 'no-cache' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap' },
			{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/styles/main.scss', '~/assets/styles/normalize.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/axios'
	],
	extends: ['airbnb-base'],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify'
	],
	loading: {
		color: '#374785',
		height: '5px',
		failedColor: '#f76c6c'
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},
	publicRuntimeConfig: {
		axios: {
			browserBaseURL: process.env.AXIOS_BASE_URL
		}
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/styles/variables.scss'],
		treeShake: true,
		defaultAssets: false,
		optionsPath: '~/plugins/vuetify.options.js'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		publicPath: process.env.PUBLIC_PATH || '/_nuxt_/'
	},
	env: {
		AXIOS_TIMEOUT: process.env.AXIOS_TIMEOUT || '',
		BASE_URL: process.env.BASE_URL || '',
		TITLE: process.env.TITLE || '',
		SLOW_CONNECTION_PROBABILITY: process.env.SLOW_CONNECTION_PROBABILITY
	}
};
