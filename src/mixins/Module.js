import { mapGetters, mapMutations } from 'vuex';
import { Component } from 'vue-property-decorator';

import {
  UPDATE_APP_STATUS,
  UPDATE_APP_DIFFICULTY,
  UPDATE_APP_SCORE,
  UPDATE_APP_TIME,
  UPDATE_APP_DEFAULT_TIME,

  UPDATE_STATISTICS_COUNT_OF_CORRECT_ANSWERS,
  UPDATE_STATISTICS_COUNT_OF_TESTS,
  UPDATE_STATISTICS_DIFFICULTY,
  UPDATE_STATISTICS_END_GAME_DATE_TIME,
  UPDATE_STATISTICS_SOLVING_TIME,
} from '@/modules/app/store/MutationTypes';
import Status from '@/models/Status';

@Component({
  name: 'module-mixin',
  computed: {
    ...mapGetters({
      getTime: 'app/getTime',
      getApp: 'app/getApp',
      getPlayer: 'app/getPlayer',
      getScore: 'app/getScore',
      getDifficulty: 'app/getDifficulty',
      getStatistics: 'app/getStatistics',
      isStartingStatus: 'app/isStartingStatus',
      isPlayingStatus: 'app/isPlayingStatus',
      isEndedStatus: 'app/isEndedStatus',
      isHelpStatus: 'app/isHelpStatus',
      isPausedStatus: 'app/isPausedStatus',
      isResumedStatus: 'app/isResumedStatus',
      isNoneStatus: 'app/isNoneStatus',
      isDifficultyStatus: 'app/isDifficultyStatus',
    }),
  },
  methods: {
    ...mapMutations('app', {
      updateAppStatus: UPDATE_APP_STATUS,
      updateAppDifficulty: UPDATE_APP_DIFFICULTY,
      updateAppScore: UPDATE_APP_SCORE,
      updateAppTime: UPDATE_APP_TIME,
      updateAppDefaultTime: UPDATE_APP_DEFAULT_TIME,

      updateStatisticsCountOfCorrectAnswers: UPDATE_STATISTICS_COUNT_OF_CORRECT_ANSWERS,
      updateStatisticsCountOfTests: UPDATE_STATISTICS_COUNT_OF_TESTS,
      updateStatisticsDifficulty: UPDATE_STATISTICS_DIFFICULTY,
      updateStatisticsEndGameDateTime: UPDATE_STATISTICS_END_GAME_DATE_TIME,
      updateStatisticsSolvingTime: UPDATE_STATISTICS_SOLVING_TIME,
    }),
  },
})
class Module {
  startGame() {
    this.updateAppStatus(Status.DIFFICULTY);
  }

  startDashboard() {
    this.updateAppStatus(Status.NONE);
  }

  static init = null;
}

export default Module;
