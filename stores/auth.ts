import * as tAuth from "~/types/auth"

export const useAuthStore = defineStore("auth", () => {
	let user = ref<tAuth.User>()

	return { user }
})
