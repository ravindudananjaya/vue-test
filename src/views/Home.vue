<template>
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      fade
      controls
      indicators
      background="#ccc"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Welcome"
        text="“Taking an image, freezing a moment, reveals how rich reality truly is.” "
        img-src="https://images.unsplash.com/photo-1542300058-849d3b08aa0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      caption="Welcome"
        text="“Taking an image, freezing a moment, reveals how rich reality truly is.” "
      img-src="https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
      caption="Welcome"
        text="“Taking an image, freezing a moment, reveals how rich reality truly is.” "
      img-src="https://images.unsplash.com/photo-1542300058-b94b8ab7411b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
      caption="Welcome"
        text="“Taking an image, freezing a moment, reveals how rich reality truly is.” ">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1542395975-d6d3ddf91d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div  @click="openInfo" class="get-to-know">
      <div class="get-to-know__text">Get to Know Us</div>
    </div>
    <div v-if="info === true" class="info">
      <div class="info_box" :class="{'4me': btnClass}">
        <button  @click="closeInfo">X</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      info: '',
      btnClass: true
    }
  },
  methods: {
    openInfo () {
       this.info = true;
       console.log(this.info)
    },
    closeInfo () {
       this.info = false;
       console.log(this.info)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  