import Status from '@/models/Status';

export default {
  isStartingStatus: (state) => state.app.status === Status.STARTING,
  isHelpStatus: (state) => state.app.status === Status.HELP,
  isEndedStatus: (state) => state.app.status === Status.ENDED,
  isPlayingStatus: (state) => state.app.status === Status.PLAYING,
  isPausedStatus: (state) => state.app.status === Status.PAUSED,
  isResumedStatus: (state) => state.app.status === Status.RESUMED,
  isNoneStatus: (state) => state.app.status === Status.NONE,
  isDifficultyStatus: (state) => state.app.status === Status.DIFFICULTY,
  getDifficulty: (state) => state.app.player.difficulty,
  getScore: (state) => state.app.player.score,
  getTime: (state) => state.app.player.time,
  getPlayer: (state) => state.app.player,
  getApp: (state) => state.app,
  getStatistics: (state) => state.app.player.statistics,
};
