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
    path: '/dashboard',
    name: 'dashboard overview',
    component: () => import('../views/dashboard/Overview.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/oauth/perform',
    name: 'oauth perform',
    component: () => import('../views/Login.vue'),
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
    await feathersClient.authenticate().then((user) => {
      console.log(user);
    }).catch((err) => {
      console.error(err);
      if (!err.data?.reason && (to.name !== 'oauth perform' || to.path !== '/oauth/perform')) window.location.replace('/oauth/perform');
    });
  }
  next();
});

export default router;
