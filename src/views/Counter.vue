<template>
	<div class="wrapper">
		<p>{{count}}</p>
		<button @click="plus">+</button>
		<button @click="minus">-</button>
	</div>
	<div class="wrapper">
		<p>{{state.count}}</p>
		<button @click="plus2">+</button>
		<button @click="minus2">-</button>
	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue'




	export default {
		name: 'Counter',
		setup() {
			// 基础类型
			let count = ref(5)
			const plus = () => count.value++
			const minus = () => count.value--
			
			// 引用类型
			let state = reactive({
				count: 9
			})
			const plus2 = () => state.count++
			const minus2 = () => state.count--

			return {
				count,
				plus,
				minus,
				state,
				plus2,
				minus2
			}
		}
		// data() {
		// 	return {
		// 		count: 0
		// 	}
		// },
		// methods: {
		// 	plus() {
		// 		this.count++
		// 	},
		// 	minus() {
		// 		this.count--
		// 	}
		// }
	}
</script>

<style>
</style>
