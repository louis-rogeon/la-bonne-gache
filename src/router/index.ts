import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from "vue-router";
import Home from "../views/Home.vue";
import Producteurs from "../views/Producteurs.vue";
import Presentation from "../views/Presentation.vue";
import Evenements from "../views/Evenements.vue";
import Privatisation from "../views/Privatisation.vue";
import InfosContact from "../views/InfosContact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/concept",
    name: "Presentation",
    component: Presentation
  },
  {
    path: "/nos-producteurs",
    name: "Producteurs",
    component: Producteurs
  },
  {
    path: "/evenements",
    name: "Evenements",
    component: Evenements
  },
  {
    path: "/privatisation",
    name: "Privatisation",
    component: Privatisation
  },
  {
    path: "/infos-contact",
    name: "InfosContact",
    component: InfosContact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
