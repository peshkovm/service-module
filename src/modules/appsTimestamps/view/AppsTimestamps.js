import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

// import { Plugins } from '@capacitor/core';
// import 'apps-timestamps-plugin';
//
// const { AppsTimestampsPlugin, BackgroundTask } = Plugins;

@Component({
  name: 'apps-act-and-deact-time',
  mixins: [
    Module,
  ],
})
class AppsTimestamps extends Vue {
  isModuleRunning = null;

  btnText = '';

  created() {
    this.isModuleRunning = Module.isAppsTimestampsRunning;
    this.btnText = this.getBtnText();
  }

  onBtnClick() {
    Module.isAppsTimestampsRunning = !Module.isAppsTimestampsRunning;
    this.isModuleRunning = Module.isAppsTimestampsRunning;
    this.btnText = this.getBtnText();
  }

  /**
   * Returns array contains timestamp objects, measured in seconds since the epoch,
   * of all apps on smartphone.
   * <p>
   * timestamp object has the following fields:
   * <ul>
   *   <li><code>String packageName</code></li>
   *   <li><code>String firstTimeStamp</code></li>
   *   <li><code>String lastTimeForegroundServiceUsed</code></li>
   *   <li><code>String lastTimeStamp</code></li>
   *   <li><code>String lastTimeUsed</code></li>
   *   <li><code>String lastTimeVisible</code></li>
   *   <li><code>String totalTimeForegroundServiceUsed</code></li>
   *   <li><code>String totalTimeInForeground</code></li>
   *   <li><code>String totalTimeVisible</code></li>
   * </ul>
   * <p>
   * Example of use:
   * <p>
   * <pre>
   * const promise = this.getAppsTimestamps();
   * promise.then((appsTimestampsObj) => {
   *    const appsTimestamps = appsTimestampsObj.value;
   *
   *    appsTimestamps[0].packageName;
   *    appsTimestamps[2].totalTimeVisible;
   * });
   * </pre>
   *
   * @returns {Promise<*>}
   */
  // // eslint-disable-next-line class-methods-use-this
  // getAppsTimestamps() {
  //   return AppsTimestampsPlugin.getAppsTimestamps();
  // }
  //
  // // eslint-disable-next-line class-methods-use-this
  // runInBackground(yourFunc) {
  //   const taskId = BackgroundTask.beforeExit(async () => {
  //     // Example of long task
  //     yourFunc();
  //
  //     // Must call in order to end our task otherwise
  //     // we risk our app being terminated, and possibly
  //     // being labeled as impacting battery life
  //     BackgroundTask.finish({
  //       taskId,
  //     });
  //   });
  // }

  getIsModuleRunning() {
    return this.isModuleRunning;
  }

  getBtnText() {
    return this.isModuleRunning === false ? 'Start Module' : 'Stop Module';
  }
}

export default AppsTimestamps;
