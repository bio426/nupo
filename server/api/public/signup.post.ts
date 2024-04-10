import bcrypt from "bcrypt"
import { z } from "zod"

import { sql } from "~/server/plugins/database"

export default eventHandler(async (event) => {
	const body = await readBody<{ username: string; password: string }>(event)

	const schema = z.object({
		username: z.string(),
		password: z.string(),
	})
	schema.parse(body)

	const hashedPassword = await bcrypt.hash(body.password, 10)

	await sql`insert into user(username,password) values (,${body.username},${hashedPassword})`
})
