import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

@Component({
  name: 'apps-act-and-deact-time',
  mixins: [
    Module,
  ],
})
class AppsActAndDeactTime extends Vue {
  isModuleRunning = null;

  btnText = '';

  created() {
    this.isModuleRunning = Module.isAppsActAndDeactTimeRunning;
    this.btnText = this.getBtnText();
  }

  onBtnClick() {
    Module.isAppsActAndDeactTimeRunning = !Module.isAppsActAndDeactTimeRunning;
    this.isModuleRunning = Module.isAppsActAndDeactTimeRunning;
    this.btnText = this.getBtnText();
  }

  getIsModuleRunning() {
    return this.isModuleRunning;
  }

  getBtnText() {
    return this.isModuleRunning === false ? 'Start Module' : 'Stop Module';
  }
}

export default AppsActAndDeactTime;
