const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		require('daisyui')
	],

	daisyui: {
		themes: ['autumn', 'night'],
		darkTheme: 'night'
	}
};

module.exports = config;
