<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const ctheme = ref(false);
const theme = useTheme();

const changeTheme = () => {
  console.log(ctheme.value);

  ctheme.value = !ctheme.value;
  theme.global.name.value = ctheme.value ? "dark" : "light";
};

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";

const Movies = ref([
  {
    src: image1,
    title: "The Garifield Movie",
    id: 1,
    desc: "The new 'Garfield movie', set for release in 2024, is an animated film featuring Chris Pratt as the voice of Garfield and Samuel L. Jackson voicing a new character, Vic, who is Garfield's father. The movie is expected to follow the classic themes of Garfield's adventures and humorous antics, while also introducing new elements and characters to expand on the beloved comic strip's universe. The film aims to appeal to both long-time fans of the comic strip and new audiences.",
    genre: "comedy",
    rating: "U/A",
  },
  {
    src: image2,
    title: "Kingdom of the Planet of the Apes",
    id: 2,
    desc: "'Kingdom of the Planet of the Apes' is a science fiction action film recently released in May 2024 (the information you provided earlier). It serves as a standalone sequel to 'War for the Planet of the Apes' (2017), making it the tenth film and fourth installment in the overall 'Planet of the Apes' reboot franchise.             The cast features Owen Teague in the lead role as Noa, alongside Freya Allan and established actors like Kevin Durand, Peter Macon, and William H. Macy.",

    genre: "action",
    rating: "R",
  },
  {
    src: image3,
    title: "Srikanth",
    id: 3,
    desc: "'Srikanth' is a biographical film based on the life of Srikanth Bolla, a visually-impaired industrialist and founder of Bollant Industries. Released on May 10, 2024, it stars Rajkummar Rao in the titular role. The movie chronicles Srikanth's journey, showcasing his struggles and triumphs despite his disability. Jyothika portrays his guardian, while Alaya F and Sharad Kelkar play supporting roles.",
    genre: "Autobiography",
    rating: "U",
  },
  {
    src: image4,
    title: "Furiosa: A Mad Max saga",
    id: 4,
    desc: "Furiosa: A Mad Max Saga, a prequel to the action-packed Mad Max: Fury Road (2015), recently hit theaters in May 2024.  This film dives into the backstory of the iconic character Imperator Furiosa, played by Anya Taylor-Joy taking over from Charlize Theron.  The high-octane adventure follows a younger Furiosa as she's snatched from her home and falls into the hands of a ruthless warlord.  Her fight for survival and eventual quest to return home fuels the thrilling narrative.  Alongside Anya Taylor-Joy, Chris Hemsworth portrays a mysterious new character whose role in Furiosa's journey is yet to be fully revealed.",
    genre: "action",
    rating: "A",
  },
]);
</script>

<template>
  <v-app>
    <v-toolbar density="default">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn to="/"> EBS </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'about' }">
        <v-btn>
          <v-icon icon="mdi-information-outline" size="large"></v-icon>
        </v-btn>
      </router-link>

      <v-btn @click="changeTheme">
        <v-icon
          :icon="ctheme ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        ></v-icon>
      </v-btn>

      <v-btn
        :variant="ctheme ? 'elevated' : 'outlined'"
        color="red"
        size="small"
        class="mx-2"
        to="/register"
      >
        Register
      </v-btn>

      <router-link :to="{ name: 'login' }">
        <v-btn
          :variant="ctheme ? 'elevated' : 'outlined'"
          color="red"
          size="small"
          class="mx-2"
        >
          Login
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-main>
      <RouterView :Movies="Movies" />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
