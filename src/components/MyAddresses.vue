<template>
	<div class="row">
		<div class="col-1">
			<button class="btn btn-secondary button" @click="add">Add</button>
		</div>

		<div class="col-7">
			<h3>Draggable {{ draggingInfo }}</h3>

			<draggable tag="ul" :list="list" class="list-group" handle=".handle">
				<li
						class="list-group-item"
						v-for="(element, idx) in list"
						:key="element.name"
				>
					<i class="fa fa-align-justify handle"></i>

					<span class="text">{{ element.name }} </span>

					<input type="text" class="form-control" v-model="element.text" />

					<i class="fa fa-times close" @click="removeAt(idx)"></i>
				</li>
			</draggable>
		</div>

		<rawDisplayer class="col-3" :value="list" title="List" />
	</div>
</template>

<script>
	let id = 3;
	import draggable from 'vuedraggable'
	export default {
		components: {
			draggable,
		},
		data() {
			return {
				list: [
					{ name: "John", text: "", id: 0 },
					{ name: "Joao", text: "", id: 1 },
					{ name: "Jean", text: "", id: 2 }
				],
				dragging: false
			};
		},
		computed: {
			draggingInfo() {
				return this.dragging ? "under drag" : "";
			}
		},
		methods: {
			removeAt(idx) {
				this.list.splice(idx, 1);
			},
			add: function() {
				id++;
				this.list.push({ name: "Juan " + id, id, text: "" });
			}
		}
	};
</script>
<!--style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>-->








<!--
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
				title: 'Titre de my application',
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
-->
