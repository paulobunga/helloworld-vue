import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// import router from '~/router';

const debug = require('~/common/debug').create('~/store'); // eslint-disable-line global-require

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({
  // plugins: [createPersistedState()],

  state: {
    loading: false,
    navigationDrawer: false,
    detailsDrawer: false,
  },

  mutations: {
    LOADING(state, loading) {
      state.loading = loading;
    },

    NAVIGATION_DRAWER(state, navigationDrawer) {
      state.navigationDrawer = navigationDrawer;
    },

    DETAILS_DRAWER(state, detailsDrawer) {
      state.detailsDrawer = detailsDrawer;
    },
  },

  actions: {
    startLoading(context) {
      context.commit('LOADING', true);
    },

    stopLoading(context) {
      context.commit('LOADING', false);
    },

    showNavigationDrawer(context) {
      debug('showNavigationDrawer', context);
      context.commit('NAVIGATION_DRAWER', true);
    },

    hideNavigationDrawer(context) {
      debug('showNavigationDrawer', context);
      context.commit('NAVIGATION_DRAWER', false);
    },

    showDetailsDrawer(context) {
      debug('showDetailsDrawer', context);
      context.commit('DETAILS_DRAWER', true);
    },

    hideDetailsDrawer(context) {
      debug('showDetailsDrawer', context);
      context.commit('DETAILS_DRAWER', false);
    },
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
  },
});

export default store;
