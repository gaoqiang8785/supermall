import Vue from "vue"
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// 安装路由
Vue.use(VueRouter)

// 创建路由

const router = new VueRouter({
    routes:[
      {
        path: '',
        redirect: '/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/cart',
        component:Cart
      },
      {
        path:'/profile',
        component:Profile
      },
    ],
    mode:'history'
})

export default router
