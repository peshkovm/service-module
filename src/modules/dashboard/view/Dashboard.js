import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'dashboard',
  mixins: [
    Module,
  ],
})
class Dashboard extends Vue {
  // eslint-disable-next-line class-methods-use-this
  created() {
  }
}

export default Dashboard;
