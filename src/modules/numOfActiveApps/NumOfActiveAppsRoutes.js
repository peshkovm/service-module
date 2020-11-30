import NumOfActiveApps from '@/modules/numOfActiveApps/vue/NumOfActiveApps.vue';

export default [
  {
    path: '/num-of-active-apps',
    name: 'Number of active apps',
    meta: {
      description: 'Manage data about number of active apps',
    },
    component: NumOfActiveApps,
    children: [],
    permissions: ['view'],
  },
];
