import login from '../views/first/login.vue'
import content from '../views/first/content.vue'
import _404 from '../views/first/_404.vue'
import log from '../views/second/login/log.vue'
import register from '@/views/second/login/register.vue'
import phoneLog from '../views/second/login/phoneLog.vue'
import Forget from '../views/second/login/Forget.vue'
import employers from '../views/second/content/employers.vue'
import finance from '../views/second/content/finance.vue'
import goods from '../views/second/content/goods.vue'
import homepage from '../views/second/content/homepage.vue'
import materials from '../views/second/content/materials.vue'
import orders from '../views/second/content/orders.vue'


export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: login,
    children: [
      {
        path: 'log',
        name: 'log',
        component: log,
      },
      {
        path: 'register',
        name: 'register',
        component: register,
      },
      {
        path: 'Forget',
        name: 'Forget',
        component: Forget,
      },
      {
        path: 'phoneLog',
        name: 'phoneLog',
        component: phoneLog,
      },
    ],
  },
  {
    path: '/content',
    name: 'content',
    component: content,
    children:[
      {
        path: 'employers',
        name: 'employers',
        component: employers
      },
      {
        path: 'finance',
        name: 'finance',
        component: finance
      },
      {
        path: 'goods',
        name: 'goods',
        component: goods
      },
      {
        path: 'homepage',
        name: 'homepage',
        component: homepage
      },
      {
        path: 'materials',
        name: 'materials',
        component: materials
      },
      {
        path: 'orders',
        name: 'orders',
        component: orders
      },
    ]
  },
  {
    path: '/_404',
    name: '_404',
    component: _404,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/_404',
  },
  {
    path: '',
    redirect: '/login/log',
  }
]
