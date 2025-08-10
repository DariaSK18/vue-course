import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProvidersView from "../views/ProvidersView.vue";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    children: [
      {
        path: "edit/:id?",
        name: "edit",
        component: () =>
          import(
            /* webpackChunkName: "edit" */ "../views/EditProductsView.vue"
          ),
      },
    ],
  },
  {
    path: "/providers",
    name: "providers",
    component: ProvidersView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/rules",
    name: "rules",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "rules" */ "../views/RulesView.vue"),
  },
  {
    path: "/:NotFound/(.*)*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
