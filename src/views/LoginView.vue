<script setup>
import { ref } from "vue";
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";
const form = ref({
  email: "",
  password: "",
  remember_me: false,
});

const route= useRoute();
const router= useRouter();

const showPassword = ref(false);
const submit = () => {
  const {email,password} = form.value;
  axios.post('http://localhost:8081/login',{email,password})
  .then(res=>
  {
    //res.data is the token
    const token= res.data;
    localStorage.setItem('jwt',token);
     // Check if there is a redirect query parameter
     const redirectTo = route.query.redirect || '/';
      router.push(redirectTo);
})
  .catch(err=>console.log(err));
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card elevation="16" class="pa-4 mx-auto" width="350">
          <v-card-title>Login Here</v-card-title>
          <v-card-item>
            <v-form fast-fail @submit.prevent="submit">
              <v-text-field
                v-model="form.email"
                label="email"
                variant="solo"
                type="email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                label="password"
                variant="solo"
                prepend-inner-icon="mdi-key"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:appendInner="showPassword = !showPassword"
              ></v-text-field>

              <v-checkbox
                v-model="form.remember_me"
                label="Remember Me"
                type="checkbox"
                hide-details
              ></v-checkbox>
              <v-btn class="mt-2" type="submit" block color="red-darken-1"
                >Submit</v-btn
              >
            </v-form>
          </v-card-item>
        </v-card>
        <!-- </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>
