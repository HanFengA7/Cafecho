import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Admin from "../views/AdminView.vue";
import Index from "@/components/admin/CafechoAdminIndex.vue";
import ArticleAdd from "@/components/article/CA_ArticleAdd.vue";
import ArticleList from "@/components/article/CA_ArticleList.vue";
import CategoryAdd from "@/components/category/CA_CategoryAdd.vue";
import CategoryList from "@/components/category/CA_CategoryList.vue";
import UserAdd from "@/components/user/CA_UserAdd.vue";
import UserList from "@/components/user/CA_UserList.vue";
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
            children: [
                {
                    path: "Index",
                    component: Index,
                    name: "Index",
                    meta: {
                        title: "Cafecho 后台管理页面",
                    },
                },
                {
                    path: "ArticleAdd",
                    component: ArticleAdd,
                    meta: {
                        title: "Cafecho - 编写文章",
                    },
                },
                {
                    path: "ArticleList",
                    component: ArticleList,
                    meta: {
                        title: "Cafecho - 文章列表",
                    },
                },
                {
                    path: "CategoryAdd",
                    component: CategoryAdd,
                    name: "CategoryAdd",
                    meta: {
                        title: "Cafecho - 添加分类",
                    },
                },
                {
                    path: "CategoryList",
                    component: CategoryList,
                    meta: {
                        title: "Cafecho - 分类列表",
                    },
                },
                {
                    path: "UserAdd",
                    component: UserAdd,
                    meta: {
                        title: "Cafecho - 新增用户",
                    },
                },
                {
                    path: "UserList",
                    component: UserList,
                    meta: {
                        title: "Cafecho - 用户列表",
                    },
                },
            ],
        },
    ],
});
router.beforeEach((to, from, next) => {
    //model 1
    //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {
        //判断是否有标题
        document.title = to.meta.title;
    }
    //model 2
    const token = window.sessionStorage.getItem("token");
    if (to.path === "/login" && token) {
        return next("/admin/Index");
    }
    if (to.path === "/admin" && !token) {
        return next("/login");
    }
    if (to.path === "/admin" || (to.path === "/admin/" && token)) {
        return next("/admin/Index");
    }
    return next();
});
export default router;
