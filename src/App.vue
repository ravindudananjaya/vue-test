<template>
  <div id="app">
    <div class="navigation">
      
      <navigation
      @clicked="togglePage" />
    </div>


    <div class="page-content">
        <Home
        v-if="page === 'home'" />
        <WorkDone
        v-if="page === 'workdone'" />
        <Details
        v-if="page === 'details'" />
        <ContactUs
        v-if="page === 'contactus'" />
    </div>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import Home from './components/Home.vue'
import WorkDone from './components/Work-done.vue'
import Details from './components/Details.vue'
import ContactUs from './components/ContactUs.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 'home',
    }
  },
  
  components: {
    navigation,
    Home,
    WorkDone,
    Details,
    ContactUs
  },
  methods: {
    togglePage (value) {
      console.log(value)
     this.page = value;
    }
  }
}
</script>

<style>
</style>
