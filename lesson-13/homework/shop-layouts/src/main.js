import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MainLayout from "./layouts/MainLayout.vue";
import ClippedLayout from "./layouts/ClippedLayout.vue";

const app = createApp(App);

app.component("MainLayout", MainLayout);
app.component("ClippedLayout", ClippedLayout);
app.use(store);
app.use(router);

app.mount("#app");
