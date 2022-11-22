import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from '../firebase'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    meta:{requiresAuth: true},
    component: HomeView,
  },
  {
    path: "/payment",
    name: "payment",
    meta:{requiresAuth: true},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PaymentView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next)=>{
  console.log('44 called auth is ', auth)
  const requiresAuth = to.matched.some((record)=> record.meta.requiresAuth)
  let isAuthenticated = false;
  if(localStorage.getItem("userData")) {
    isAuthenticated = true;
  }
  console.log('48 called isAuthenticated ', isAuthenticated)
  if(requiresAuth && !isAuthenticated ){
    next('/login')
  }
  else if(isAuthenticated && to.fullPath == '/login'){
      next('/')
    }
    else if(isAuthenticated && to.fullPath == '/signup'){
      next('/')
    }
    else{
      next()
    }
  
})
