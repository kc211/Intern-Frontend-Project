<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

let Movies = ref([]);
onMounted(() => {
  fetch("http://localhost:3000/Movies")
    .then((res) => res.json())
    .then((data) => (Movies.value = data))
    .catch((e) => console.log(e.message));
});

const ex4= ['red', 'indigo', 'blue', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']

</script>

<template>
  <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <v-container>
        <v-row no-gutters class="flex-column">
            <v-card class="d-flex indication" height="10vh" rounded="0">
              <v-checkbox  v-model="ex4" label="Available" ></v-checkbox>
              <v-checkbox  v-model="ex4" label="Selected" color="blue" value="blue"></v-checkbox>
              <v-checkbox  label="Not Available" indeterminate disabled ></v-checkbox>
            </v-card>
            <v-card height="90vh" rounded="0" >

              <v-container>
                <v-card color="pink" height="100vh">

                  <v-row no-gutters>
                    <v-col v-for="i in 25" :key="i" :cols="1 " >
                    <v-checkbox></v-checkbox>
                    </v-col>
                  </v-row>

                </v-card>
              </v-container>
            </v-card>
        </v-row>
        </v-container>
    </div>
  </div>
</template>
<style scoped>

.indication{
  justify-content: center;
}
.movie-title{
  text-align: center;
}
</style>