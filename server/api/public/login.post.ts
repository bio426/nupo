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
	try {
		schema.parse(body)
	} catch (err) {
		throw createError({ statusCode: 400 })
	}

	const rows = await sql<
		{ id: number; username: string; password: string }[]
	>`select id,username,password from users where username = ${body.username}`
	const row = rows[0]
	if (row == undefined) {
		throw createError({ statusCode: 400 })
	}

	const valid = await bcrypt.compare(body.password, row.password)
	if (!valid) {
		throw createError({ statusCode: 400 })
	}

	const tokenPayload: tAuth.User = {
		id: row.id,
		username: row.username,
	}

	const fiveMin = 1000 * 60 * 5
	const token = jwt.sign(tokenPayload, config.authJwtSecret, {
		// expiresIn: 60 * 5,
	})
	const expirationDate = new Date(Date.now() + fiveMin)
	setCookie(event, config.authCookieName, token, {
		httpOnly: true,
		// expires: expirationDate,
	})

	return { id: row.id, username: row.username }
})
