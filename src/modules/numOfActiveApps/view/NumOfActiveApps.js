import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

import { Plugins } from '@capacitor/core';
import 'num-of-active-apps-plugin';

const { NumOfActiveAppsPlugin } = Plugins;

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
    this.isModuleRunning = Module.isNumOfActiveAppsRunning;
    this.btnText = this.getBtnText();
  }

  onBtnClick() {
    Module.isNumOfActiveAppsRunning = !Module.isNumOfActiveAppsRunning;
    this.isModuleRunning = Module.isNumOfActiveAppsRunning;
    this.btnText = this.getBtnText();
    this.getNumOfActiveApps();
  }

  getIsModuleRunning() {
    return this.isModuleRunning;
  }

  getBtnText() {
    return this.isModuleRunning === false ? 'Start Module' : 'Stop Module';
  }

  // eslint-disable-next-line class-methods-use-this
  async getNumOfActiveApps() {
    let arr = [];
    arr = (await NumOfActiveAppsPlugin.getNumOfActiveApps()).value;

    console.log(`packageName= ${arr[0].packageName}`);
    console.log(`firstTimeStamp= ${arr[0].firstTimeStamp}`);
    console.log(`lastTimeForegroundServiceUsed= ${arr[0].lastTimeForegroundServiceUsed}`);
    console.log(`lastTimeStamp= ${arr[0].lastTimeStamp}`);
    console.log(`lastTimeUsed= ${arr[0].lastTimeUsed}`);
    console.log(`lastTimeVisible= ${arr[0].lastTimeVisible}`);
    console.log(`totalTimeForegroundServiceUsed= ${arr[0].totalTimeForegroundServiceUsed}`);
    console.log(`totalTimeInForeground= ${arr[0].totalTimeInForeground}`);
    console.log(`totalTimeVisible= ${arr[0].totalTimeVisible}`);

    this.totalTimeVisible = 5;
  }

  totalTimeVisible = 0;
}

export default NumOfActiveApps;
