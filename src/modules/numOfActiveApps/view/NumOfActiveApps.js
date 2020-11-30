import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'num-of-active-apps',
  mixins: [
    Module,
  ],
})

class NumOfActiveApps extends Vue {
  created() {
    Module.init = () => {
    };
    this.startGame();
  }
}

export default NumOfActiveApps;
