import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

// import router from '~/router';

import { debug } from '~/common/logger';
import { AuthService } from '../common/Auth.service';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer({
        route, processing, navigationDrawerVisible, detailsDrawerVisible, ...state
      }) {
        console.log('reducer', state);
        return state;
      },
    }),
  ],

  state: {
    processing: false,
    navigationDrawerVisible: false,
    detailsDrawerVisible: false,
    authenticated: false,
    user: null,
  },

  mutations: {
    processing: (state, value = false) => {
      state.processing = value;
    },

    navigationDrawerVisible(state, value = false) {
      state.navigationDrawerVisible = value;
    },

    detailsDrawerVisible: (state, value = false) => {
      state.detailsDrawerVisible = value;
    },

    authenticated: (state, value = false) => {
      state.authenticated = value;
    },

    user: (state, value = null) => {
      state.user = value;
    },
  },

  actions: {
    'processing.start': (context) => {
      context.commit('processing', true);
    },

    'processing.done': (context) => {
      context.commit('processing');
    },

    'NavigationDrawer.show': (context) => {
      debug('NavigationDrawer.show', context);
      context.commit('navigationDrawerVisible', true);
    },

    'NavigationDrawer.hide': (context) => {
      debug('NavigationDrawer.show', context);
      context.commit('navigationDrawerVisible');
    },

    'DetailsDrawer.show': (context) => {
      debug('DetailsDrawer.show', context);
      context.commit('detailsDrawerVisible', true);
    },

    'DetailsDrawer.hide': (context) => {
      debug('DetailsDrawer.show', context);
      context.commit('detailsDrawerVisible');
    },

    'auth.login': (context, { username, password }) => {
      context.dispatch('processing.start');
      AuthService.login(username, password)
        .then(({ user }) => {
          context.commit('user', user);
          context.commit('authenticated', true);
        })
        .finally(() => context.dispatch('processing.done'));
    },

    'auth.logout': (context) => {
      context.dispatch('processing.start');
      AuthService.logout()
        .then(() => {
          context.commit('user');
          context.commit('authenticated');
        })
        .finally(() => context.dispatch('processing.done'));
    },
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
  },
});

export default store;
