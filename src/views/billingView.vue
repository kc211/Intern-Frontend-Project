<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card elevation="16" class="pa-4 mx-auto ma-5" width="350" v-for="seat in seats" :key="seat" color="black" height="200px">
          <v-card-title> {{ Theatre_name }}</v-card-title>
          <v-card-item>
              <v-card-subtitle>
                {{ movie_name }} - {{ rating }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{show_timing}}   Seat-{{ seat.selectedSeats }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ user }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ date_ }}
              </v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "../config/axiosConfig";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/AuthStore";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
// const Tickets=ref([]);
const seats = ref([]);
const user = ref({});
const show_timing = ref("");
const movie_name = ref("");
const Theatre_name = ref("");
const rating = ref("");
const date_= ref("");
onMounted(async () => {
  const movie_id = route.params.id;
  const theatre_name = route.params.theatre_name;
  const show_time = route.params.show_time;
  const date = route.params.date;
  const email = authStore.user.email;
  const response = await axios.post(
    `http://localhost:8081/billing/${movie_id}/${theatre_name}/${show_time}/seats/${date}/`,
    { email, movie_id, theatre_name, show_time, date }
  );
  try {
    console.log(response);
    user.value = authStore.user.email;
    seats.value = response.data.seats;
    movie_name.value = response.data.Movie_details[0].name;
    show_timing.value = show_time;
    Theatre_name.value = theatre_name;
    rating.value = response.data.Movie_details[0].rating;
    date_.value=response.data.date
  } catch (error) {
    console.error(
      "There was an error fetching the billing information:",
      error
    );
  }
});
</script>
