import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
// Import your components
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(), // Use the history mode
  routes, // Add the routes
});

router.beforeEach((to, from, next) => {
  const store = useStore();
    // alert(store.getters.isLoggedIn)
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next({ name: "Login" });
  } else if (to.name == 'Login' && store.getters.isLoggedIn) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
