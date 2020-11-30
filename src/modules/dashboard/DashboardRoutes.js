import Dashboard from '@/modules/dashboard/vue/Dashboard.vue';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [],
    permissions: ['view'],
  },
];
