<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

let Movies = ref([]);
onMounted(() => {
  fetch("http://localhost:3000/Movies")
    .then((res) => res.json())
    .then((data) => (Movies.value = data))
    .catch((e) => console.log(e.message));
});

const ex4 = [
  "red",
  "indigo",
  "blue",
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "red darken-3",
  "indigo darken-3",
  "orange darken-3",
];

const selected = ref([]); // Array to store selected states of checkboxes
let total_price = ref(0);
const selectedTickets = ref([]);

const handleClick = (i) => {
  selected.value[i - 1] = !selected.value[i - 1];
  if (selected.value[i - 1]) {
    total_price.value += 177;
    selectedTickets.value.push(i);
  } else {
    total_price.value -= 177;
    selectedTickets.value=selectedTickets.value.filter(item=>item!=i);
  }
};
</script>

<template>
  <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <v-container class="pa-5">
        <v-container class="pa-2">
          <v-row no-gutters class="flex-column">
            <v-card class="d-flex indication" height="10vh" rounded="0">
              <v-checkbox v-model="ex4" label="Available"></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="Selected"
                color="blue"
                value="blue"
              ></v-checkbox>
              <v-checkbox
                label="Not Available"
                indeterminate
                disabled
              ></v-checkbox>
            </v-card>
            <v-card height="100vh" rounded="0">
              <v-card height="95vh">
                <v-row no-gutters>
                  <v-col v-for="i in 120" :key="i" :cols="1">
                    <v-checkbox

                      v-model="selected[i - 1]"
                      hide-details
                      :value="200"
                      @click="handleClick(i)"
                      :color="selected[i - 1] ? 'blue' : undefined"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-card>

              <v-card height="5vh" class="screen mt-1"> <h3>screen</h3></v-card>
            </v-card>
            
              <v-card height="10vh" class="d-flex dashboard">

                <span v-for="tickets in selectedTickets" :key="tickets">
                  <h3 class="mx-3">

                    ticket-{{ tickets }}
                  </h3>
                </span>
                <span>
                  <h3 class="mx-3">
                    Rs {{ total_price }}

                  </h3>
                </span>
                <v-btn variant="elevated" rounded="xl" elevation="4" color="red"> Pay </v-btn>
              </v-card>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </div>
</template>
<style scoped>
.indication {
  justify-content: center;
}
.movie-title {
  text-align: center;
}
.screen{
  text-align: center;

}
.v-card{
  border-radius: 0;
}
.dashboard{
  justify-content: center;
  align-items: center;
}
</style>
