<script setup lang="ts">
const auth = useAuth()
auth.getUserFromCookie()
</script>

<template>
	<div>
		<NuxtPage />
		<Toast />
	</div>
</template>
