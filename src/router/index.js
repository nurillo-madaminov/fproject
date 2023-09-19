import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/404.vue";

import Page1 from "../views/PageView01.vue";
import Page2 from "../views/PageView02.vue";
import Page3 from "../views/PageView03.vue";

import Result01 from "../views/Results/ResultView01.vue";
import Result02 from "../views/Results/ResultView02.vue";
import Result03 from "../views/Results/ResultView03.vue";
import Result04 from "../views/Results/ResultView04.vue";
import Result05 from "../views/Results/ResultView05.vue";
import Result06 from "../views/Results/ResultView06.vue";
import Result07 from "../views/Results/ResultView07.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/page-1",
    name: "firstPage",
    component: Page1,
  },
  {
    path: "/page-2",
    name: "secondPage",
    component: Page2,
  },
  

  // Reused views

  {
    path: "/page-1/1",
    name: "thirdPage",
    component: Page3,
  },
  {
    path: "/page-1/2",
    name: "fourthPage",
    component: Page3,
  },
  {
    path: "/page-2/1",
    name: "fifthPage",
    component: Page3,
  },
  {
    path: "/page-2/2",
    name: "sixthPage",
    component: Page3,
  },

  // Results
  {
    path: "/page-2/3",
    name: "firstResult",
    component: Result01,
  },
  {
    path: "/page-1/1/1",
    name: "secondResult",
    component: Result02,
  },
  {
    path: "/page-1/1/2",
    name: "thirdResult",
    component: Result03,
  },
  {
    path: "/page-1/2/1",
    name: "fourthResult",
    component: Result04
  },
  {
    path: "/page-1/2/2",
    name: "thirdResult2",
    component: Result03,
  },
  {
    path: "/page-2/1/1",
    name: "fifthResult",
    component: Result05,
  },
  {
    path: "/page-2/1/2",
    name: "sixthResult",
    component: Result06,
  },
  {
    path: "/page-2/2/1",
    name: "sixthResult02",
    component: Result06,
  },
  {
    path: "/page-2/2/2",
    name: "seventhResult",
    component: Result07,
  },
  {
    path: "/:catchAll(.*)",
    name: "something",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
