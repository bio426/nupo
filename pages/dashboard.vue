<script setup lang="ts">
definePageMeta({ middleware: "auth-guard" })

const auth = useAuth()

const { data } = await useFetch("/api/user")
</script>

<template>
	<div class="w-11/12 mx-auto">
		<h1 class="py-8 text-2xl font-bold text-center">Dashboard</h1>
		<pre class="my-4">
            {{ auth.user }}
        </pre>
		<div class="grid grid-cols-6 gap-4"></div>
	</div>
</template>
