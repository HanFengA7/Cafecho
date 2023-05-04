import { createRouter, createWebHistory } from "vue-router";
import AdminView from "@/views/AdminView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "Login",
            meta: {
                title: "Cafecho Login"
            },
            component: () => import("@/views/LoginView.vue")
        },
        {
            path: '',
            name: 'Admin',
            component: AdminView,
            children: [
                {
                    path: "Index",
                    name: "Index",
                    meta: {
                        title: "CafechoAdmin - 控制台"
                    },
                    component: () => import("@/components/admin/CA_Index.vue")
                },
                {
                    path: "ArticleAdd",
                    name: "ArticleAdd",
                    meta: {
                        title: "CafechoAdmin - 撰写文章"
                    },
                    component: () => import("@/components/article/CA_ArticleAdd.vue")
                },
                {
                    path: "ArticleEdit/:aid",
                    name: "ArticleEdit",
                    meta: {
                        title: "CafechoAdmin - 编辑文章"
                    },
                    component: () => import("@/components/article/CA_EditArticle.vue")
                },
                {
                    path: "ArticleList",
                    name: "ArticleList",
                    meta: {
                        title: "CafechoAdmin - 文章列表"
                    },
                    component: () => import("@/components/article/CA_ArticleList.vue")
                },
                {
                    path: "CategoryAdd",
                    name: "CategoryAdd",
                    meta: {
                        title: "CafechoAdmin - 添加分类"
                    },
                    component: () => import("@/components/category/CA_CategoryAdd.vue")
                },
                {
                    path: "CategoryList",
                    name: "CategoryList",
                    meta: {
                        title: "CafechoAdmin - 分类列表"
                    },
                    component: () => import("@/components/category/CA_CategoryList.vue")
                },
                {
                    path: "UserAdd",
                    name: "UserAdd",
                    meta: {
                        title: "CafechoAdmin - 添加用户"
                    },
                    component: () => import("@/components/user/CA_UserAdd.vue")
                },
                {
                    path: "UserList",
                    name: "UserList",
                    meta: {
                        title: "CafechoAdmin - 用户列表"
                    },
                    component: () => import("@/components/user/CA_UserList.vue")
                },
                {
                    path: "SiteInfoEdit",
                    name: "SiteInfoEdit",
                    meta: {
                        title: "CafechoAdmin - 网站设置"
                    },
                    component: () => import("@/components/setup/CA_SiteInfoEdit.vue")
                }
            ],
        }
    ]
})


// 导航守卫
router.beforeEach((to, from, next) => {
    //model 1
    //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {
        //判断是否有标题
        document.title = <string>to.meta.title;
    }

    //model 2
    const token = window.sessionStorage.getItem("token");
    if ((to.path === "/login" || to.path === "/login/") && token) {
        return next("/Index");
    }

    if (to.path === "" || to.path === "/" && token) {
        return next("/Index");
    }

    if (!token && (to.path != "/login")) {
        return next("/login");
    }

    return next();
});

export default router
