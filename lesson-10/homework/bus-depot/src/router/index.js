import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriversView from "../views/DriversView.vue";
import BusesView from "../views/BusesView.vue";
import AssignmentView from "../views/AssignmentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,
  },
  {
    path: "/buses",
    name: "buses",
    component: BusesView,
  },
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
