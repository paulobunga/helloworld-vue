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
    authenticated: false,
    user: false,
    processing: false,
    navigationDrawerVisible: false,
    detailsDrawerVisible: false,
  },

  mutations: {
    AUTHENTICATED(state, authenticated = false) {
      state.authenticated = authenticated;
    },

    USER(state, user = null) {
      state.user = user;
    },

    PROCESSING(state, processing = false) {
      state.processing = processing;
    },

    NAVIGATION_DRAWER(state, navigationDrawerVisible) {
      state.navigationDrawerVisible = navigationDrawerVisible;
    },

    DETAILS_DRAWER(state, detailsDrawerVisible) {
      state.detailsDrawerVisible = detailsDrawerVisible;
    },
  },

  actions: {
    login(context) {
      context.commit('AUTHENTICATED', true);
      context.commit('USER', {
        name: 'John Doe',
        email: 'john@example.com',
      });
    },

    logout(context) {
      context.commit('AUTHENTICATED');
      context.commit('USER');
    },

    processing(context) {
      context.commit('PROCESSING', true);
    },

    done(context) {
      context.commit('PROCESSING');
    },

    showNavigationDrawer(context) {
      debug('showNavigationDrawer', context);
      context.commit('NAVIGATION_DRAWER', true);
    },

    hideNavigationDrawer(context) {
      debug('showNavigationDrawer', context);
      context.commit('NAVIGATION_DRAWER', false);
    },

    showDetailsDrawerVisible(context) {
      debug('showDetailsDrawerVisible', context);
      context.commit('DETAILS_DRAWER', true);
    },

    hideDetailsDrawerVisible(context) {
      debug('showDetailsDrawerVisible', context);
      context.commit('DETAILS_DRAWER', false);
    },
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
  },
});

export default store;
