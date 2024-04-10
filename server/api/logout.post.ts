export default eventHandler(async (event) => {
	const config = useRuntimeConfig()
	setCookie(event, config.AUTH_COOKIE_NAME, "", {
		httpOnly: true,
		expires: new Date(Date.now() - 1),
	})
})
