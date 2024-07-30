import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCartShopping, faDollarSign);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
