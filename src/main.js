import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/reset.css';


// Install BootstrapVue
Vue.use(BootstrapVue)

// Install BootstrapVue icon
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App)
}).$mount('#app')