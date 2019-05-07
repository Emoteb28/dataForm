<template>
	<p class='content'>
		<em class='label'>
			{{address.name }} :
		</em>
    </p>

</template>
<script>
	export default {
		name: "AddressItem",
		props: ['address']
	}
</script>

<style scoped>

</style>
