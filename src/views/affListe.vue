<template>
	<div>
		<Liste></Liste>
		<h2>Task List</h2>
			<!--<div v-for="tweet in tweets" :tweet="tweet" />
			-->
		<ul >
			<li v-for="tweet in tweets">
				{{ tweet.name }}
			</li>
		</ul>
	</div>
</template>

<script>
 	import Liste from "@/components/Liste";
	export default {
		name: "affListe",
		components: {Liste},
		props: {
			tweet: Object
		}
	}
</script>

<style scoped>

</style>
