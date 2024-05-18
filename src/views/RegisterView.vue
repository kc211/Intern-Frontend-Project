<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  Phno: "",
});

const showPassword = ref(false);
const showCPassword = ref(false);
const submit = () => {
  alert(JSON.stringify(form.value));
};
</script>


<template>
  <v-container>
    <v-row
    justify="center"
    >
      <v-col
      
      cols="4"
      
      >
        <!-- <div class="my-15"> -->

        <v-card elevation="16" class="pa-4 mx-auto" width="450">
          <v-card-title>Register Here</v-card-title>
          <v-card-item>
            <v-form fast-fail @submit.prevent="submit">
              <v-text-field
                v-model="form.name"
                label="name"
                variant="solo"
                type="text"
                prepend-inner-icon="mdi-mail"
              ></v-text-field>

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

              <v-text-field
                v-model="form.confirm_password"
                label="confirm_password"
                variant="solo"
                prepend-inner-icon="mdi-key"
                :type="showCPassword ? 'text' : 'password'"
                :append-inner-icon="showCPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:appendInner="showCPassword = !showCPassword"
              ></v-text-field>

              <v-text-field
                v-model="form.Phno"
                label="Phone Number"
                variant="solo"
                prepend-inner-icon="mdi-dialpad"
                type="number"
              ></v-text-field>
              <v-btn class="mt-2" type="submit" block color="red-darken-1"
                >Create Account</v-btn
              >
            </v-form>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>