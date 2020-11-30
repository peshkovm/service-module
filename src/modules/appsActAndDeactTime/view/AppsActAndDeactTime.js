import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'apps-act-and-deact-time',
  mixins: [
    Module,
  ],
})
class AppsActAndDeactTime extends Vue {
  created() {
    Module.init = () => {
    };
    this.startGame();
  }
}

export default AppsActAndDeactTime;
