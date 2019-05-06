<template>
	<b-container id="app" fluid>
		<font-awesome-icon icon="user-secret" />
		<font-awesome-icon icon="coffee"></font-awesome-icon>
		<br>
		<font-awesome-icon :icon="myIcon" />


		<TableauBuild></TableauBuild>
	</b-container >
</template>
<script>

	// @ is an alias to /src
	import TableauBuild from '@/components/TableauBuild.vue'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	import { faSpinner } from '@fortawesome/free-solid-svg-icons'
	export default {
		name: 'Tableau',
		components: {
			TableauBuild,
			FontAwesomeIcon
		},
		data () {
			return {
				myIcon: faSpinner
			}
		},
	}
</script>

<style scoped lang="scss">
	#app {
		font-family: 'Tahoma', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #5670eb;
		margin-top: 60px;
	}
</style>
