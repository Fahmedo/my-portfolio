<script>
import 'animate.css';
</script>

<template>
  <div
    class="absolute w-[100%] flex pb-10 top-0 justify-center modalBg animate__animated animate__backInUp overflow-hidden h-[100vh]"
  >
    <div class="w-[300px] lg:w-[500px] p-10 cardBg mt-2">
      <div class="text-center text-4xl font-bold">skill</div>
      <div class="grid grid-cols-2 lg:md:grid-cols-3 gap-4">
        <div class="flex w-[100%] h-10 leading-4 space-x-2 mt-5">
          <div class="w-20">
            <img
              src="../assets/html5.svg"
              class="animate__animated animate__pulse animate__infinite w-8 h-10"
            />
            <div class="text-lg uppercase font-bold">html5</div>
          </div>
        </div>
        <div class="flex w-[100%] h-10 leading-4 mt-5 space-x-2">
          <div class="w-20">
            <img
              src="../assets/css3-alt.svg"
              class="animate__animated animate__pulse animate__infinite w-10 h-10"
            />
            <div class="text-lg uppercase font-bold">css3</div>
          </div>
        </div>
        <div class="flex w-[100%] h-10 leading-4 mt-5 space-x-2">
          <div class="w-20">
            <img
              src="../assets/square-js.svg"
              class="animate__animated animate__pulse animate__infinite w-10 h-10"
            />
            <div class="text-lg uppercase font-bold">js</div>
          </div>
        </div>
        <div class="flex w-[100%] h-10 leading-4 mt-5 space-x-2">
          <div class="w-20">
            <img
              src="../assets/bootstrap.svg"
              class="animate__animated animate__pulse animate__infinite w-10 h-10"
            />
            <div class="text-lg uppercase font-bold">bootstrap</div>
          </div>
        </div>
        <div class="flex w-[100%] h-10 leading-4 mt-5 space-x-2">
          <div class="w-20">
            <img
              src="../assets/tailwind-css.svg"
              class="animate__animated animate__pulse animate__infinite w-10 h-10"
            />
            <div class="text-lg uppercase font-bold">tailwind</div>
          </div>
        </div>
        <div class="flex w-[100%] h-10 leading-4 mt-5 space-x-2">
          <div class="w-20">
            <img
              src="../assets/vuejs.svg"
              class="animate__animated animate__pulse animate__infinite w-10 h-10"
            />
            <div class="text-lg uppercase font-bold">vue</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
