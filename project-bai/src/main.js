import 'leaflet/dist/leaflet.css';
import Vue from 'vue'
import App from './App.vue'
import store from './store';
import 'bootstrap';
import 'popper.js';
import 'jquery';
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')