import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ImagesFinder from "../views/ImagesFinder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/images",
    name: "Images",
    component: ImagesFinder
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
