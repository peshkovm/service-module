import AppsTimestamps from '@/modules/appsTimestamps/vue/AppsTimestamps.vue';

export default [
  {
    path: '/apps-timestamps',
    name: 'Apps timestamps',
    meta: {
      description: 'Manage data about apps timestamps',
    },
    component: AppsTimestamps,
    children: [],
    permissions: ['view'],
  },
];
