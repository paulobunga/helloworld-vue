/* eslint no-param-reassign: ["error", { "props": false }] */

const state = {
  namespaced: true,

  state: {
    processingByOperation: {
      default: false,
    },
    processing: false,
  },

  mutations: {
    processing: (state, { operation }) => {
      state.processingByOperation = {
        ...state.processingByOperation,
        [operation]: true,
      };
      state.processing = Object.values(state.processingByOperation).reduce((acc, v) => acc || v, false);
    },
    done: (state, { operation }) => {
      state.processingByOperation = {
        ...state.processingByOperation,
        [operation]: false,
      };
      state.processing = Object.values(state.processingByOperation).reduce((acc, v) => acc || v, false);
    },
  },

  actions: {
    processing: (context, operation) => {
      context.commit('processing', { operation });
    },
    done: (context, operation) => {
      context.commit('done', { operation });
    },
  },

  getters: {},
};

export default state;
