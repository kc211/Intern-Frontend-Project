<template>
  <h2>billing of booking system</h2>
</template>

<script setup>
import axios from "../config/axiosConfig";
import { onMounted } from "vue";
import { useRoute} from "vue-router";
const route = useRoute();
// const router = useRouter();

onMounted(() => {
  axios.get(`http://localhost:8081/billing/${route.params.id}/`)
    .then(response => {
      
    })
    .catch(error => {
      console.error("There was an error fetching the billing information:", error);
    });
});

</script>
