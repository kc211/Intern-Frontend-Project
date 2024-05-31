
<script setup>
import { ref, onMounted,} from "vue";
import { useRouter } from "vue-router";
const model = ref(null);
let Movies=ref([])
onMounted(()=>{
  fetch('http://localhost:3000/Movies').then(res=>res.json()).then(data=>Movies.value=data)
  .catch(e=>console.log(e.message)
  )
})

const router= useRouter();
const handleBookingTickets=(id)=>{
  router.push({name:'shows',params:{id}})
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
          :src="imgp.src"
          
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

