<script setup>
import Carousels from '@/components/carousels.vue';
import Moviecards from '@/components/Moviecards.vue';

import { useRouter } from 'vue-router';
import {ref, defineProps } from 'vue';

const props= defineProps({
  Movies:{
    type:Array,
    required:true
  }
})

const router=useRouter();
// const receivedId=ref('');
// const theid;
const handleBooking=(id)=>{
  // receivedId.value=id;
  // theid=receivedId.value
  router.push({name:'tickets',params:{id}})
  // console.log(receivedId);
}
// const theid=receivedId.value
</script>

<template>
      <Carousels/>
      <Moviecards :Movies="Movies"  @BookingTickets="handleBooking"/>
      <!-- <Moviecards :Movies="Movies"  />   -->
</template>
