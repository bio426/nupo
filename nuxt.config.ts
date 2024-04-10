// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
	app: {
		head: {
			link: [
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			],
			title: "Nupo",
		},
	},
	runtimeConfig: {
		//  App
		authJwtSecret: "",
		authCookieName: "",
		//  Postgres
		pgHost: "",
		pgPort: "",
		pgUser: "",
		pgPassword: "",
		pgDatabase: "",
	},
	modules: ["@pinia/nuxt"],
})
