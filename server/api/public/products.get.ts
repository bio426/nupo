import { sql } from "~/server/plugins/database"

import * as tPublic from "~/types/public"

export default eventHandler(async (event) => {
	const rows = await sql`select id,name,price from products`
	const res: tPublic.Product[] = rows.map((row) => ({
		id: Number(row.id),
		name: String(row.name),
		price: Number(row.price),
	}))

	return res
})
