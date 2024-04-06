<script setup lang="ts">
import * as tPublic from "~/types/public"

const props = defineProps<{ product: tPublic.Product }>()
</script>

<template>
	<div class="card bg-base-100 shadow-xl border border-secondary">
		<figure>
			<img src="https://placewaifu.com/image/" alt="Shoes" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{{ props.product.name }}</h2>
			<p>S/ {{ props.product.price.toFixed(2) }}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
</template>
