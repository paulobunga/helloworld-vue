import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import { debug } from '../common/logger';

import modules from './state';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer({
        route, navigationDrawerVisible, detailsDrawerVisible, ...state
      }) {
        return state;
      },
    }),
  ],

  modules,

  state: {
    navigationDrawerVisible: false,
    detailsDrawerVisible: false,
  },

  mutations: {
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
  },

  actions: {
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
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
  },
});

export default store;
