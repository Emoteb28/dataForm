<template>
	<b-container fluid >
		<b-row align-h="center">
			<b-col  cols="12" md="8"  >

	<!---->
				<h2>Go</h2>
				<ul v-if="posts && posts.length">
					<li v-for="post of posts">
						<table border="1">
						<tr align="left">
							<td width="20%">{{post.title}}</td>
							<td  width="80%">{{post.body}}</td>
						</tr>
						</table>
					</li>
				</ul>

				<ul v-if="errors && errors.length">
					<li v-for="error of errors">
						{{error.message}}
					</li>
				</ul>
				<!---->
				<h1>De</h1>
			<b-card-group columns>

<!--
				<b-card header="Quote">
					<blockquote class="blockquote mb-0">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer class="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</b-card>
-->

				<b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top v-for="(obj,
				index) in objects" :key="id">
					<b-card-text >
						<strong>Quota:</strong>    <span>{{obj.quota}}</span>    <input type="text"
						                                                                @input="handleQuota($event.target.value)" v-model="obj.quota">
						<b-button  @click="delProperty()">X</b-button>

						<br>
						<strong>Num:</strong>    <span>{{obj.numerator}}</span>    <input type="text"
						                                                                  @input="handleNumerator($event.target.value)"  v-model="obj.numerator"><br>
						<strong>Deno:</strong>    <span>{{obj.denominator}}</span>    <input type="text"
						                                                                     @input="handleDenominator($event.target.value)"  v-model="obj.denominator"><br>

						<button @click="refreshValue(obj)">Refresh!</button>

						<pre> {{ obj }}</pre>
					</b-card-text>
					<b-card-text >  <b-button variant="success" @click="effProp(index)">Delete</b-button>
					</b-card-text>
				</b-card>




			</b-card-group>
			</b-col>
		</b-row>
				4<!--		<b-card-group deck>
			<b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
				<b-card-text -for="obj in objects" >
					<strong>Quota:</strong>    <span>{{obj.quota}}</span>    <input type="text" @input="handleQuota($event.target.value)"><br>
					<strong>Numerator:</strong>    <span>{{obj.numerator}}</span>    <input type="text" @input="handleNumerator($event.target.value)"><br>
					<strong>Denominator:</strong>    <span>{{obj.denominator}}</span>    <input type="text" @input="handleDenominator($event.target.value)"><br>
					.</b-card-text>
			</b-card>
		</b-card-group>-->
<!--
		<div v-for="obj in objects">
			<strong>Quota:</strong>    <span>{{obj.quota}}</span>    <input type="text" @input="handleQuota($event.target.value)"><br>
			<strong>Numerator:</strong>    <span>{{obj.numerator}}</span>    <input type="text" @input="handleNumerator($event.target.value)"><br>
			<strong>Denominator:</strong>    <span>{{obj.denominator}}</span>    <input type="text" @input="handleDenominator($event.target.value)"><br>

			<button @click="refreshValue(obj)">Refresh!</button>
			<pre> {{ obj }}</pre>
		</div>
-->


	</b-container>

</template>

<script>
	import axios from 'axios';

	export default {
		name: 'PhoneNumberLine',
		data() {
			return {
				posts: [],
				errors: [],
				objects: [
					{id: 1, quota: 100, numerator: 1, denominator: 3},
					{id: 2, quota: 120, numerator: 2, denominator: 5},
					{id: 3, quota: 75, numerator: 5, denominator: 6},
					{id: 4, quota: 350, numerator: 3, denominator: 8},
					{id: 125, quota: 147, numerator: 28, denominator: 6}

				]
			}
		},

		methods: {
			effProp(index) {
				this.$delete(this.objects, index)
			},
			delProperty() {
				console.log('Merci')
			},
			handleQuota(value) {
				this.inputQuota = value;
			},
			handleNumerator(value) {
				this.inputNumerator = value;
			},
			handleDenominator(value) {
				this.inputDenominator = value;
			},

			refreshValue: function (element) {
				this.objects.forEach((e, i) => {
					if (e.id == element.id) {
						this.objects[i].quota = this.inputQuota;
						this.objects[i].numerator = this.inputNumerator;
						this.objects[i].denominator = this.inputDenominator;
					}
				});
			}
		},
// Fetches posts when the component is created.
		created() {
			axios.get(`http://jsonplaceholder.typicode.com/posts`)
				.then(response => {
					// JSON responses are automatically parsed.
					this.posts = response.data
				})
				.catch(e => {
					this.errors.push(e)
				})
			// async / await version (created() becomes async created())
			//
			// try {
			//   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
			//   this.posts = response.data
			// } catch (e) {
			//   this.errors.push(e)
			// }
		},

/*
		mounted: function () {
			this.fetchPosts()
		},
		mounted () {
			axios
				.get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then(response => (this.info = response))
		}
*/
	}

</script>
