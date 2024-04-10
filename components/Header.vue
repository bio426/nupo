<script setup lang="ts">
import {
	Bars3Icon,
	HomeIcon,
	ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid"

const props = defineProps<{ title: string }>()

const authStore = useAuthStore()

async function logout() {
	await $fetch("/api/logout", { method: "POST" })
	authStore.user = undefined
	navigateTo("/")
}
</script>

<template>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<Bars3Icon class="w-6" />
				</label>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<NuxtLink active-class="active" to="/">
							<HomeIcon class="w-4" />
							Home
						</NuxtLink>
						<NuxtLink
							active-class="active"
							to="/dashboard"
							v-if="authStore.user != undefined"
						>
							<ClipboardDocumentIcon class="w-4" />
							Dashboard
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<h1 class="py-4 text-2xl font-bold text-center">
				{{ props.title }}
			</h1>
		</div>
		<div class="navbar-end">
			<NuxtLink to="/login" v-if="authStore.user == undefined">
				Login
			</NuxtLink>
			<div class="dropdown dropdown-end" v-else>
				<div
					tabindex="0"
					role="button"
					class="btn btn-ghost btn-circle avatar placeholder"
				>
					<div
						class="bg-neutral text-neutral-content rounded-full w-12"
					>
						<span>
							{{ authStore.user?.username.at(0)?.toUpperCase() }}
						</span>
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<button @click="logout">Logout</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
