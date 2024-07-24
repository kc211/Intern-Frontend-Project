<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import {useAuthStore} from "@/store/AuthStore.js";

const form = ref({
  email: "",
  password: "",
  remember_me: false,
});

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const showPassword = ref(false);
const submit = async () => {
  const { email, password } = form.value;
  const val = await authStore.loginUser(email, password);
  console.log(val)
  if (val) {
    const redirectTo = route.query.redirect || "/";
    try {
      router.push(redirectTo);
    } catch (error) {
      console.log("not able to redirect error :", error);
    }
  }
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
      </v-col>
    </v-row>
  </v-container>
</template>
