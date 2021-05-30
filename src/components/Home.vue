<template>
    <div>
       <h1 class="display-3 text-center">Welcome</h1>
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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://images.wallpaperscraft.com/image/rollsroyce_front_view_headlights_136993_1280x800.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://images.wallpaperscraft.com/image/bmw_e34_red_cars_side_view_sports_96487_1280x800.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://images.wallpaperscraft.com/image/car_sportscar_red_148269_1280x800.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.wallpaperscraft.com/image/mercedes_gelandewagen_g63_brabus_black_g_tuning_2013_2014_suv_jeep_b63_4x4_hd_6k_93020_1280x800.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

    
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  },
  // data() {
  //     return {
  //       slide: 0,
  //       sliding: null
  //     }
  //   },
  //   methods: {
  //     onSlideStart() {
  //       this.sliding = true
  //     },
  //     onSlideEnd() {
  //       this.sliding = false
  //     }
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
