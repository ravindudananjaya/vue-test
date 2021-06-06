<template>
    <div >
      <h1 class="display-1">WorkDone</h1>
      <img src="https://image.freepik.com/free-vector/crushed-repaired-car-auto-vector-illustration_101884-1.jpg">
      
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1 class="display-1">WorkDone</h1>
      <h1>askjdsakb</h1>
      
      <a @click="scrollToTop(), goToPricing()">Pricing</a>

  </div>
</template>

<script>
export default {
  name: 'Work-done',
  props: {
    msg: String
  },
  data() {
    return {
      windowTop: 0,
      navbarCollapse: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      console.log(this.windowTop );
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },  
    // goToPricing() {
    //   this.$router.push('/pricing');
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
