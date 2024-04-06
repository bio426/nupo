import { ref } from "vue"

type ToastVariant = "success" | "info" | "error"

type Toast = {
	id: symbol
	text: string
	duration: number
	variant: ToastVariant
}

const toasts = ref<Toast[]>([])

function display(opts: {
	message: string
	variant?: ToastVariant
	duration?: number
}) {
	const id = Symbol()
	const duration = opts.duration || 2000
	const variant = opts.variant || "info"
	toasts.value.unshift({
		id,
		text: opts.message,
		duration,
		variant,
	})

	setTimeout(() => {
		let idx = toasts.value.findIndex((toast) => toast.id == id)
		toasts.value.splice(idx, 1)
	}, duration)
}

export default function () {
	return {
		toasts,
		display,
	}
}
