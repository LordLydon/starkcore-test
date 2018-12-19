import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterStatus: -1,
    filterText: '',
  },
  mutations: {
    updateStatusFilter(state, status) {
      state.filterStatus = status;
    },
    updateTextFilter(state, text) {
      state.filterText = text;
    }
  },
  actions: {

  },
});
