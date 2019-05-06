export default [
	{
		name: '__checkbox',   // <----
		titleClass: 'center aligned',
		dataClass: 'center aligned'
	},
	{
		name: '__handle',   // <----
		dataClass: 'center aligned'
	},
	{
		name: '__sequence',   // <----
		title: '#',
		titleClass: 'center aligned',
		dataClass: 'right aligned'
	},
	{
		name : 'name',
		'title' : 'Nom',
		sortField: 'name'

	},
	{
		name: 'nickname',
		'title' : 'Surnom',
		'callback': 'allcap'
	},
	{
		'name': 'email',
		'title' : 'Email',
		sortField: 'email'

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
		'callback': 'formatNumber',
		visible: false

	},
	{
		name: 'gender',
		'titleClass': 'text-left',
		'dataClass': 'text-left',
		'callback': 'genderLabel'
	},
	// {
	//   name: '__component:custom-actions',
	//   title: 'Actions',
	//   titleClass: 'center aligned',
	//   dataClass: 'center aligned',
	// }
	{
		name: '__slot:actions',
		title: 'Slot Actions',
		titleClass: 'center aligned',
		dataClass: 'center aligned',
	}
]
