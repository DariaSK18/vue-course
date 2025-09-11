import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./plugins/i18n";
import MainLayout from "@/layouts/MainLayout.vue";
import store from "./store";

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(store)

app.component('MainLayout', MainLayout)

app.mount('#app')
