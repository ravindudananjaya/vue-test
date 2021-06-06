<template>
<div>
  
  <transition name="slide-fade">

  <nav v-if="navbarCollapse === false"  :class="componentClasses" class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand">Brand Name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link "><router-link class="nav-btn" to="/">Home</router-link> </a>
            <div class="link-hover-animation"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link class="nav-btn" to="/details">Details</router-link></a>
            <div class="link-hover-animation"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link class="nav-btn" to="/work-done">Work Done</router-link></a>
            <div class="link-hover-animation"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link class="nav-btn" to="/contactus">Contact Us</router-link></a>
            <div class="link-hover-animation"></div>
          </li>
        </ul>
      </div>
  </nav>

  <div class="navbar-collapsed" v-if="navbarCollapse === true">
    <svg class="navbar-collapsed__svg" @click="scrollToTop()" width="35px" height="35px" id="Layer_1" x="0px" y="0px" viewBox="0 0 297.001 297.001" style="enable-background:new 0 0 297.001 297.001;" xml:space="preserve">
    <g>
      <g>
        <g>
          <path d="M107.883,0h-85.27C10.144,0,0.001,10.143,0.001,22.612v85.27c0,12.469,10.143,22.612,22.612,22.612h85.27     c12.469,0,22.612-10.143,22.612-22.612v-85.27C130.493,10.143,120.352,0,107.883,0z"/>
          <path d="M274.388,0h-85.27c-12.469,0-22.612,10.143-22.612,22.612v85.27c0,12.469,10.143,22.612,22.612,22.612h85.27     c12.469,0,22.612-10.143,22.612-22.612v-85.27C297,10.143,286.857,0,274.388,0z"/>
          <path d="M107.883,166.507h-85.27c-12.469,0-22.612,10.142-22.612,22.611v85.27C0.001,286.857,10.144,297,22.613,297h85.27     c12.469,0,22.612-10.143,22.612-22.612v-85.27C130.493,176.649,120.352,166.507,107.883,166.507z"/>
          <path d="M274.388,166.507h-85.27c-12.469,0-22.612,10.143-22.612,22.612v85.27c0,12.469,10.143,22.612,22.612,22.612h85.27     C286.857,297,297,286.857,297,274.388v-85.27C297,176.649,286.857,166.507,274.388,166.507z"/>
        </g>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
  </div>  
  
  </transition>
  
  </div>
</template>

<script>
export default {
  name: 'navigation',
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
      if(this.windowTop > 16){
        this.navbarCollapse = true
      } else {
        this.navbarCollapse = false
      }
      console.log(this.navbarCollapse)
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style >
</style>
