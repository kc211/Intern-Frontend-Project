<script setup>
import { ref, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";
import axios from "axios";

const route= useRoute();
const router= useRouter();
const Movies = ref([]);


const fetchMovie=async()=>{
  try{
    const movieId = route.params.id;    
    const response= await axios.get(`http://localhost:8081/shows/seats/${movieId}`);
    Movies.value=response.data;
  }
  catch(err){
    console.error("error is :" ,err);

  }
};

onMounted(() => {
 fetchMovie();
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
  console.log(selected.value[i-1]);
  
  if (selected.value[i - 1]) {
    total_price.value += 177;
    selectedTickets.value.push(i);
  } else {
    total_price.value -= 177;
    selectedTickets.value=selectedTickets.value.filter(item=>item!=i);
  }
};


const handlePayment=(id)=>
{
  router.push('/shows/seats/:id/billing/:id');
}
</script>

<template>
      <h2 class="movie-title mt-2">{{ Movies.name }}</h2>
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
                      :value="177"
                      @change="handleClick(i)"
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
                <v-btn variant="elevated" rounded="xl" elevation="4" color="red" @click="handlePayment(Movies.id)"> Pay </v-btn>
              </v-card>
          </v-row>
        </v-container>
      </v-container>
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
