import Vue from 'vue';
import VueRouter from 'vue-router';

import AppView from '@/views/appView/vue/AppView.vue';

import dashboardRoutes from '@/modules/dashboard/DashboardRoutes';
import numOfActiveAppsRoutes from '@/modules/numOfActiveApps/NumOfActiveAppsRoutes';
import appsActAndDeactTimeRoutes from '@/modules/appsActAndDeactTime/AppsActAndDeactTimeRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    component: AppView,
    children: [
      ...dashboardRoutes,
      ...numOfActiveAppsRoutes,
      ...appsActAndDeactTimeRoutes,
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to) => {
  if (to.path === '/login') {
    // eslint-disable-next-line no-useless-return
    return;
  }
});

export default router;
