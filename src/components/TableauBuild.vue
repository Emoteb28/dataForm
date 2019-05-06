 <template>
<div>



	<filter-bar></filter-bar>
	<vuetable ref="vuetable"
	          api-url="https://vuetable.ratiw.net/api/users"
	          :fields="fields"
	          pagination-path=""
	          :per-page="20"
	          :multi-sort="true"
	          :sort-order="sortOrder"
	          :append-params="moreParams"
	          detail-row-component="my-detail-row"
	          @vuetable:cell-clicked="onCellClicked"
	          @vuetable:pagination-data="onPaginationData"
	 >
		<template slot="actions" slot-scope="props">
			<div class="custom-actions">
				<button class="ui basic button"
				        @click="onAction('view-item', props.rowData, props.rowIndex)">
					<i class="zoom icon"></i>
				</button>
				<button class="ui basic button"
				        @click="onAction('edit-item', props.rowData, props.rowIndex)">
					<i class="edit icon"></i>
				</button>
				<button class="ui basic button"
				        @click="onAction('delete-item', props.rowData, props.rowIndex)">
					<i class="delete icon"></i>
				</button>
			</div>
		</template>
	</vuetable>

	<div class="overflow-auto">
		<vuetable-pagination-info ref="paginationInfo"
		></vuetable-pagination-info>

	 <vuetable-pagination ref="pagination"
	                      @vuetable-pagination:change-page="onChangePage"
	 ></vuetable-pagination>
	</div>


	<!--<div class="overflow-auto">
		<b-pagination
				v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage"
				aria-controls="my-table"
		></b-pagination>

		<p class="mt-3">Current Page: {{ currentPage }}</p>

		<b-table
				id="my-table"
				:items="items"
				:per-page="perPage"
				:current-page="currentPage"
				small
		></b-table>
	</div>-->

</div>
 </template>

<script>
	import accounting from 'accounting'
	import moment from 'moment'
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	import CustomActions from './CustomActions'
	import DetailRow from './DetailRow'
	import FieldDefs from './FieldDefs.js'
	import FilterBar from './FilterBar'

	Vue.use(VueEvents)
	Vue.component('custom-actions', CustomActions)
	Vue.component('my-detail-row', DetailRow)
	Vue.component('filter-bar', FilterBar)

	export default {
		name: "TableauBuild",
		components: {
			Vuetable,
			VuetablePagination,
			VuetablePaginationInfo,
		},
		data() {
			return {
				css: {
					ascendingIcon: 'glyphicon glyphicon-chevron-up',
					descendingIcon: 'glyphicon glyphicon-chevron-down'
				},
				fields :  FieldDefs,
				sortOrder: [
					{
						field: 'email',
						sortField: 'email',
						direction: 'asc'
					}
				],
			};
		},
		mounted() {
			this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
			this.$events.$on('filter-reset', e => this.onFilterReset())
		},
		methods: {
			allcap (value) {
				return value.toUpperCase()
			},
			genderLabel (value) {
				return value === 'M'
					? '<span class="label label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
					: '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
			},
			formatNumber (value) {
				return accounting.formatNumber(value, 2)
			},
			formatDate (value, fmt = 'D MMM YYYY') {
				return (value == null)
					? ''
					: moment(value, 'YYYY-MM-DD').format(fmt)
			},
			onPaginationData (paginationData) {
				// this.$refs.paginationTop.setPaginationData(paginationData);
				// this.$refs.paginationInfoTop.setPaginationData(paginationData);
				this.$refs.pagination.setPaginationData(paginationData);
				this.$refs.paginationInfo.setPaginationData(paginationData);
			},
			onChangePage (page) {
				this.$refs.vuetable.changePage(page)
			},
			onAction (action, data, index) {
				console.log('slot action: ' + action, data.name, index)
			},
			onCellClicked (data, field, event) {
				console.log('cellClicked: ', field.name)
				this.$refs.vuetable.toggleDetailRow(data.id)
			},
			onFilterSet (filterText) {
				this.moreParams = {
					'filter': filterText
				}
				vm = this
				Vue.nextTick( function() {
					vm.$refs.vuetable.refresh()
				})
				// Vue.nextTick( () => this.$refs.vuetable.refresh())
			},
			onFilterReset () {
				this.moreParams = {}
				vm = this
				Vue.nextTick( function() {
					vm.$refs.vuetable.refresh()
				})
				// Vue.nextTick( () => this.$refs.vuetable.refresh())
			}
		}
	}
</script>

 <style scoped lang="scss">
	 #app {
		 font-family: 'Avenir', Helvetica, Arial, sans-serif;
		 color: #2c3e50;
	 }

	 * {
		 -webkit-box-sizing: border-box;
		 -moz-box-sizing: border-box;
		 box-sizing: border-box;
		 margin: 0;
		 padding: 0;
	 }


	 * > input:-webkit-autofill {
		 -webkit-box-shadow: 0 0 0px 1000px #fff inset !important; /*关于解决输入框背景颜色*/
		 -webkit-text-fill-color: #000000!important;
	 }
	 html,
	 body {
		 font-family: "Microsoft YaHei";
		 font-size: 14px;
		 color: rgba(0, 0, 0, 0.85);
		 background: #fff;
		 padding: 0 10px;
		 overflow-x: hidden;
		 -webkit-font-smoothing: antialiased;
	 }

	 ol,
	 ul,
	 li {
		 list-style: none;
	 }

	 img {
		 border: 0 none;
	 }

	 a {
		 text-decoration: none;
	 }

	 a,
	 input,
	 textarea {
		 outline: none;
	 }

	 input::-ms-clear,
	 input::-ms-reveal {
		 display: none;
	 }

	 table {
		 border-collapse: collapse;
		 border-spacing: 0;
	 }

	 caption,
	 th,
	 td {
		 text-align: left;
		 font-weight: normal;
		 vertical-align: middle;
	 }

	 .clearfix {
		 *zoom: 1;
	 }

	 .clearfix:after {
		 clear: both;
		 content: '';
		 display: block;
		 height: 0;
		 visibility: hidden;
	 }

	 .hide {
		 display: none !important;
	 }

	 .show {
		 display: block;
	 }

	 .fl {
		 float: left;
	 }

	 .fr {
		 float: right
	 }
 </style>
