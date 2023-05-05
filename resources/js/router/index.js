import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../components/IndexComponent.vue'),
    },
    {
        path: '/fruits/index',
        name: 'fruit.index',
        component: () => import('../components/Fruit/IndexComponent.vue'),
    },
    {
        path: '/users/register',
        name: 'user.register',
        component: () => import('../components/User/RegisterComponent.vue'),
    },
    {
        path: '/users/login',
        name: 'user.login',
        component: () => import('../components/User/LoginComponent.vue'),
    },
    {
        path: '/personal/',
        name: 'personal.index',
        component: () => import('../components/Personal/IndexComponent.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../components/Fruit/IndexComponent.vue'), 
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem('access_token');
    if (! access_token)
    {
        if (to.name == 'user.login' || to.name == 'user.register')
        {
            return next();
        } else
        {
            return next({name: 'user.login'});
        }
    }

    if ((to.name == 'user.login' || to.name == 'user.register') && access_token)
    {
        return next({name: 'personal.index'});
    }

    next();
});


export default router;
