import { createRouter, createWebHistory } from "vue-router";
import Todo from "../views/Todo.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  { path: "/", component: Todo },
  { path: "/about", component: AboutUs },
  { path: "/contact", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
