
<script setup>
import { ref } from "vue";
const model = ref(null);

import { defineProps } from "vue";

const props=defineProps({
  Movies:{
    type:Array,
    required:true
  }
})

const emits=defineEmits(['BookingTickets'])
const handleBookingTickets=(id)=>{
  console.log(id);
  
  emits('BookingTickets',id);
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

