import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'num-of-active-apps',
  mixins: [
    Module,
  ],
})

class NumOfActiveApps extends Vue {
  isModuleRunning = null;

  btnText = '';

  created() {
    Module.init = () => {
      this.isModuleRunning = Module.isNumOfActiveAppsRunning;
      this.btnText = this.getBtnText();
      this.updateAppTime(55555);
    };
    this.startGame();
  }

  onBtnClick() {
    Module.isNumOfActiveAppsRunning = !Module.isNumOfActiveAppsRunning;
    this.isModuleRunning = Module.isNumOfActiveAppsRunning;
    this.btnText = this.getBtnText();
  }

  getIsModuleRunning() {
    return this.isModuleRunning;
  }

  getBtnText() {
    return this.isModuleRunning === false ? 'Start Module' : 'Stop Module';
  }
}

export default NumOfActiveApps;
