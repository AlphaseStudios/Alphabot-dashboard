import feathersClient from '@/feathers-client';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/dashboard/pick',
    name: 'dashboard pick',
    component: () => import('@/views/dashboard/ServerPicker.vue'),
  },
  {
    path: '/dashboard/:serverId',
    name: 'dashboard overview',
    props: true,
    component: () => import('@/views/dashboard/Overview.vue'),
  },
  {
    path: '/dashboard/:serverId/:category/:index',
    name: 'dashboard category',
    props: true,
    component: () => import('@/views/dashboard/Overview.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Account.vue'),
  },
  {
    path: '/oauth/perform',
    name: 'oauth perform',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log('[Router]', to, from);

  // Authentication
  if (!feathersClient.authentication.authenticated) {
    await feathersClient.authenticate().then((user) => {
      console.log(user);
    }).catch((err) => {
      console.log('[Auth] Not authenticated. Prompting login...');
      if (!err.data?.reason && (to.name !== 'oauth perform' || to.path !== '/oauth/perform')) window.location.replace('/oauth/perform');
    });
  }
  next();
});

export default router;
