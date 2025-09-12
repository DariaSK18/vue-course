import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './plugins/i18n'
import MainLayout from '@/layouts/MainLayout.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component('MainLayout', MainLayout)

app.mount('#app')
