import NumOfActiveApps from '@/modules/numOfActiveApps/vue/NumOfActiveApps.vue';

export default [
  {
    path: '/num-of-active-apps',
    name: 'How many birds?',
    meta: {
      description: 'This fun concentration game, suitable for all ages, improves visual attention, counting skills.',
      help: 'Find number of the birds.<br>Counting in groups will make the solution easier.',
      difficulty: {
        easy: '1 to 4 birds',
        medium: '4 to 7 birds',
        hard: '7 to 10 birds',
      },
    },
    component: NumOfActiveApps,
    children: [],
    permissions: ['view'],
  },
];
