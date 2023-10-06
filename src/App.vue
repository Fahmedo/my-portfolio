<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AppNavbar from './views/Navbar.vue';
</script>

<template>
  <div
    class="w-[100%] h-[100vh] bg-[url(https://img.freepik.com/premium-photo/blue-bokeh-background-element-designnatura-blue-blurred-background_49507-3311.jpg)] bg-cover bg-no-repeat"
  >
    <HomeView />
    <AppNavbar />
  </div>
</template>

<style scoped></style>
