<template>
<b-container>
	<h2>Yup !</h2>

		<ul >
			<li v-for="tweet in tweets" :tweet="tweet">

			</li>
		</ul>

<!--
	<b-card-group deck>
	<b-card v-on:click="say('bon')" v-for="tweet in tweets" :tweet="tweet"
			no-body
			style="max-width: 20rem;"
			img-src="https://placekitten.com/380/200"
			img-alt="Image"
			img-top
	>
		<h4 slot="header">	{{ tweet.name }}</h4>

		<b-card-body>
			<b-card-title>	{{ tweet.handle }}</b-card-title>
			<b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
			<b-card-text>
				Some quick example text to build on the card title and make up the bulk of the card's
				content.
			</b-card-text>
		</b-card-body>

		<b-list-group flush>
			<b-list-group-item>Cras justo odio</b-list-group-item>
			<b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
			<b-list-group-item>Vestibulum at eros</b-list-group-item>
		</b-list-group>

		<b-card-body>
			<a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a>
		</b-card-body>

		<b-card-footer>This is a footer</b-card-footer>

		<b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
	</b-card>
	</b-card-group>
-->

	<b-card-group>
			<b-card   v-for="tweet in tweets" :tweet="tweet"

					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"

			>
				<b-card-title>
					{{ tweet.name }} <br>
					{{ tweet.handle }} <br>

				</b-card-title>
				<button v-on:click="show = !show">
					Voir
				</button>
				<transition name="fade">
					<p v-if="show">{{ tweet.tweet }}</p>
				</transition>
				<b-card-text >
				{{ tweet.tweet }}
				</b-card-text>


				<b-button href="#" variant="primary">Go somewhere</b-button>
			</b-card>

	</b-card-group>

<!--	<b-card class="mt-3" header="Form Data Result">
		<pre class="m-0">{{ form }}</pre>
	</b-card>-->

</b-container>
</template>

<script>
	import draggable from 'vuedraggable'

	export default {
		name: "Liste",
		props: {
			tweet: Object
		},
		components: {
			draggable,
		},
		data() {
			return {
				show: false,
				/**/title: 'Titre de mon application',
				tweets: [
					{
						id: 1,
						name: 'James',
						handle: '@jokerjames',
						img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
						tweet: "If you don't succeed, dust yourself off and try again.",
						likes: 10,
					},
					{
						id: 2,
						name: 'Fatima',
						handle: '@fantasticfatima',
						img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
						tweet: 'Better late than never but never late is better.',
						likes: 12,
					},
					{
						id: 3,
						name: 'Xin',
						handle: '@xeroxin',
						img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
						tweet: 'Beauty in the struggle, ugliness in the success.',
						likes: 18,
					},
					{
						id: 2,
						name: 'Fatima',
						handle: '@fantasticfatima',
						img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
						tweet: 'Better late than never but never late is better.',
						likes: 12,
					},
				]
			}
		},
		methods: {
			say(message) {
				alert(message)
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
