import { defineStore } from "pinia";


export const useDisplayStore = defineStore("dispay", {
  state: () => ({
    displaySkill: false,
    displayProjects: false,
    displayExperience: false,
   
  }),
  actions: {},
});
