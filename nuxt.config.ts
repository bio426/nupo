// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			link: [
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			],
			title: "Nupo",
		},
	},
	runtimeConfig: {},
	nitro: {
		runtimeConfig: {
			PG_HOST: "localhost",
			AUTH_COOKIE_NAME: "nupo-token",
			AUTH_JWT_SECRET: "my-secret",
		},
	},
})
