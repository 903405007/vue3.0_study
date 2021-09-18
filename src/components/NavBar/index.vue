<template>
	<div class="nav-bar">
		<nav-item v-for="(item,index) in navData" :item="item" :key="index" :index="index" />
	</div>
</template>

<script>
	import NavItem from './NavItem.vue'
	export default {
		name: 'NavBar',
		components: {
			NavItem
		},
		props: {
			navData: Array
		}
	}
</script>

<style>
	.nav-bar {
		height: 50px;
		border-bottom: 1px solid #666666;
	}
</style>
