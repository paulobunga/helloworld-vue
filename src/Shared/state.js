/* eslint no-param-reassign: ["error", { "props": false }] */

import * as Logger from '../common/logger';

const state = {
  namespaced: true,

  state: {
    ready: false,
    initialized: false,
  },

  mutations: {
    ready: (state, value = false) => {
      state.ready = value;
    },

    initialized: (state) => {
      state.initialized = true;
    },

    uinitialized: (state) => {
      state.initialized = false;
    },
  },

  actions: {
    ready: (context) => {
      context.commit('ready', true);
    },

    initialize: async (context) => {
      await Promise.all([
        new Promise((resolve) => setTimeout(resolve, 2000)),
        // context.dispatch('Module/operation'),
      ]);

      context.commit('initialized');
    },

    uninitialize: (context) => {
      context.commit('uninitialize');
    },
  },

  getters: {},
};

export default state;
