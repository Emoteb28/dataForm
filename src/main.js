import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

/*-vue-table-pagination-*/
import VueTablePagination from 'vue-table-pagination';
Vue.use(VueTablePagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
