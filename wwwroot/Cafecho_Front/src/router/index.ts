import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {emitter} from "@/plugin/BusJs/bus";


//console.log(Meta_Title.value)
const router = createRouter(
    {
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
                            title: '',
                        },
                        component: () => import('../components/home/Index.vue')
                    },
                    {
                        path: '/About',
                        name: 'About',
                        meta: {
                            title: '关于',
                        },
                        component: () => import("@/components/home/About.vue")
                    },
                ]
        },
        {
            path: '/Article/:aid',
            name: 'Article',
            meta: {
                title: '',
            },
            component: () => import("@/components/article/Article.vue")
        },
        ]
    })


router.beforeEach(async (to, from, next) => {
    //model 1
    //beforeEach是router的钩子函数，在进入路由前执行
    emitter.on('getMetaTitle', (v: any) => {
        if (to.meta.title == '') {
            document.title = <string>v.value;
            console.log(v.value)
        } else {
            document.title = <string>to.meta.title;
        }
    })

    //判断是否有标题

    next();
});

export default router

