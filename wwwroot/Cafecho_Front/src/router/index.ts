import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {ref} from "vue";

const title = ref();

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,

            children: [
                {
                    path: '',
                    name: 'Index',
                    meta: {
                        title: title,
                    },
                    component: () => import('../components/home/Index.vue')
                },
            ]
        },
        {
            path: '/Article/:aid',
            name: 'Article',
            meta: {
                title: title,
            },
            component: () => import("@/components/article/Article.vue")
        },
    ]
})

export default router

