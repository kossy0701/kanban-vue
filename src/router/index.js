import Vue from "vue";
import VueRouter from "vue-router";
import KbnLoginView from "../components/templates/KbnLoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: KbnLoginView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
