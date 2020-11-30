import {
  UPDATE_APP_STATUS,
  UPDATE_APP_SCORE,
  UPDATE_APP_TIME,
  UPDATE_APP_DEFAULT_TIME,
  UPDATE_APP_DIFFICULTY,

  UPDATE_STATISTICS_COUNT_OF_CORRECT_ANSWERS,
  UPDATE_STATISTICS_COUNT_OF_TESTS,
  UPDATE_STATISTICS_DIFFICULTY,
  UPDATE_STATISTICS_END_GAME_DATE_TIME,
  UPDATE_STATISTICS_SOLVING_TIME,
} from '@/modules/app/store/MutationTypes';

import Time from '@/models/Time';

export default {
  [UPDATE_APP_STATUS](state, status) {
    state.app.status = status;
  },
  [UPDATE_APP_SCORE](state, score) {
    state.app.player.score = score;
  },
  [UPDATE_APP_TIME](state, time) {
    state.app.player.time = time;
  },
  [UPDATE_APP_DEFAULT_TIME](state) {
    state.app.player.time = Time.DEFAULT;
  },
  [UPDATE_APP_DIFFICULTY](state, difficulty) {
    state.app.player.difficulty = difficulty;
  },

  [UPDATE_STATISTICS_COUNT_OF_CORRECT_ANSWERS](state, countOfCorrectAnswers) {
    state.app.player.statistics.countOfCorrectAnswers = countOfCorrectAnswers;
  },
  [UPDATE_STATISTICS_COUNT_OF_TESTS](state, countOfTests) {
    state.app.player.statistics.countOfTests = countOfTests;
  },
  [UPDATE_STATISTICS_DIFFICULTY](state, difficulty) {
    state.app.player.statistics.difficulty = difficulty;
  },
  [UPDATE_STATISTICS_END_GAME_DATE_TIME](state, endGameDateTime) {
    state.app.player.statistics.endGameDateTime = endGameDateTime;
  },
  [UPDATE_STATISTICS_SOLVING_TIME](state, solvingTime) {
    state.app.player.statistics.solvingTime = solvingTime;
  },
};
