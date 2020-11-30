import AppsActAndDeactTime from '@/modules/appsActAndDeactTime/vue/AppsActAndDeactTime.vue';

export default [
  {
    path: '/apps-act-and-deact-time',
    name: 'Schulte Table',
    meta: {
      description: 'This is one of the most effective exercises for developing attention, brain, concentration, and speeding up visual search.',
      help: 'You need to search for numbers by silent counting and click on them in ascending order starting from 1.',
      difficulty: {
        easy: '5 x 5 table',
        medium: '7 x 7 table',
        hard: '7 x 7 colored table',
      },
    },
    component: AppsActAndDeactTime,
    children: [],
    permissions: ['view'],
  },
];
