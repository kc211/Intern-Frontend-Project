<script setup>
import { ref } from 'vue';

const images=ref([
  { src:"https://assets-in.bmscdn.com/promotions/cms/creatives/1715775955272_g4ewtnj67.jpg"},
  {  src:"https://assets-in.bmscdn.com/promotions/cms/creatives/1706383776906_web.jpg"},
  { src:"https://assets-in.bmscdn.com/promotions/cms/creatives/1715325550925_asiancinemawebbanner.jpg"}
])
</script>

<template>
    <v-carousel 
    hide-delimiters
    height="300px"
    class="pa-2"
    cycle
    >
  <v-carousel-item
   
      v-for="item in images" :key="item"
      :src="item.src"

    
  ></v-carousel-item>


</v-carousel>
</template>

