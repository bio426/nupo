import { sql } from "../plugins/database"

export default eventHandler(async (event) => {
	const rows = await sql<{ sum: number }[]>`select 1 + 2 as sum`
	const row = rows[0]

	return {
		foo: "bar",
	}
})
