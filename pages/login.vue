<script setup lang="ts">
const authStore = useAuthStore()
const toast = useToast()

const form = reactive({ username: "", password: "" })

async function login() {
	const payload = { username: form.username, password: form.password }
	try {
		const res = await $fetch("/api/public/login", {
			method: "POST",
			body: payload,
			credentials: "include",
		})
		authStore.user = res
		await navigateTo("/dashboard")
	} catch (err) {
		form.username = ""
		form.password = ""
		toast.display({ message: "Error" })
	}
}
</script>

<template>
	<div class="relative min-h-screen">
		<div class="w-11/12 mx-auto">
			<h1 class="py-8 text-2xl font-bold text-center">Login</h1>
			<form @submit.prevent="login">
				<label class="form-control w-full mb-4">
					<div class="label">
						<span class="label-text">Username</span>
					</div>
					<input
						class="input input-bordered w-full"
						type="text"
						required
						v-model="form.username"
					/>
				</label>
				<label class="form-control w-full mb-8">
					<div class="label">
						<span class="label-text">Password</span>
					</div>
					<input
						class="input input-bordered w-full"
						type="password"
						required
						v-model="form.password"
					/>
				</label>
				<button class="btn btn-block btn-primary" type="submit">
					Log In
				</button>
			</form>
		</div>
	</div>
</template>
