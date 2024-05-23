<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  Movies: {
    type: Array,
    required: true,
  },
});

const theatres = ref([
  {
    theatre_name: "AAA Cinemas: Ameerpet",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "AMB Cinemas: Gachibowli",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian Cinemart: RC Puram",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian Cineplanet Multiplex: Kompally",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian CineSquare Multiplex: Uppal",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian M Cube Mall: Attapur",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian Mukta Cinemas A2: MJR Square, Narapally",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Asian Sha & Shahensha: Chintal",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "Cinepolis: Lulu Mall, Hyderabad",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },
  {
    theatre_name: "INOX: GSM Mall, Hyderabad",
    timings: { 1: "11:00 AM", 2: "2:30 PM", 3: "6:30 PM", 4: "10:00 PM" },
  },

  

]);
</script>

<template>
  <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
      <v-row no-gutters>
        <v-col :cols="4">
          <v-card id="about_movie" style=" color:white" >
            <v-img :src="movie.src"  cover gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)">
              <div style="margin-top: 5px;padding-top:16px; text-wrap:balance">

                <v-card-title style="text-wrap: balance">
                  <h2>
                    {{ movie.title }}
                  </h2>
                </v-card-title>
                <v-card-subtitle >
                  <v-chip class="ma-1" variant="outlined">{{
                    movie.rating
                  }}</v-chip>
                <v-chip variant="outlined" class="ma-1">
                  {{ movie.genre }}
                </v-chip>
              </v-card-subtitle>
              <v-card-text >
                {{ movie.desc }}
              </v-card-text>
            </div>
            </v-img>
          </v-card>
        </v-col>
        <v-col :cols="8">
          <v-card color="pink" id="date">
            <v-card-title class="card_title">Select the date</v-card-title>
            <v-card-subtitle class="pa-0" opacity="15">
              <v-slide-group show-arrows class="dates ma-0" size="xs">
                <v-slide-group-item
                  v-for="n in 25"
                  :key="n"
                  v-slot="{ isSelected, toggle }"
                >
                  <v-btn
                    :color="isSelected ? 'primary' : undefined"
                    class="ma-1"
                    @click="toggle"
                  >
                    {{ n }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-card-subtitle>
          </v-card>

          <v-card color="white" id="theaters" class="ma-0">
            <v-row class="ma-0">
              <v-col cols="4" class="pa-0">
                <v-card
                  class="theatre_selection"
                  v-for="theatre in theatres"
                  :key="theatre"
                >
                  <div style="margin-left: 10px">
                    {{ theatre.theatre_name }}
                  </div>
                </v-card>
              </v-col>
              <v-col cols="8" class="pa-0">
                <v-card class="theatre_selection" v-for="timing in theatres">
                  <v-btn
                    class="time"
                    variant="outlined"
                    v-for="time in timing.timings"
                    :key="time"
                    color="green"
                    :to="{ name: 'seats' }"
                  >
                    {{ time }}
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
#about_movie {
  height: 100vh;
  font-family:Verdana, Geneva, Tahoma, sans-serif
}
#date {
  height: 15vh;
}
#theaters {
  height: 85vh;
  display: flex;
}

.v-card {
  border-radius: 0;
}

.dates {
  width: 25vw;
}
.card_title {
  padding-left: 20px;
  padding-bottom: 0px;
}
.theatre_selection {
  height: 50px;
  align-items: center;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.time {
  margin: 5px;
}

</style>
