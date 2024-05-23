<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';

let Movies=ref([])
onMounted(()=>{
  fetch('http://localhost:3000/Movies').then(res=>res.json()).then(data=>Movies.value=data)
  .catch(e=>console.log(e.message)
  )
})
</script>


<template>
    <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
    {{ movie.title }}
    </div>
   </div> 

</template>