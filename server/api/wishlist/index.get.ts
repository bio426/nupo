import { sql } from "~/server/plugins/database"

import * as tPublic from "~/types/public"
import * as tAuth from "~/types/auth"

export default eventHandler(async (event) => {
	const user = event.context.auth as tAuth.User

	const rows =
		await sql`select p.id,p.name,p.price from products p join wishlist w on w.product_id = p.id where w.user_id = ${user.id}`
	const res: tPublic.Product[] = rows.map((row) => ({
		id: Number(row.id),
		name: String(row.name),
		price: Number(row.price),
		inWishlist: true,
	}))

	return res
})
