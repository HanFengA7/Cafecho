import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import AdminView from "@/views/AdminView.vue";
import CA_Index from "@/components/admin/CA_Index.vue";
import CA_ArticleAdd from "@/components/article/CA_ArticleAdd.vue";
import CA_ArticleEdit from "@/components/article/CA_EditArticle.vue"
import CA_ArticleList from "@/components/article/CA_ArticleList.vue";
import CA_CategoryAdd from "@/components/category/CA_CategoryAdd.vue";
import CA_CategoryList from "@/components/category/CA_CategoryList.vue";
import CA_UserAdd from "@/components/user/CA_UserAdd.vue";
import CA_UserList from "@/components/user/CA_UserList.vue";
import CA_SiteInfoEdit from "@/components/setup/CA_SiteInfoEdit.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            meta: {
                title: "Cafecho Login",
            },
            component: LoginView
        },
        {
            path: '',
            name: 'Admin',
            component: AdminView,
            children: [
                {
                    path: 'Index',
                    component: CA_Index,
                    name: 'Index',
                    meta: {
                        title: "CafechoAdmin - 控制台",
                    },
                },
                {
                    path: 'ArticleAdd', component: CA_ArticleAdd, name: 'ArticleAdd',
                    meta: {
                        title: "CafechoAdmin - 撰写文章",
                    },
                },
                {
                    path: 'ArticleEdit/:aid', component: CA_ArticleEdit, name: 'ArticleEdit',
                    meta: {
                        title: "CafechoAdmin - 编辑文章",
                    },
                },
                {
                    path: 'ArticleList', component: CA_ArticleList, name: 'ArticleList',
                    meta: {
                        title: "CafechoAdmin - 文章列表",
                    },
                },
                {
                    path: 'CategoryAdd', component: CA_CategoryAdd, name: 'CategoryAdd',
                    meta: {
                        title: "CafechoAdmin - 添加分类",
                    },
                },
                {
                    path: 'CategoryList', component: CA_CategoryList, name: 'CategoryList',
                    meta: {
                        title: "CafechoAdmin - 分类列表",
                    },
                },
                {
                    path: 'UserAdd', component: CA_UserAdd, name: 'UserAdd',
                    meta: {
                        title: "CafechoAdmin - 添加用户",
                    },
                },
                {
                    path: 'UserList', component: CA_UserList, name: 'UserList',
                    meta: {
                        title: "CafechoAdmin - 用户列表",
                    },
                },
                {
                    path: 'SiteInfoEdit', component: CA_SiteInfoEdit, name: 'SiteInfoEdit',
                    meta: {
                        title: "CafechoAdmin - 网站设置",
                    },
                },
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
