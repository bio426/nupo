<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/24/solid"
import { HeartIcon as OutlineHeartIcon } from "@heroicons/vue/24/outline"

import * as tPublic from "~/types/public"

const props = defineProps<{
	product: tPublic.Product
	wishlistButton: boolean
}>()
const emit = defineEmits<{ toogleWishlist: [id: number] }>()
</script>

<template>
	<div class="card bg-base-100 border border-secondary">
		<figure>
			<img src="https://placewaifu.com/image/" alt="Shoes" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{{ props.product.name }}</h2>
			<p>S/ {{ props.product.price.toFixed(2) }}</p>
			<div class="card-actions justify-end">
				<button
					class="btn btn-primary btn-square"
					v-if="props.wishlistButton"
				>
					<HeartIcon class="w-6" v-if="props.product.inWishlist" />
					<OutlineHeartIcon class="w-6" v-else />
				</button>
				<button
					class="btn btn-secondary"
					@click="emit('toogleWishlist', props.product.id)"
				>
					To Wishlist
				</button>
			</div>
		</div>
	</div>
</template>
