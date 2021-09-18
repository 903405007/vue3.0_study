<template>
	<div class="page-wrapper">
		<h1>{{cityInfo.name}}</h1>
		<img :src="cityInfo.img" :alt="cityInfo.name">
		<p>{{cityInfo.info}}</p>
	</div>
</template>

<script>
	import {
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	export default {
		name: 'Page',
		props: {
			cityData: Array
		},
		setup(props) {
			const state = useStore().state
			return {
				cityInfo: computed(() => props.cityData[state.curIdx])
			}
		}
	}
</script>

<style>
	.page-wrapper {
		height: 450px;
		padding: 20px;
		box-sizing: border-box;
		overflow: auto;
	}
	.page-wrapper img{
		width: 100%;
	}
</style>
