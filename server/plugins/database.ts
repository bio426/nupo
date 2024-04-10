import postgres from "postgres"

let sql: postgres.Sql

export default defineNitroPlugin((nitroApp) => {
	const config = useRuntimeConfig()
	sql = postgres({
		host: config.pgHost,
		port: Number(config.pgPort),
		user: config.pgUser,
		password: config.pgPassword,
		database: config.pgDatabase,
	})
})

export { sql }
