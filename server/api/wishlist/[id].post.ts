import { sql } from "~/server/plugins/database"

import * as tAuth from "~/types/auth"

export default eventHandler(async (event) => {
	const id = getRouterParam(event, "id")
	const user = event.context.auth as tAuth.User

	if (id == undefined || Number.isNaN(Number(id))) {
		throw createError({ statusCode: 400 })
	}

	await sql`insert into wishlist(user_id,product_id) values (${user.id},${id})`

	setResponseStatus(event, 201)
})
