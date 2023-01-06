import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Admin from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        title: "Cafecho Login",
      },
      component: Login,
    },
    {
      path: "/admin",
      name: "admin",
      meta: {
        title: "admin",
      },
      component: Admin,
    },
  ],
});

router.beforeEach((to, from, next) => {
  //model 1
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = <string>to.meta.title;
  }

  //model 2
  const token = window.sessionStorage.getItem("token");
  if (to.path === "/login" && token) {
    return next("/admin");
  } else {
    return next();
  }
  if (to.path === "/admin" && !token) {
    return next("/login");
  } else {
    return next();
  }
});

export default router;
