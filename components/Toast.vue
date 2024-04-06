<script setup lang="ts">
import {
	InformationCircleIcon,
	CheckCircleIcon,
	XCircleIcon,
} from "@heroicons/vue/24/solid"

const { toasts } = useToast()

const variantClasses = new Map()
variantClasses.set("success", "alert-success")
variantClasses.set("info", "alert-info")
variantClasses.set("error", "alert-error")
</script>

<template>
	<div class="toast toast-top toast-end">
		<TransitionGroup name="list" tag="ul">
			<div
				class="alert mb-2"
				:class="variantClasses.get(toast.variant)"
				v-for="toast in toasts"
				:key="toast.id"
			>
				<div>
					<label
						class="btn btn-circle btn-outline btn-xs mr-1"
						v-if="false"
					>
						<CheckCircleIcon
							class="w-4"
							v-if="toast.variant == 'success'"
						/>
						<InformationCircleIcon
							class="w-4"
							v-else-if="toast.variant == 'info'"
						/>
						<XCircleIcon
							class="w-4"
							v-else-if="toast.variant == 'error'"
						/>
					</label>
					<span>{{ toast.text }}</span>
				</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(2rem);
}

.list-leave-active {
	position: relative;
}
</style>
