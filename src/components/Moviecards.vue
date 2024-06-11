
<script setup>
import { ref, onMounted,} from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const model = ref(undefined);
const Movies=ref([])

const fetchMovies = async () => {
  try {
    const response = await axios.get("http://localhost:8081/");
    Movies.value = response.data;
    console.log(response.data);
    
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
};

onMounted(()=>{
   fetchMovies();
})

const router= useRouter();
const handleBookingTickets=(id)=>{
  const date=`${new Date().getFullYear()}${
    new Date().getMonth() + 1
  }${new Date().getDate()}`;
  router.push({name:'shows',params:{id,date}})
  }

</script>



<template>
 
  <v-slide-group center-active show-arrows class="ma-6 pa-4 ">
    <v-slide-group-item
      v-for="imgp in Movies"
      :key="imgp"
      v-slot="{ isSelected }"
    >
      <v-card
        :color="isSelected ? 'primary' : 'grey-lighten-1'"
        class="ma-8"
        height="300"
        width="300"
        
      >
      <v-img
        class="align-end text-white"
        height="250"
        :src="`http://localhost:8081/images/${imgp.src}`"
          
        >  </v-img>
        <v-spacer>  </v-spacer>
        
          <v-card-actions class="btn" >
            <v-btn variant="elevated" 
            rounded="sm" 
            color="red" 
            
            @click="handleBookingTickets(imgp.id)"> Book Tickets </v-btn>
            
          </v-card-actions>
        
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
 
</template>

<style scoped>
.btn{
  justify-content: center 
}
</style>

