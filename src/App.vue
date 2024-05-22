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
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum dolorum minima enim quo, ducimus dolorem accusantium perspiciatis nostrum eum deleniti, maiores fuga quasi aut laboriosam explicabo sequi. Ipsam, hic!",
    genre:"comedy"
  },
  {
    src: image2,
    title: "Kingdom of the Planet of the Apes",
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum dolorum minima enim quo, ducimus dolorem accusantium perspiciatis nostrum eum deleniti, maiores fuga quasi aut laboriosam explicabo sequi. Ipsam, hic!",
    genre:"action"
  },
  {
    src: image3,
    title: "Srikanth",
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum dolorum minima enim quo, ducimus dolorem accusantium perspiciatis nostrum eum deleniti, maiores fuga quasi aut laboriosam explicabo sequi. Ipsam, hic!",
    genre:"Autobiography"
  },
  {
    src: image4,
    title: "Furiosa: A Mad Max saga",
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum dolorum minima enim quo, ducimus dolorem accusantium perspiciatis nostrum eum deleniti, maiores fuga quasi aut laboriosam explicabo sequi. Ipsam, hic!",
    genre:"action"
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
