<script setup>
import { RouterView } from 'vue-router';
import {onMounted} from 'vue';
import { useRecipeStore } from './stores/recipe';

const store = useRecipeStore();
onMounted(() => {
  store.getAllRecipe()
})
</script>

<template>
  <RouterView />
</template>
