<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, onMounted,computed, watch, watchEffect } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import {handleLogout} from "./auth.js"


const ctheme = ref(false);
const theme = useTheme();
const isLoggedIn = ref(false);


const checkAuth = () => {

const  atoken= localStorage.getItem('accessToken');
const rtoken=localStorage.getItem('refreshToken');
  isLoggedIn.value = !!atoken;
};

onMounted(()=>{
  checkAuth();
})

const loggedInStatus= computed(()=>isLoggedIn.value
);



const changeTheme = () => {
  ctheme.value = !ctheme.value;
  theme.global.name.value = ctheme.value ? "dark" : "light";
};


</script>

<template>
  <v-app>
    <v-toolbar density="default">
      <v-toolbar-title>
          <v-btn :to="{path:'/'}" variant="plain" :ripple="false"> 75<sub>mm</sub> </v-btn>

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
      <router-link :to="{ name: 'register' }">
        <v-btn
          v-if="!loggedInStatus"
          :variant="ctheme ? 'elevated' : 'outlined'"
          color="red"
          size="small"
          class="mx-2"
        >
          Register
        </v-btn>
      </router-link>

      <router-link v-if="!loggedInStatus" :to="{ name: 'login' }">
        <v-btn
          :variant="ctheme ? 'elevated' : 'outlined'"
          color="red"
          size="small"
          class="mx-2"
        >
          Login
        </v-btn>
      </router-link>
      <!-- <router-link > -->
        <v-btn v-if="loggedInStatus"
          @click="handleLogout"
          :variant="ctheme ? 'elevated' : 'outlined'"
          color="red"
          size="small"
          class="mx-2"
        >
          LogOut
        </v-btn>
      <!-- </router-link> -->
    </v-toolbar>
    <v-main>
      <RouterView />
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
