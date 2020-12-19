import { Component, Vue } from 'vue-property-decorator';

import Module from '@/mixins/Module';

import { Plugins } from '@capacitor/core';
import 'apps-timestamps-plugin';

const { AppsTimestampsPlugin, BackgroundTask } = Plugins;

@Component({
  name: 'apps-act-and-deact-time',
  mixins: [
    Module,
  ],
})
class AppsTimestamps extends Vue {
  isModuleRunning = null;

  lastTimeVisible;

  btnText = '';

  created() {
    this.isModuleRunning = Module.isAppsTimestampsRunning;
    this.btnText = this.getBtnText();
  }

  onBtnClick() {
    Module.isAppsTimestampsRunning = !Module.isAppsTimestampsRunning;
    this.isModuleRunning = Module.isAppsTimestampsRunning;
    this.btnText = this.getBtnText();

    if (this.getIsModuleRunning()) {
      this.getAppsTimestamps()
        .then((appsTimestampsObj) => {
          this.lastTimeVisible = appsTimestampsObj.value;
        });
      this.runInBackground(() => {
        /* your logic */
        const response = this.sendAppsTimestamps();
        console.log('response from server\n');
        console.log(response);
        console.log('Module is working!');
      }, 3000);
    }
  }

  /* отправка данных на сервер */
  sendAppsTimestamps() {
    return fetch('configuration.json')
      .then((response) => response.json())
      .then(({ api }) => this.getAppsTimestamps()
        .then((appsTimestampsObj) => {
          const appsTimestamps = appsTimestampsObj.value;
          for (let i = 0; i < this.lastTimeVisible.length; i += 1) {
            appsTimestamps[i].totalTimeVisible -= this.lastTimeVisible[i].totalTimeVisible;
          }
          // Нужно создать post контроллер с /api/apps
          return fetch(`${api.server}/apps`, {
            method: 'POST',
            body: JSON.stringify(...appsTimestamps.map((appsTimestamp) => ({
              name: appsTimestamp.packageName,
              time: Number(appsTimestamp.totalTimeVisible),
            }))),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json());
        }));
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
  // eslint-disable-next-line class-methods-use-this
  getAppsTimestamps() {
    return AppsTimestampsPlugin.getAppsTimestamps();
  }

  // eslint-disable-next-line class-methods-use-this
  runInBackground(func, ms) {
    const taskId = BackgroundTask.beforeExit(async () => {
      // Example of long task
      const task = () => {
        if (this.getIsModuleRunning()) {
          func();
          setTimeout(task, ms);
        } else {
          console.log('Background task has stopped');
          BackgroundTask.finish({
            taskId,
          });
        }
      };

      setTimeout(task, ms);
    });
  }

  getIsModuleRunning() {
    return this.isModuleRunning;
  }

  getBtnText() {
    return this.isModuleRunning === false ? 'Start Module' : 'Stop Module';
  }
}

export default AppsTimestamps;
