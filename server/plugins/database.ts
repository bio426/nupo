import postgres from "postgres"

let sql: postgres.Sql

export default defineNitroPlugin((nitroApp) => {
	const config = useRuntimeConfig()
	const opts: postgres.Options<{}> = {
		host: config.pgHost,
		port: Number(config.pgPort),
		user: config.pgUser,
		password: config.pgPassword,
		database: config.pgDatabase,
	}
	if (!import.meta.dev) {
		opts.ssl = "require"
	}
	sql = postgres(opts)
})

export { sql }
