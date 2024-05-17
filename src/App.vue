<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 
  <v-app>

    <v-toolbar density="default">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn to="/">
          EBS
          </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{name:'about'}">

        <v-btn icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </router-link>

      <v-btn variant="outlined" color="red" size="small" class="mx-2" to="/register">
        Register
        </v-btn>

      <router-link :to="{name:'login'}">

        <v-btn variant="outlined" color="red" size="small" class="mx-2">
          Login
        </v-btn>
      </router-link>
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
