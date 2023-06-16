<script setup>
import "animate.css";
import ContactView from '../components/contact.vue'
</script>
<template>
  <div class="grid lg:md:flex mt-20">
    <div
      class="lg:md:w-[100%] w-0 lg:md:h-[70vh] h-0 bg-[url(../assets/imgs/pc-svg.png)] bg-contain bg-no-repeat "
    ></div>
    <div class="text-center mt-10 lg:md:mt-0  p-10 w-[100%] inline-block text-[#4169E1] font-bold  ">
      <img src="../assets/arrow.svg" class="absolute lg:md:inline-block  hidden left-[35%] bottom-[30%] animate__animated animate__zoomIn" />

      <h1 class="text-1xl">Hi there, I'm <span class="font-mono text-[#40E0D0] text-3xl uppercase">Faruq ahmed olaitan</span></h1>
      <h3>Front-End Developer</h3>
      <p>
        As a skilled front-end developer, I am dedicated to turning ideas into
        innovative web applications and delivering high-quality results. Explore
        my latest projects and articles, showcasing my expertise in React.js and
        web development.
      </p>
      <ContactView class=" absolute lg:md:right-36 lg:md:top-[70%] top-[92%] right-3  animate__animated animate__rotateIn " />
    </div>
    
  </div>
</template>
