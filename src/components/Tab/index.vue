<template>
	<div class="tab-wrapper">
		<nav-bar :navData="nav" />
		<page :cityData="city" />
	</div>
</template>

<script>
	import NavBar from '../NavBar'
	import Page from '../Page'
	import city from '../../data/city.js'
	import nav from '../../data/nav.js'
	export default {
		name: 'Tab',
		components: {
			NavBar,
			Page
		},
		setup() {
			console.log('navdata:', nav)
			return {
				city,
				nav
			}
		}
	}
</script>

<style>
	.tab-wrapper {
		width: 500px;
		height: 500px;
		margin: 50px auto;
		border: 1px solid #666;
	}
</style>
