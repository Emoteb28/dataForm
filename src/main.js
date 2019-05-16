import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rawDisplayer from "./components/raw-displayer.vue";

/*-Bootstrap-*/
 import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

/*-FontAwesome-*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/*--*/
import VueEvents from 'vue-events'

Vue.use(VueEvents);
library.add(faUserSecret, faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component("rawDisplayer", rawDisplayer);

/*-vue-table-pagination-*/
import VueTablePagination from 'vue-table-pagination';
Vue.use(VueTablePagination);

/*-vue-axios-*/
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
