import * as tAuth from "~/types/auth"

export default function () {
	const user = useState<tAuth.User | undefined>("authUser", () => undefined)

	async function getUserFromCookie() {
		const res = await useFetch("/api/user")
		user.value = res.data
	}

	return {
		user,
		getUserFromCookie,
	}
}
