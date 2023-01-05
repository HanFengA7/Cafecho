import {createRouter, createWebHistory} from "vue-router";
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
    //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {
        //判断是否有标题
        document.title = <string>to.meta.title;
    }
    next();
});

export default router;
