<template>
  <h2>Theatre name</h2>
  <h3>Movie name and rating</h3>
  <h3>Show Timing and Seats</h3>
  <h3>User details {{ user.email }}</h3>
</template>

<script setup>
import axios from "../config/axiosConfig";
import { onMounted,ref } from "vue";
import { useRoute} from "vue-router";
const route = useRoute();
const user=ref({});
onMounted(() => {
  axios.get(`http://localhost:8081/billing/${route.params.id}/`)
    .then(response => {
      console.log(response.data)
      user.value= response.data;
    })
    .catch(error => {
      console.error("There was an error fetching the billing information:", error);
    });
});

</script>
