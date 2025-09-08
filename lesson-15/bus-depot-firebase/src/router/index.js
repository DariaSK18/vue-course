import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriversView from "../views/DriversView.vue";
import BusesView from "../views/BusesView.vue";
import AssignmentView from "../views/AssignmentView.vue";
import EditComponent from "@/components/EditComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/edit/:id?",
      name: "edit",
      component: EditComponent,
    },
    {
      path: "/contacts",
      name: "contacts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactsView.vue"),
    },
  ],
});

export default router;
