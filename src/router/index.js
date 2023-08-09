import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/assignment",
      component: () => import("@/views/AssignmentView.vue"),
    },
    {
      path: "/admin",
      component: () => import("@/views/AdminView.vue")
    }
  ],
});

export default router;
