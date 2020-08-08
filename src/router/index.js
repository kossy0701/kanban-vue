import Vue from "vue";
import VueRouter from "vue-router";
import KbnLoginView from "@/components/templates/KbnLoginView.vue";
import KbnBoardView from "@/components/templates/KbnBoardView.vue";
import KbnTaskDetailModal from "@/components/templates/KbnTaskDetailModal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: KbnBoardView,
    children: [
      {
        path: "tasks/:id",
        component: KbnTaskDetailModal,
        name: "taskDetailModal"
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: KbnLoginView
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
