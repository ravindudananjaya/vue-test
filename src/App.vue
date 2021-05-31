<template>
  <div id="app">

    
    <div class="navigation">
       <navigation />
    </div>

    <div class="page-content">
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>

</template>

<script>
import navigation from './components/navigation.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 'home',
    }
  },
  components: {
    navigation
  }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>
