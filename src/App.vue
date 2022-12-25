<script setup>

import Shouq from './components/Shouq.vue'
</script>

<template>
 
<nav class="navbar navbar-expand-lg bg-success pt-2 pb-2 m-2">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav text-success" style="font-family:Cairo">
        <li class="nav-item">
          <router-link class="text-dark text-dark" to="/"><h2>Home|</h2></router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-dark" to="/Shouq"><h2>Our Menue</h2></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view />
      <Home/>

  
</template>

