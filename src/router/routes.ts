import login from '../views/first/login.vue';
import content from '../views/first/content.vue';
import _404 from '../views/first/_404.vue';
import log from '../views/second/login/log.vue';
import register from '../views/second/login/register.vue';
import phoneLog from '../views/second/login/phoneLog.vue';
import Forget from '../views/second/login/Forget.vue';
export const constantRoute = [
    {
        path: '/login',
        name: 'login',
        component: login,
        children: [
            {
                path: 'log',
                name: 'log',
                component: log
            },
            {
                path: 'register',
                name: 'register',
                component: register
            },

            {
                path: '/Forget',
                name: 'Forget',
                component: Forget
            },
            {
                path: '/phoneLog',
                name: 'phoneLog',
                component: phoneLog
            },
        ]
    },

    {
        path: '/content',
        name: 'content',
        component: content
    },
    {
        path: '/_404',
        name: '_404',
        component: _404
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/_404'
    },
    {
        path: '',
        redirect: '/login/log'
    },

]