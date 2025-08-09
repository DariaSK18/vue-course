import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonsView from "@/views/LessonsView.vue";
import TeachersView from "@/views/TeachersView.vue";
import LoginPage from "@/views/LoginPage.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import store from "@/store/index";
import CourseView from "@/views/CourseView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lessons",
    name: "lessons",
    component: LessonsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/teachers/:id_list*",
    name: "teachers",
    component: TeachersView,
    props: (route) => ({
      lessonsIdsList: Array.isArray(route.params.id_list)
        ? route.params.id_list.map((id) => parseInt(id))
        : [parseInt(route.params.id_list)],
    }),
    meta: {
      requiresAuth: true,
    },
    // children: [
    //   {
    //     path: "course",
    //     name: "course",
    //     component: CourseView,
    //     props: (route) => ({
    //       lessonsIdsList: route.params.lessonsIdsList.map((id) => parseInt(id)),
    //       teachersIdsList: route.params.teachersIdsList.map((id) =>
    //         parseInt(id)
    //       ),
    //     }),
    //   },
    // ],
  },
  {
    path: "/course/:teachers_ids*",
    name: "course",
    component: CourseView,
    props: (route) => ({
      // lessonsIdsList: route.params.lessonsIdsList,
      // .map((id) => parseInt(id)),
      teachersIdsList: route.params.teachers_ids,
      // .map((id) => parseInt(id)),
    }),
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:notFound(.*)*",
    name: "NotFound",
    component: PageNotFound,
    meta: {
      hideMenu: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const isAuthenticated = store.getters.getUserName;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
