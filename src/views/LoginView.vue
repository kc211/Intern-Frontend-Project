<script setup>
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
  remember_me: false,
});
const showPassword = ref(false)
const submit = () => {
  alert(JSON.stringify(form.value));
};
</script>


<template>
  <div class="mt-15">

    <v-card elevation="16" class="pa-4 mx-auto " width="350">
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
          
          :type="showPassword ? 'text':'password'"
         :append-inner-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
          @click:appendInner='showPassword=!showPassword'
          ></v-text-field>
          
          <v-checkbox
          v-model="form.remember_me"
          label="Remember Me"
          type="checkbox"
          hide-details
          ></v-checkbox>
          <v-btn class="mt-2" type="submit" block color="red-darken-1">Submit</v-btn>
        </v-form>
      </v-card-item>
    </v-card>
  </div>
</template>