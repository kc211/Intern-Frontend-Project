<script setup>
import { ref,  onMounted } from "vue";
let Movies = ref([]);
let theatres = ref([]);
let dates=ref([]);
onMounted(() => {
  fetch("http://localhost:3000/Movies")
    .then((res) => res.json())
    .then((data) => (Movies.value = data))
    .catch((e) => console.log(e.message));
  fetch("http://localhost:3000/theatres")
    .then((res) => res.json())
    .then((data) => (theatres.value = data))
    .catch((e) => console.log(e.message));
    generateDates();
});


function generateDates() {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    dates.value.push(date.toDateString());
  }
}
console.log(dates);

</script>

<template>
  <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
      <v-row no-gutters>
        <v-col :cols="4">
          <v-card id="about_movie" style="color: black" color="green">
            <v-img
              :src="movie.src"
              cover
              gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)"
            >
              <div
                style="margin-top: 5px; padding-top: 16px; text-wrap: balance"
              >
                <v-card-title style="text-wrap: balance">
                  <h2>
                    {{ movie.title }}
                  </h2>
                </v-card-title>
                <v-card-subtitle>
                  <v-chip class="ma-1" variant="outlined">{{
                    movie.rating
                  }}</v-chip>
                  <v-chip variant="outlined" class="ma-1">
                    {{ movie.genre }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-text>
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
                v-for="(date, index) in dates" :key="index"
                  v-slot="{ isSelected, toggle }"
                >
                  <v-btn
                    :color="isSelected ? 'primary' : undefined"
                    class="ma-1 pa-0"
                    @click="toggle"
                  
                    min-width="30px"
                  >
                    {{ date }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-card-subtitle>
          </v-card>

          <v-card color="white" id="theatres" class="ma-0">
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#date {
  height: 15vh;
}
#theatres {
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
