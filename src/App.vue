<template>
  <div class="bg-image" style="background-image: url('@/../images/city-night-bg.jpg'); height: 100vh;">
    <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.5)">
      <Navbar />
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView} from 'vue-router'
</script>
