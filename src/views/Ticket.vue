<script setup>
import { defineProps } from 'vue';
    const props=defineProps({
        Movies:{
            type:Array,
            required:true
        },
    })

    
</script>


<template>
    <h1>Hello ebs</h1>
    <div v-for="movie in Movies" :key="movie">
        
        <h3 v-if="movie.id==$route.params.id">
        {{ movie.title }}
        </h3>
    </div>
</template>
