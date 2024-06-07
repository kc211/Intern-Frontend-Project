<template>
    <h2>billing of booking system</h2>
</template>

<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
const route= useRoute();
const router= useRouter();
onMounted(()=>{
    // const response = axios.get(`http://localhost:8081/billing/${route.params.id}/`)
    // console.log(response.data);
    
})
</script>