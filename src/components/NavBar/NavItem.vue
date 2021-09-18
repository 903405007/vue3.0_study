<template>
	<div @click="changeCityInfo" :class="['nav-item',{'nav-cur':index===curIdx}]">{{item}}</div>
</template>

<script>
	import {
		getCurrentInstance,
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'

	export default {
		name: 'NavItem',
		props: {
			item: String,
			index: Number,
		},
		setup(props) {
			// ctx -> store ->state/mutations
			const ctx = getCurrentInstance().ctx
			console.log('ctx:', ctx)
			const store = useStore()
			return {
				curIdx: computed(() => store.state.curIdx),
				changeCityInfo: () => store.commit('changeCity', props.index)
			}
		}
	}
</script>

<style>
	.nav-item {
		float: left;
		width: 25%;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}

	.nav-item.nav-cur {
		background-color: #000;
		color: #fff;
	}
</style>
