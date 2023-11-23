<script setup>
import SearchField from '../components/SearchField.vue';
import Recipe from '../components/Recipe.vue';
import { useRecipeStore } from '../stores/recipe';
import { ref, computed } from 'vue';

const store = useRecipeStore();
const search = ref('');

// Filter by keywords of ingredients
const filterRecipes = computed(() => {
  if (store.getRecipes) {
    // filter keywords 
    const keywords = store.getRecipes.filter(item => {
      return item.recipe.label.toLowerCase().includes(search.value.toLowerCase())
    })
    // filter ingredients 
    const ingredients = store.getRecipes.filter(item => {
        return item.recipe.ingredients.some((item) => {
          return item.text.toLowerCase().includes(search.value.toLowerCase())
        })
    })
    console.log(ingredients)
    return new Set(keywords.concat(ingredients))
  }
})

</script>

<template>
  <main>
    <div class="hero__container">
      <h1>Recipe Finder</h1>
      <SearchField v-model:search="search" />

    </div>
    <TransitionGroup name="fade" tag="ul" appear class="grid">
      <Recipe v-for="recipe in filterRecipes" :key="recipe.recipe.image" :image="recipe.recipe.image"
        :title="recipe.recipe.label" :ingredients="recipe.recipe.ingredients" />
    </TransitionGroup>
  </main>
</template>
