import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipe", () => {
  // States
  const recipes = ref([]);
  // Getters
  const getRecipes = computed(() => {
    return recipes.value;
  });
  // Actions
  async function getAllRecipe() {
    try {
       await fetch(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=696b206c&app_key=cac125b778e89a9ea8ac6a6f1b75ea5a&imageSize=REGULAR&random=true"
      ).then((res) => res.json())
      .then(data => recipes.value = data.hits);
      console.log(recipes.value)
    } catch (error) {
      console.log(error);
    }
  }
  return { recipes, getAllRecipe, getRecipes };
});
