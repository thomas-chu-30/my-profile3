import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue")
    },
    {
      path: "/experience",
      name: "experience",
      component: () => import("../views/Experience/Experience.vue"),
      children: [
        { path: "/", component: () => import("../views/Experience/ExperienceList.vue") },
        { path: "education", component: () => import("../views/Experience/ExperienceEducation.vue") },
        { path: "LED", component: () => import("../views/Experience/ExperienceLED.vue") },
        { path: "coding", component: () => import("../views/Experience/ExperienceCoding.vue") }
      ]
    },
    {
      path: "/program",
      name: "program",
      component: () => import("../views/ProgramAbility.vue")
    }
  ]
});

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   {
//     path: "/profile",
//     name: "profile",
//     component: () => import("../views/Profile.vue")
//   },
//   {
//     path: "/experience",
//     name: "experience",
//     component: () => import("../views/Experience/Experience.vue"),
//     children: [
//       { path: "/", component: () => import("../views/Experience/ExperienceList.vue") },
//       { path: "education", component: () => import("../views/Experience/ExperienceEducation.vue") },
//       { path: "LED", component: () => import("../views/Experience/ExperienceLED.vue") },
//       { path: "coding", component: () => import("../views/Experience/ExperienceCoding.vue") }
//     ]
//   },
//   {
//     path: "/program",
//     name: "program",
//     component: () => import("../views/ProgramAbility.vue")
//   }
// ];

// const router = new VueRouter({
//   routes
// });

// export default router;
