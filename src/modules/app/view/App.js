import { Component, Vue, Watch } from 'vue-property-decorator';

import AppHeader from '@/modules/app/vue/AppHeader.vue';
import AppBody from '@/modules/app/vue/AppBody.vue';
import AppFooter from '@/modules/app/vue/AppFooter.vue';
import AppNavigation from '@/modules/app/vue/AppNavigation.vue';

import Module from '@/mixins/Module';

import Status from '@/models/Status';
import Difficulty from '@/models/Difficulty';

@Component({
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-body': AppBody,
    'app-footer': AppFooter,
    'app-navigation': AppNavigation,
  },
  mixins: [
    Module,
  ],
})
class App extends Vue {
  @Watch('getTime')
  onChangeTime(time) {
    if (time === 0) {
      this.updateAppStatus(Status.ENDED);
    }
  }

  @Watch('isStartingStatus')
  onChangeStartStatus(newStatus) {
    if (newStatus === true) {
      this.showLoader = true;
      this.initLoader(1000)
        .then(() => {
          this.generalInitGameLogic();
          if (Module.init !== null) {
            Module.init();
          }
          this.updateAppStatus(Status.PLAYING);
          this.showLoader = false;
        });
    }
  }

  @Watch('isPlayingStatus')
  onChangePlayStatus(newStatus) {
    if (newStatus === true) {
      this.startTimer();
    }
  }

  @Watch('isPausedStatus')
  onChangePauseStatus(newStatus) {
    if (newStatus === true) {
      this.stopTimer();
      this.showPauseDialog = true;
    }
  }

  @Watch('isHelpStatus')
  onChangeHelpStatus(newStatus) {
    if (newStatus === true) {
      this.stopTimer();
      this.showHelpDialog = true;
    }
  }

  @Watch('isDifficultyStatus')
  onChangeDifficultyStatus(newStatus) {
    if (newStatus === true) {
      this.showDifficultyDialog = true;
    }
  }

  @Watch('isResumedStatus')
  onChangeResumeStatus(newStatus) {
    if (newStatus === true) {
      this.startTimer();
    }
  }

  @Watch('isEndedStatus')
  onChangeEndStatus(newStatus) {
    if (newStatus === true) {
      this.stopTimer();
      this.showEndDialog = true;
    }
  }

  @Watch('isNoneStatus')
  onChangeNoneStatus(newStatus) {
    if (newStatus === true) {
      this.stopTimer();
    }
  }

  get isDashboard() {
    return this.$route.path === '/dashboard';
  }

  showNavigation = null;

  showEndDialog = false;

  showPauseDialog = false;

  showHelpDialog = false;

  showDifficultyDialog = false;

  showLoader = false;

  timer = null;

  difficulty = null;

  setDifficulty(id) {
    if (id === 'Easy') {
      this.setEasyDifficulty();
    } else if (id === 'Medium') {
      this.setMediumDifficulty();
    } else if (id === 'Hard') {
      this.setHardDifficulty();
    }
  }

  setEasyDifficulty() {
    this.difficulty = Difficulty.EASY;
    console.log('setEasyDifficulty was called');
  }

  setMediumDifficulty() {
    this.difficulty = Difficulty.MEDIUM;
    console.log('setNormalDifficulty was called');
  }

  setHardDifficulty() {
    this.difficulty = Difficulty.HARD;
    console.log('setHardDifficulty was called');
  }

  onClickMenu() {
    this.updateAppStatus(Status.NONE);
    this.showNavigation = true;
  }

  onClickDashboard() {
    this.updateAppStatus(Status.NONE);
    Module.init = null;
    this.$router.push('/dashboard');
  }

  onClickStart() {
    this.updateAppStatus(Status.STARTING);
  }

  onClickDifficulty() {
    this.updateAppStatus(Status.DIFFICULTY);
  }

  onClickPause() {
    this.updateAppStatus(Status.PAUSED);
  }

  onClickResume() {
    this.updateAppStatus(Status.RESUMED);
  }

  onClickHelp() {
    this.updateAppStatus(Status.HELP);
  }

  startTimer() {
    if (this.timer !== null) {
      this.stopTimer();
    }

    console.log('Start timer');

    this.timer = setInterval(() => {
      if (this.getTime > 0) {
        this.updateAppTime(this.getTime - 1);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  generalInitGameLogic() {
    this.updateAppScore(0);
    this.updateAppDefaultTime();
  }

  // eslint-disable-next-line class-methods-use-this
  initLoader(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}

export default App;
