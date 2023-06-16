<script>
import {ref} from 'vue'
import Db from '../../db.json'


export default{
  setup(){
    const data = ref([])
data.value= Db.projects
return{
  Db:data
}
  }
}


</script>

<template>

  <div
    class="absolute w-[100%] h-[100vh] lg:px-10 px-1 py-5 top-0 animate__animated animate__backInUp  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10 scroll-smooth overflow-y-scroll  overflow-hidden justify-center modalBg2" 
  >

   
    <div class="h-72 w-72 bg-[#fff] pt-2 pb-4 px-5 group shadow-md " v-for="d in Db" :key="d.id">
      <div class="text-blue1 capitalize font-bold"> {{d.projecName}}</div>
     
    <img :src="d.projectImg" class="w-[100%] h-[200px] object-contain  group-hover:scale-[1.03] transition-transform" >
  
      <div class="group-hover:visible invisible">
          <button class="bg-blue9 m-1 p-2 rounded-full">
            <a target="_blank" :href="d.githubLink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"  class="w-6 h-6">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
        </a>
          </button>

      <button class="  float-right bg-blue9 m-1 p-2 rounded-full ">
        <a target="_blank" :href="d.siteLink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
        </svg>
        </a>
        
        
      </button>
      
      </div>
    <div class="absolute  w-60 group-hover:visible invisible bg-blue6 text-blue1 font-semibold rounded-md p-2 text-justify">ReadMe: {{d.readMe}}</div>
    </div>
    
   
  </div>
</template>
<style scoped>



</style>
