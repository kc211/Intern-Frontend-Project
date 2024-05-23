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
const handleBooking=(id)=>{

  router.push({name:'tickets',params:{id}})
  }
  </script>

<template>
      <Carousels/>
      <Moviecards :Movies="Movies"  @BookingTickets="handleBooking"/>
</template>
