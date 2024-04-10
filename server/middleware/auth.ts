import jwt from "jsonwebtoken"

import * as tAuth from "~/types/auth"

export default defineEventHandler((event) => {
	const config = useRuntimeConfig()
	const path = getRequestURL(event).pathname

	if (path.includes("/api") && !path.includes("/public")) {
		const authCookie = getCookie(event, config.AUTH_COOKIE_NAME)

		if (authCookie == undefined) {
			throw createError({ statusCode: 401 })
		}

		const payload = jwt.verify(
			authCookie,
			config.authJwtSecret
		) as tAuth.User
		event.context.auth = payload
	}
})
