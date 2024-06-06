
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
      }
})

// Axios interceptor to add JWT token to headers
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
