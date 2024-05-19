
<script setup>
import { ref } from "vue";
const model = ref(null);

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const imagepaths = ref([
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
]);
</script>



<template>
  <!-- <v-sheet class="mx-auto" elevation="8" max-width="800"> -->
  <!-- <v-row> -->

  <v-slide-group center-active show-arrows class="ma-6 pa-4 ">
    <v-slide-group-item
      v-for="imagepath in imagepaths"
      :key="imagepath"
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
          :src="imagepath.src"
          
        >  </v-img>
        <v-spacer>  </v-spacer>
        
          <v-card-actions class="btn" >
            <v-btn variant="elevated" rounded="sm" color="red"> Book Tickets </v-btn>
            
          </v-card-actions>
        
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
  <!-- </v-sheet> -->
  <!-- </v-row> -->
</template>

<style scoped>
.btn{
  justify-content: center 
}
</style>

