import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start-page",
      component: () => import("@/views/index.vue"),
    },
  ],
});

export default router;
