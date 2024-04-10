<script setup lang="ts">
definePageMeta({ middleware: "auth-guard" })

const { data: wishlistProducts } = await useFetch("/api/wishlist")
</script>

<template>
	<div class="w-11/12 mx-auto">
		<Header title="Dashboard" />
		<h2 class="mb-4 text-xl underline">Wishlist Items</h2>
		<div class="grid grid-cols-6 gap-4">
			<ProductCardfalse
				:product="product"
				:wishlistButton="true"
				v-for="product in wishlistProducts"
			/>
		</div>
	</div>
</template>
