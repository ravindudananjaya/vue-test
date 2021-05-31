<template>
  <!-- <div class="btn-group navigation-comp" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-outline-primary" @click="click('home')" for="btnradio1">Home</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label class="btn btn-outline-primary" @click="click('workdone')" for="btnradio2">Work done</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
    <label class="btn btn-outline-primary" @click="click('details')" for="btnradio3">Details</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
    <label class="btn btn-outline-primary" @click="click('contactus')" for="btnradio4">Contact</label>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand">Brand Name</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" @click="click('home')" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="click('workdone')" >Work Done</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="click('details')" >Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  @click="click('contactus')" >Contact us</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    click (value) {
      this.$emit('clicked', value)
    }
  }
}
</script>
