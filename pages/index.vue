<script setup lang="ts">
const authStore = useAuthStore()
const toast = useToast()

const { data: products } = await useFetch("/api/public/products")

async function addItemToWishlist(id: number) {
	await $fetch("/api/wishlist/" + id, { method: "POST" })
	toast.display({ message: "added", variant: "success" })
}
</script>

<template>
	<div class="w-11/12 lg:w-3/4 mx-auto">
		<Header title="My Shop" />
		<div class="grid grid-cols-6 lg:grid-cols-4 gap-4">
			<ProductCard
				:product="product"
				:wishlistButton="authStore.user != undefined"
				v-for="product in products"
				@toogleWishlist="addItemToWishlist"
			/>
		</div>
	</div>
</template>
