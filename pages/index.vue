<script setup lang="ts">
const { data: products } = await useFetch("/api/public/products")

const authCookie = useCookie("nupo-token")
</script>

<template>
	<div class="w-11/12 mx-auto">
		<h1 class="py-8 text-2xl font-bold text-center">My awesome shop</h1>
		<div class="flex gap-4">
			<NuxtLink class="link" to="/login">Login</NuxtLink>
			<NuxtLink class="link" to="/dashboard">Dashboard</NuxtLink>
		</div>
		<pre class="my-4">
            {{ typeof authCookie }}
        </pre>
		<div class="grid grid-cols-6 gap-4">
			<ProductCard :product="product" v-for="product in products" />
		</div>
	</div>
</template>
