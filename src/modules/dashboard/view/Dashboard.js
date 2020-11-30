import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'dashboard',
  mixins: [
    Module,
  ],
})
class Dashboard extends Vue {
  created() {
    this.startDashboard();
  }
}

export default Dashboard;
