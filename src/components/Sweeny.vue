
<template>
	<b-container fluid  >


		<b-row>
			<b-col sm="12">
				<h1>Gestion de templates Sweeny</h1>
				<p>Page actuelle: {{ $route.name }}</p>

				<b-row>
					<b-col cols="8" sm="8">
						<!-- User Interface controls -->
						<!-- Main table element -->
						<b-row  align-h="center">
							<b-col md="4" class="my-1" >
								<b-form-group label-cols-sm="3" label="Trier" class="mb-0">
									<b-input-group>
										<b-form-input v-model="filter"
										              placeholder="Saisir votre recherche"></b-form-input>
										<b-input-group-append>
											<b-button :disabled="!filter" @click="filter = ''">Vider</b-button>
										</b-input-group-append>
									</b-input-group>
								</b-form-group>
							</b-col>

							<b-col md="4" class="my-1">
								<b-form-group label-cols-sm="3" label="Sort" class="mb-0">
									<b-input-group>
										<b-form-select v-model="sortBy" :options="sortOptions">
											<option slot="first" :value="null">-- Aucun --</option>
										</b-form-select>
										<b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
											<option :value="false">Ascendant</option> <option :value="true">Descendant
										</option>
										</b-form-select>
									</b-input-group>
								</b-form-group>
							</b-col>

							<b-col md="4" class="my-1">
								<b-form-group label-cols-sm="3" label="Per page" class="mb-0">
									<b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
								</b-form-group>
							</b-col>
						</b-row>


						<b-row  align-h="center">
							<b-col cols="12" md="11" >

								<b-row   class="mb-3">
									<b-col  md="3" class="p-3">
										<b-form-checkbox
												id="checkbox"
												v-model="status"
												name="checkbox"
										>
											Activer option de choix de lignes
										</b-form-checkbox>

									</b-col>
									<b-col  md="3" class="p-3" >
											<b-form-select v-if="status" v-model="selectMode" :options="modes"
											               class="mb-3  "
											></b-form-select>
									</b-col>
								</b-row>


								<b-table
										responsive
										hover
										show-empty
										stacked="md"
										:empty-text="nothing"
										:items="items"
										:fields="fields"
										:current-page="currentPage"
										:per-page="perPage"
										:filter="filter"
										:sort-by.sync="sortBy"
										:sort-desc.sync="sortDesc"
										:sort-direction="sortDirection"
										@filtered="onFiltered"
										class="my-1"
 										:tbody-transition-props="transProps"
										striped


										selectable
										:select-mode="selectMode"
										selectedVariant="success"
										@row-selected="rowSelected"

								>
									<!-- A virtual column -->
									<template slot="index" slot-scope="data">
										{{ data.index + 1 }}
									</template>

									<!-- name -->
									<template slot="name" slot-scope="row">
										{{ row.value.first }} {{ row.value.last }}
									</template>

									<!-- Active -->
									<template slot="Texte" slot-scope="row">
										{{ row.value ? 'Oui (-_-)' : 'Nom :( )' }}
									</template>

									<!-- Action -->
									<template slot="actions" slot-scope="row">
										<b-button size="sm" @click="row.toggleDetails">
											{{ row.detailsShowing ? 'Masquer' : 'Afficher' }} Details
										</b-button>
									</template>
									<!-- Action_details -->
									<template slot="row-details" slot-scope="row">
										<b-card>
										<div class="text-center my-3">
											<!--<b-button v-b-tooltip.hover title="Tooltip content"  @click="add">Ajouter une
											option</b-button>-->

												<b-button v-b-tooltip.hover title="Tooltip content"  @click="addProperty">Ajouter une
													option</b-button>
											</div>

											<b-row align-h="between">
												<b-col cols="6"  class="text-center">
													<b-container class="bv-example-row"  v-for="(value, key) in row.item" :key="key">
														<label><b>{{key}}</b> : {{value}} </label>

														<input
																v-bind="$attrs"
																v-bind:value="value"
																v-on="inputListeners"
														>

														<!-- <b-row>
															<b-col cols="3"
															       class="text-right"><b>{{ key }}: </b></b-col>
															<b-col   cols="4" class="text-left">{{ value }}</b-col>
															<b-col  cols="5" class="text-left">
																<b-form-input  type="text" v-model="$event.target.value"
																                ></b-form-input>



															</b-col>
														</b-row>-->
										<!--			<b-row class="list-group-item justify-content-md-center"
													       v-for="(value, key) in row.item" :key="key">
														<b-col col lg="2"><b>{{ key }}: </b></b-col>
														<b-col col lg="2">{{ value }}</b-col>
														<b-col cols="12" md="auto"><b-form-input ></b-form-input></b-col>




													</b-row>-->

													</b-container>
													<b-row >
														<b-col  class="text-center">
															<b-button size="sm" @click="rowValidate(item)">Valider
															</b-button>
														</b-col>

													</b-row>
											<!--</draggable>-->
												</b-col>

												<!--Resumé Json-->
												<b-col cols="6"   class="text-center">
													<rawDisplayer   :value="row.item" title="Resumé du template :"  class="text-center" />
													<b-button size="sm" @click="row.toggleDetails">Fermer Details</b-button>
												</b-col>


											</b-row>
											<!--											<draggable>
																							<li  v-for="(value, key) in row.item" :key="key">
																								<b-row>
																									<b-col cols="auto"><b-form-checkbox
																											id="checkbox-1"
																											v-model="status"
																											name="checkbox-1"
																											value="accepted"
																											unchecked-value="not_accepted"
																									>
																									</b-form-checkbox></b-col>
																									<b-col cols="auto">
																										<b-form-input v-model="text" placeholder="Enter your name">
																										</b-form-input>
											&lt;!&ndash;															<div>State: <strong>{{ status }}</strong></div>&ndash;&gt;
																									</b-col>
											&lt;!&ndash;														<b-col cols="auto">Value: {{ text }}</b-col>&ndash;&gt;
																									<b-col cols="auto" class="mr-auto p-3 bg-info"> {{ key }}: {{ value }}</b-col>
																								</b-row>
																							</li>
																						</draggable>-->
										</b-card>
									</template>

									<!-- Action -->
									<template slot="clear" slot-scope="row">
										<b-button variant="primary">
											Effacer <b-badge variant="light" class=" text-danger">X</b-badge>
										</b-button>

									</template>

								</b-table>
								{{ selected }}
							</b-col>
						</b-row>
						<!-- Main table element -->

						<!-- Info footer -->
						<b-row  align-h="center">
							<b-col md="6" class="my-1">
								<b-pagination
										v-model="currentPage"
										:total-rows="totalRows"
										:per-page="perPage"
										class="my-0"
								></b-pagination>
							</b-col>
						</b-row>

						<!-- User Interface controls -->
					</b-col>

					<!---->
					<b-col cols="4" sm="4">
						<template>
							<div>
								<b-table
										id="table-transition-example"
										:items="items"
										:fields="fields"
										striped
										small
										primary-key="a"
										:tbody-transition-props="transProps"
								></b-table>
							</div>
						</template>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import draggable from 'vuedraggable'

	let id = 1;
	export default {
		order: 0,
		display: "Simple",
		components: {
			draggable,
		},
		name: "Sweeny",
		props: ['placeholder', 'label', 'name', 'value'],

		data() {
			return {
				transProps: {
					// Transition name
					name: 'flip-list'
				},

				modes: ['multi', 'single', 'range'],
				status: 'true',
				text: '',
				nothing: 'There are no records to show',
				enabled: true,
				items: [
					{ id: 0, Texte: true, age: 40, nam:  ' ', last: 'Macdonald'},
					{ id: 1, Texte: false, age: 21, name: 'Larsen', last: 'Shaw'},
					{
						id: 2,
						Texte: false,
						age: 9,
						state: {
							name: 'Mini',
						  last: 'Navarro'
					},
					},
					{ id: 3, Texte: false, age: 89, nam: 'Geneva', last: 'Wilson'},
					{ id: 4, Texte: true, age: 38, nam: 'Jami', last: 'Carney'},
					{ id: 5, Texte: false, age: 27, nam: 'Essie', last: 'Dunlap'},
					{ id: 6, Texte: true, age: 40, nam: 'Thor', last: 'Macdonald'},
					{ id: 7, Texte: true, age: 87, nam: 'Larsen', last: 'Shaw'  },
					{ id: 8, Texte: false, age: 26, nam: 'Mitzi', last: 'Navarro'},
					{ id: 9, Texte: false, age: 22, nam: 'Genevieve', last: 'Wilson'},
					{ id: 10, Texte: true, age: 38, nam: 'John', last: 'Carney'},
					{ id: 11, Texte: false, age: 29, nam: 'Dick', last: 'Dunlap'}
				],
				selectMode: 'single',
				selected: [],
				fields: [
					// A virtual column that doesn't exist in items
					'index',
					{ key: 'nam', label: 'Nom du template', sortable: true, sortDirection: 'desc' },
					{ key: 'last', label: 'Prenom', sortable: true, sortDirection: 'desc' },
					{ key: 'age', label: 'Nombre de paragraphe', sortable: true, class: 'text-center' },
					{ key: 'Texte', label: 'Activer' },
					{ key: 'actions', label: 'Actions' },
					{ key: 'clear', label: 'Effacer' },

				],
				totalRows: 1,
				currentPage: 1,
				perPage: 10,
				pageOptions: [5, 10, 15],
				sortBy: null,
				sortDesc: false,
				sortDirection: 'asc',
				filter: null,
				infoModal: {
					id: 'info-modal',
					title: '',
					content: ''
				},
				tempDet: {
					id: 'info-modal',
					title: '',
					content: ''
				}
			}
		},
		computed: {
			sortOptions() {
				// Create an options list from our fields
				return this.fields
					.filter(f => f.sortable)
					.map(f => {
						return { text: f.label, value: f.key }
					})
			},
			draggingInfo() {
				return this.dragging ? "under drag" : "";
			},
				inputListeners: function () {
					var vm = this
					// `Object.assign` merges objects together to form a new object
					return Object.assign({},
						// We add all the listeners from the parent
						this.$listeners,
						// Then we can add custom listeners or override the
						// behavior of some listeners.
						{
							// This ensures that the component works with v-model
							input: function (event) {
								vm.$emit('input', event.target.value)
							}
						}
					)
				}
			},
		mounted() {
			// Set the initial number of items
			this.totalRows = this.items.length
		},
		methods: {
			rowValidate(element){
					this.items.forEach((e, i) => {
						if (e.id === element.id) {
							this.items[i].last = e.last+52;
						}
					});
				},
			changeStatus: function() {
				console.log("changeStatus...")
				bus.$emit('input', $event.target.value)
				/*bus.$emit('changeBoxStatus', {
					'idx': this._boxIndex,
					'status': !this._boxStatus
				})*/
			},
			addProperty (){
					// this.$set(this.item[0], 2, 'strawberry');
				this.$set(this.items, 'b', 2)

				// Vue.set(this.items[i], 'Texte', item.title);

			},
			info(item, index, button) {
				this.infoModal.title = `Row index: ${index}`
				this.infoModal.content = JSON.stringify(item, null, 2)
				this.$root.$emit('bv::show::modal', this.infoModal.id, button)
			},
			tempDetail(item, index, button){
				this.tempDet.content = JSON.stringify(item, null, 2),
					this.$root.$emit('bv::show::modals', this.tempDet.id, button);
			},
			resetInfoModal() {
				this.infoModal.title = '';
				this.infoModal.content = ''
			},
			onFiltered(filteredItems) {
				// Trigger pagination to update the number of buttons/pages due to filtering
				this.totalRows = filteredItems.length;
				this.currentPage = 1

			},
			add: function() {
				//console.log('bien joué');
				this.items.push({id: id++ , Texte: false, age: 29, nam: 'Massaran', last: 'Bamba'});
				/*
				{ name: "Juan " + id, id: id++ },
				);*/
			},
			rowSelected(items) {
				this.selected = items
			}
		},
 	}
</script>

<style scoped>
	table#table-transition-example .flip-list-move {
		transition: transform 1s;
	}
</style>
