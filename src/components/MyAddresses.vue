<template>
	<div>
		<p>wxep</p>
		<h1>{{ title }} </h1>
		<input v-model="title">

		<h2>Task List</h2>
		<ul id="task-list">
			<li v-for="task in tasks">
				{{ task.title }}
			</li>
		</ul>
	</div>
</template>
<script>


	export default {
		props: ['addresses'],
		name: "MyAddresses",
		components: {

		},
		data() {
			return {
				title: 'Titre de mon application',
				tasks: [
					{ title: 'Clean my room' },
					{ title: 'Go to the grocery' },
					{ title: 'meeting with JP' },
					{ title: 'Go to the dentist' }
				]
			}
		},
	}

</script>

<style scoped>

</style>
