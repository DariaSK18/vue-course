import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import busesRouter from "../router/buses/busesRouter";
import driversRouter from "../router/drivers/driversRouter";
import AssignmentView from "../views/AssignmentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...driversRouter,
  ...busesRouter,
  {
    path: "/assignment",
    name: "assignment",
    component: AssignmentView,
  },
  {
    path: "/contacts",
    name: "contacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
