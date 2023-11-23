<script setup>
const props = defineProps(['image','title', 'ingredients'])
</script>
<template>
    <li class="card">
        <div class="cardImage__container">
            <img :src="props.image"/>
        </div>
        <div class="content">
            <h3>{{ props.title }}</h3>
            <strong>Ingredients:</strong>
            <ul >
                <li  v-for="ingredient in props.ingredients">
                    {{ ingredient.text }}
                </li>
            </ul>
        </div>
    </li>
</template>