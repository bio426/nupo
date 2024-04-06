import postgres from "postgres"

let sql: postgres.Sql

export default defineNitroPlugin((nitroApp) => {
	const config = useRuntimeConfig()
	sql = postgres({
		host: config.PG_HOST,
		port: 5432,
		user: "postgres",
		password: "password",
		database: "nupo",
	})
})

export { sql }
