import jwt from "jsonwebtoken"

import * as tAuth from "~/types/auth"

export default defineEventHandler((event) => {
	const config = useRuntimeConfig()
	const authCookie = getCookie(event, config.AUTH_COOKIE_NAME)

	if (authCookie == undefined) {
		throw createError({ statusCode: 401 })
	}

	const payload = jwt.verify(authCookie, config.AUTH_JWT_SECRET) as tAuth.User

	return payload
})
