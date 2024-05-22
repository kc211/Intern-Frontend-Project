<script setup>
import { defineProps } from "vue";
const props = defineProps({
  Movies: {
    type: Array,
    required: true,
  },
});
</script>


<template>
  <div v-for="movie in Movies" :key="movie">
    <div v-if="movie.id == $route.params.id">
      <v-row no-gutters>
        <v-col :cols="4">
          <v-card
            id="about_movie"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
          >
            <v-card-title> {{ movie.title }}</v-card-title>
            <v-card-subtitle>{{ movie.genre }}</v-card-subtitle>
            <v-card-text>
              {{ movie.desc }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="8">
          <v-card color="pink" id="date">
            <v-card-title class="card_title">Select the date</v-card-title>
            <v-card-subtitle class="pa-0" opacity="15">
                <v-slide-group show-arrows class="dates ma-0" size="xs">
                    <v-slide-group-item
                    v-for="n in 25"
                    :key="n"
                    v-slot="{ isSelected, toggle }"
                    >
                    <v-btn
                    :color="isSelected ? 'primary' : undefined"
                    class="ma-1"
                    
                    @click="toggle"
                    >
                    {{ n }}
                </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-card-subtitle>
        </v-card>
        <v-card color="black" id="theaters">
           <v-card class="theatre_selection">theatre-1</v-card>
           <v-card class="theatre_selection">theatre-2</v-card>
           <v-card class="theatre_selection">theatre-3</v-card>
           <v-card class="theatre_selection">theatre-4</v-card>
           <v-card class="theatre_selection">theatre-5</v-card>
           <v-card class="theatre_selection">theatre-6</v-card>
           <v-card class="theatre_selection">theatre-7</v-card>
           <v-card class="theatre_selection">theatre-8</v-card>
           <v-card class="theatre_selection">theatre-9</v-card>
           <v-card class="theatre_selection">theatre-10</v-card>
        </v-card>
    </v-col>
</v-row>
</div>
</div>
</template>


<style scoped>
#about_movie {
  height: 100vh; /* Ensure the cards take the full height of their container */
}
#date {
  height: 15vh;
}
#theaters {
  height: 85vh;
}

.v-card {
  border-radius: 0;
}

.dates{
    width:25vw
}
.card_title{
    padding-left: 20px;
    padding-bottom:0px;
}
.theatre_selection{
    height: 50px;
}
</style>
