import feathersClient from '@/feathers-client';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/oauth/perform',
    name: 'oauth perform',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log('[Router]', to, from);

  // Authentication
  if (!feathersClient.authentication.authenticated) {
    feathersClient.authenticate().then((user) => {
      console.log(user);
    }).catch((err) => {
      if (!err.data?.reason) window.location.replace('/oauth/perform');
    });
    next();
  }
});

export default router;
