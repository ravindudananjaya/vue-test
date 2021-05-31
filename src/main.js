import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/reset.css';
import router from './router'


// Install BootstrapVue
Vue.use(BootstrapVue)

// Install BootstrapVue icon
Vue.use(IconsPlugin)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')