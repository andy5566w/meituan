import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/header",
      component: () => import("@/components/layout/header/MeituanHeader.vue"),
    },
  ],
});

export default router;
