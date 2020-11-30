import AppsActAndDeactTime from '@/modules/appsActAndDeactTime/vue/AppsActAndDeactTime.vue';

export default [
  {
    path: '/apps-act-and-deact-time',
    name: 'Act and Deact time of apps',
    meta: {
      description: 'Manage data about activation and deactivation time of apps',
    },
    component: AppsActAndDeactTime,
    children: [],
    permissions: ['view'],
  },
];
