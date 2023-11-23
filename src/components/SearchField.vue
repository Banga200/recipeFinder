<script setup>
import SearchIcon from './Icons/IconSearch.vue';
</script>
<template>
    <div class="search__field__container">
        <input placeholder="Search By Ingredient or Keywords..." @input="$emit('update:search',$event.target.value)" class="search_input"/> 
        <SearchIcon width="25px"/> 
    </div> 
</template>