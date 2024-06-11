<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const selectedDate = ref(undefined);
const Movies = ref({});
const theatres = ref([]);
const show_timings = ref([]);
const dates = ref([]);
const final_date = ref(undefined);

//variables for data attribute
const currentDate = ref(undefined);
const currentDay = ref(undefined);
const currentMonth = ref(undefined);
const Day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Month_names = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const date_ = ref(
  `${new Date().getFullYear()}${
    new Date().getMonth() + 1
  }${new Date().getDate()}`
);

onMounted(async() => {
  fetchMovie();
  currentDate.value = new Date().getDate();
  currentDay.value = Day_names[new Date().getDay()];
  currentMonth.value = Month_names[new Date().getMonth()];
  generateDates();
  selectedDate.value = Number(route.params.date.slice(5, 8));
});

function generateDates() {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  for (let i = today.getDate(); i <= daysInMonth; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    dates.value.push({
      date: date.getDate(),
      // day: Day_names[date.getDay()],
      // month: Month_names[date.getMonth()],
      // year: year,
    });
  }
}


const fetchMovie = async () => {
  try {
    const movieId = route.params.id;
    const response = await axios.get(
      `http://localhost:8081/shows/${movieId}/${date_.value}`
    );

    //data for movies
    Movies.value = response.data.Movie;
    console.log(Movies.value);

    //data for theatres
    theatres.value = response.data.Theatre;
    console.log(theatres.value);

    //data for show timings
    show_timings.value = response.data.Timings;
    console.log(show_timings.value);
  } catch (err) {
    console.error("error is :", err);
  }
};


const handleDate = (date) => {
  const newDate = `${new Date().getFullYear()}${
    new Date().getMonth() + 1
  }${date}`;
  if (final_date.value !== newDate) {
    date_.value = newDate;
    final_date.value = newDate;
    router.push({
      name: "shows",
      params: { id: route.params.id, date: newDate },
    });
  }
};

const handleBooking = (timing, t_name) => {
  const id= route.params.id;
     const date= final_date.value;
    const   show_time= timing;
      const theatre_name= t_name;
  router.push({
    name: "seats",
    params: {
      id,
      date,
      show_time,
      theatre_name
    },
  });
};
</script>

<template>
  <v-row no-gutters>
    <v-col :cols="4">
      <v-card id="about_movie" style="color: white">
        <v-img
          :src="`http://localhost:8081/images/${Movies.src}`"
          cover
          gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)"
        >
          <div style="margin-top: 5px; padding-top: 16px; text-wrap: balance">
            <v-card-title style="text-wrap: balance">
              <h2 color="white">
                {{ Movies.name }}
              </h2>
            </v-card-title>
            <v-card-subtitle>
              <v-chip class="ma-1" variant="outlined">{{
                Movies.rating
              }}</v-chip>
              <v-chip variant="outlined" class="ma-1">
                {{ Movies.genre }}
              </v-chip>
            </v-card-subtitle>
            <v-card-text>
              {{ Movies.description }}
            </v-card-text>
          </div>
        </v-img>
      </v-card>
    </v-col>
    <v-col :cols="8">
      <v-card color="pink" id="date">
        <v-card-title class="card_title d-flex mx-4 pa-0 h-1.5">
          <h3 class="mx-1">{{ currentMonth }}</h3>
          <h3 class="mx-1">{{ new Date().getFullYear() }}</h3>
        </v-card-title>
        <v-card-subtitle class="pa-0" opacity="15">
          <v-slide-group
            mandatory
            v-model="selectedDate"
            show-arrows
            class="dates ma-0"
            size="xs"
          >
            <v-slide-group-item
              v-for="(date, index) in dates"
              :key="index"
              v-slot="{ isSelected, toggle }"
              :value="date.date"
            >
              <v-btn
                :color="isSelected ? 'primary' : undefined"
                class="ma-1 pa-0"
                @click="toggle(), handleDate(date.date)"
                min-width="40px"
                style="color: black"
              >
                {{ date.date }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-card-subtitle>
      </v-card>

      <v-card id="theatres" class="ma-0 mt-2">
        <v-row class="ma-0">
          <v-col cols="12" class="pa-0">
            <v-card v-for="theatre in theatres" :key="theatre.id">
              <div class="title">
                <div style="margin-left: 20px; width: 20vw">
                  {{ theatre.name }}
                </div>
                <div class="tool-tip-location">
                  <v-tooltip location="top center" no-click-animation>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        class="mr-4"
                        size="x-small"
                        variant="plain"
                        icon="mdi-map-marker-outline"
                        v-bind="props"
                        text="Hover Me"
                      ></v-btn>
                    </template>

                    <div>{{ theatre.location }},{{ theatre.district }}</div>
                  </v-tooltip>
                </div>
                <div class="theatre_selection">
                  <v-btn
                    class="time"
                    variant="outlined"
                    v-for="time in show_timings"
                    :key="time.id"
                    color="green"
                    @click="handleBooking(time.show_timing, theatre.name)"
                  >
                    {{ time.show_timing }}
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
#about_movie {
  height: 100vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#date {
  height: 15vh;
}
#theatres {
  height: 85vh;
  display: flex;
}

.v-card {
  border-radius: 0;
  border: none;
  box-shadow: none;
}

.dates {
  width: 25vw;
}
.card_title {
  padding-left: 20px;
  padding-bottom: 0px;
  margin-right: 4px;
}
.theatre_selection {
  height: 50px;
  align-items: center;
  text-align: left;
  display: flex;
}
.time {
  margin: 5px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
