import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetails from '../views/FoodDetails.vue'
import Cart from '../views/Cart.vue'
import Shop from '../views/Shop.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: "Shop",
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: "ForgotPassword",
    },
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: '/FoodDetails/:id',
    name: 'FoodDetails',
    component: FoodDetails,
    meta: {
      title: "FoodDetails",
    },
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: "Cart",
    },
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact Us",
    },
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | SweetTooth`;
  next();
})

export default router
