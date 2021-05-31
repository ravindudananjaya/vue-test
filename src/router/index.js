import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import ContactUs from '../views/ContactUs.vue'
import WorkDone from '../views/Work-done.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  { 
    path: '/details', 
    component: Details 
  },
  { 
    path: '/contactus', 
    component: ContactUs 
  },
  { 
    path: '/work-done', 
    component: WorkDone 
  }
]

const router = new VueRouter({
  routes
})

export default router
