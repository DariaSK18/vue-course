import "./assets/main.css";
import store from "./store";
import MainLayout from "@/layouts/MainLayout.vue";
import DriversLayout from "@/layouts/DriversLayout.vue";
import BusesLayout from "@/layouts/BusesLayout.vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("MainLayout", MainLayout);
app.component("DriversLayout", DriversLayout);
app.component("BusesLayout", BusesLayout);

app.mount("#app");
