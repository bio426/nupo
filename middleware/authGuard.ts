export default defineNuxtRouteMiddleware(async (to, from) => {
	const toast = useToast()
	const authStore = useAuthStore()

	if (authStore.user == undefined) {
		toast.display({ message: "unauthorized", variant: "error" })
		return navigateTo("/login")
	}
})
