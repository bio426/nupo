import bcrypt from "bcrypt"
import { z } from "zod"
import jwt from "jsonwebtoken"

import * as tAuth from "~/types/auth"
import { sql } from "~/server/plugins/database"

export default eventHandler(async (event) => {
	const config = useRuntimeConfig()

	const body = await readBody<{ username: string; password: string }>(event)

	const schema = z.object({
		username: z.string(),
		password: z.string(),
	})
	schema.parse(body)

	const rows = await sql<
		{ id: number; username: string; password: string }[]
	>`select id,username,password from users where username = ${body.username}`
	const row = rows[0]
	if (row == undefined) {
		throw createError({
			message: "Incorrect username or password",
			statusCode: 400,
		})
	}

	const valid = await bcrypt.compare(body.password, row.password)
	if (!valid) {
		throw createError({
			message: "Incorrect username or password",
			statusCode: 400,
		})
	}

	const tokenPayload: tAuth.User = {
		id: row.id,
		username: row.username,
	}
	const token = jwt.sign(tokenPayload, config.AUTH_JWT_SECRET)
	setCookie(event, config.AUTH_COOKIE_NAME, token, { httpOnly: true })
})
