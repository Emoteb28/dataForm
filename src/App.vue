<template>
  <div id="app">
      <!-- NavBar -->
      <NavBar></NavBar>
      <!-- NavBar -->
      <img src="./assets/logo.png">
      <filter-bar></filter-bar>
      <TableauBuild
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields"
              :sort-order="sortOrder"
              :append-params="moreParams"
              detail-row-component="my-detail-row"
      ></TableauBuild>
  </div>
</template>
<script>
    import NavBar from "./components/NavBar";
    import Vue from 'vue'
    import FieldDefs from './components/FieldDefs.js'
    import TableauBuild from './components/TableauBuild'
    import DetailRow from './components/DetailRow'
    Vue.component('my-detail-row', DetailRow);

    export default {
        components: {
            NavBar,
            TableauBuild
        },
        data () {
            return {
                fields: FieldDefs,
                sortOrder: [
                    {
                        field: 'email',
                        sortField: 'email',
                        direction: 'asc'
                    }
                ],
                moreParams: {}
            }
        }
    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

