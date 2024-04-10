<script setup lang="ts">
// get user if cookie exist
const authStore = useAuthStore()
const userRes = await useFetch("/api/user")
if (userRes.data.value != null) {
	authStore.user = userRes.data.value
}
</script>

<template>
	<div>
		<NuxtPage />
		<Toast />
	</div>
</template>
