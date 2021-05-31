<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand">Brand Name</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link "><router-link class="nav-btn" to="/home">Home</router-link> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link class="nav-btn" to="/details">Details</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link class="nav-btn" to="/work-done">Work Done</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link class="nav-btn" to="/contactus">Contact Us</router-link></a>
      </li>
    </ul>
  </div>
</nav>  
</div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
