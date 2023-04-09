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
            path: '/admin/',
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
                {path: 'ArticleAdd', component: CA_ArticleAdd, name: 'ArticleAdd'},
                {path: 'ArticleEdit/:aid', component: CA_ArticleEdit, name: 'ArticleEdit'},
                {path: 'ArticleList', component: CA_ArticleList, name: 'ArticleList'},
                {path: 'CategoryAdd', component: CA_CategoryAdd, name: 'CategoryAdd'},
                {path: 'CategoryList', component: CA_CategoryList, name: 'CategoryList'},
                {path: 'UserAdd', component: CA_UserAdd, name: 'UserAdd'},
                {path: 'UserList', component: CA_UserList, name: 'UserList'},
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
        return next("/admin/Index");
    }

    if ((to.path === "/admin" || to.path === "/admin/") && !token) {
        return next("/login");
    }

    if (to.path === "/admin" || (to.path === "/admin/" && token)) {
        return next("/admin/Index");
    }

    return next();
});

export default router
