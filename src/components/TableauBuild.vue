 <template>
<div>
	 <vuetable ref="vuetable"
	           api-url="https://vuetable.ratiw.net/api/users"
	           :fields="fields"
	           pagination-path=""
	           @vuetable:pagination-data="onPaginationData"
	 ></vuetable>

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
	import Vuetable from 'vuetable-2/src/components/Vuetable'
	import accounting from 'accounting'
	import moment from 'moment'
	// import VuetablePagination from 'vuetable-2/src/components/VuetablePaginationDropdown'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'


	export default {
		name: "TableauBuild",
		components: {
			Vuetable,
			VuetablePagination,
			VuetablePaginationInfo,
		},
		data() {
			return {
				fields : [
					{
						name : 'name',
						'title' : 'Nom'
					},
					{
						name: 'nickname',
						'title' : 'Surnom',
						'callback': 'allcap'
					},
					{
						'name': 'email',
						'title' : 'Email'
					},
					{
						'name' : 'birthdate',
						'title' : 'Anniversaire',
						'dataClass': 'text-left',
						'callback': 'formatDate|DD-MM-YYYY'
					},
					{
						'name' : 'address.line1',
						'title' : 'Adresse 1'
					},
					{
						'name' : 'address.line2',
						'title' : 'Adresse 2'
					},
					{
						'name' : 'address.zipcode',
						'title' : 'Code Postal'
					},
					{
						name: 'salary',
						'titleClass': 'text-left',
						'dataClass': 'text-left',
						'callback': 'formatNumber'
					},
					{
						name: 'gender',
						'titleClass': 'text-left',
						'dataClass': 'text-left',
						'callback': 'genderLabel'
					},
				]
			};
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
				this.$refs.pagination.setPaginationData(paginationData);
				this.$refs.paginationInfo.setPaginationData(paginationData)   // <----
			},
			onChangePage (page) {
				this.$refs.vuetable.changePage(page)
			}
		}
	}
</script>


