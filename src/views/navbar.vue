<script setup>
import SkillView from "../components/skill.vue";
import ProjectView from "../components/projects.vue";
import ExperienceView from "../components/experience.vue";
import "animate.css";
import { useDisplayStore } from "../stores/display";

const displayStore = useDisplayStore();

const displayModal1 = () => {
  displayStore.displaySkill = !displayStore.displaySkill;
  displayStore.displayExperience = false;
  displayStore.displayProjects = false;
};
const displayModal2 = () => {
  displayStore.displayProjects = !displayStore.displayProjects;
  displayStore.displayExperience = false;
  displayStore.displaySkill = false;
};
const displayModal3 = () => {
  displayStore.displayExperience = !displayStore.displayExperience;
  displayStore.displayProjects = false;
  displayStore.displaySkill = false;
};
</script>

<template>
  <nav
    class="flex absolute top-0 left-[50%] translate-x-[-50%] text-center h-10 bg-shadeOfwhite justify-center"
  >
    <div class="text-bolder w-contain h-10 m-5 px-5 text-[#fff] logoBg font-bold font-mono text-3xl italic rounded-t-xl shadow-xl animate__animated animate__bounceInRight">{Da_horlie}</div>
  </nav>
  <div v-if="displayStore.displaySkill">
    <SkillView />
  </div>
  <div v-else-if="displayStore.displayProjects">
    <ProjectView />
  </div>
  <div v-else-if="displayStore.displayExperience">
    <ExperienceView />
  </div>

  <div class="radio-inputs">
    <label class="radio">
      <input
        type="radio"
        name="radio"
        checked="true"
        @click="
          () => (
            (displayStore.displaySkill = false),
            (displayStore.displayExperience = false),
            (displayStore.displayProjects = false)
          )
        "
      />
      <span class="name">About</span>
    </label>

    <label class="radio">
      <input type="radio" name="radio" @click="displayModal1()" />
      <span class="name">Skill</span>
    </label>
    <label class="radio">
      <input type="radio" name="radio" @click="displayModal2()" />
      <span class="name">Projects</span>
    </label>

    <label class="radio">
      <input type="radio" name="radio" @click="displayModal3()" />
      <span class="name">Experience</span>
    </label>
  </div>
</template>

<style scoped>
.radio-inputs {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #030339;
  box-sizing: border-box;
  box-shadow: 2px 0 0px 2px rgba(66, 126, 165, 0.6);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0%;
  z-index: 10;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgb(185, 214, 255);
  transition: all 0.15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 800;
  color: rgb(8, 30, 61);
}
</style>
