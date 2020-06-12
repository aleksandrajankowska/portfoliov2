import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProjectFrenzy from "../views/ProjectFrenzy.vue";
import ProjectIndustries from "../views/ProjectIndustries.vue";
import TacoIDawid from "../views/TacoIDawid.vue";
import About from "../views/About.vue";
import Wybory from "../views/Wybory.vue";
import Nova from "../views/Nova.vue";
import Dragon from "../views/Dragon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project-frenzy",
    name: "Project Frenzy",
    component: ProjectFrenzy
  },
  {
    path: "/taco-i-dawid",
    name: "Taco i Dawid",
    component: TacoIDawid
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/wybory-parlamentarne-2019",
    name: "#wybory",
    component: Wybory
  },
  {
    path: "/nova",
    name: "Nova",
    component: Nova
  },
  {
    path: "/dragon-aio",
    name: "Dragon AIO",
    component: Dragon
  },
  {
    path: "/project-industries",
    name: "Project Industries",
    component: ProjectIndustries
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
