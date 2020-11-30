import state from './State';
import actions from './Actions';
import mutations from './Mutations';
import getters from './Getters';

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
