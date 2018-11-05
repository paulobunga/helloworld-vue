import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import { debug } from '../common/logger';
import { AuthService } from '../Auth/Auth.service';

import modules from './state';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer({
        route, processing, navigationDrawerVisible, detailsDrawerVisible, ...state
      }) {
        return state;
      },
    }),
  ],

  modules,

  state: {
    processing: false,
    navigationDrawerVisible: false,
    detailsDrawerVisible: false,
    // authenticated: false,
    // user: null,
  },

  mutations: {
    processing: (state, value = false) => {
      state.processing = value;
    },

    navigationDrawerVisible: (state, value = false) => {
      state.navigationDrawerVisible = value;
    },

    detailsDrawerVisible: (state, value = false) => {
      state.detailsDrawerVisible = value;
    },

    // resetDrawers: (state) => {
    //   state.navigationDrawerVisible = false;
    //   state.detailsDrawerVisible = false;
    // },

    // authenticated: (state, value = false) => {
    //   state.authenticated = value;
    // },

    // user: (state, value = null) => {
    //   state.user = value;
    // },
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

    // 'auth.login': (context, { username, password }) => {
    //   context.dispatch('processing.start');
    //   return AuthService.login(username, password)
    //     .then(({ user }) => {
    //       context.commit('user', user);
    //       context.commit('authenticated', true);
    //       return user;
    //     })
    //     .finally(() => context.dispatch('processing.done'));
    // },

    // 'auth.signup': (context, { name, email, password }) => {
    //   context.dispatch('processing.start');
    //   return AuthService.signup(name, email, password)
    //     .then(({ user }) => {
    //       context.commit('user', user);
    //       context.commit('authenticated', true);
    //       return user;
    //     })
    //     .finally(() => context.dispatch('processing.done'));
    // },

    // 'auth.initiatePasswordReset': (context, { email }) => {
    //   context.dispatch('processing.start');
    //   return AuthService.initiatePasswordReset(email)
    //     .then(() => {
    //       context.commit('authenticated', false);
    //     })
    //     .finally(() => context.dispatch('processing.done'));
    // },

    // 'auth.logout': (context) => {
    //   context.dispatch('processing.start');
    //   return AuthService.logout()
    //     .then(() => {
    //       context.commit('user');
    //       context.commit('authenticated');
    //       context.commit('resetDrawers');
    //     })
    //     .finally(() => context.dispatch('processing.done'));
    // },
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
  },
});

export default store;
