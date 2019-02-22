/* eslint no-param-reassign: ["error", { "props": false }] */

const state = {
  namespaced: true,

  state: {
    processing: false,
  },

  mutations: {
    processing: (state) => {
      state.processing = true;
    },
    done: (state) => {
      state.processing = false;
    },
  },

  actions: {
    processing: (context) => {
      context.commit('processing');
    },
    done: (context) => {
      context.commit('done');
    },
  },

  getters: {},
};

export default state;
