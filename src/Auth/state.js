import { AuthService } from './Auth.service';

/* eslint no-param-reassign: ["error", { "props": false }] */

const state = {
  state: {
    authenticated: false,
    user: null,
  },

  mutations: {
    authenticated: (state, value = false) => {
      state.authenticated = value;
    },

    user: (state, value = null) => {
      state.user = value;
    },
  },

  actions: {
    'auth.login': (context, { username, password }) => {
      context.dispatch('processing.start');
      return AuthService.login(username, password)
        .then(({ user }) => {
          context.commit('user', user);
          context.commit('authenticated', true);
          return user;
        })
        .finally(() => context.dispatch('processing.done'));
    },

    'auth.signup': (context, { name, email, password }) => {
      context.dispatch('processing.start');
      return AuthService.signup(name, email, password)
        .then(({ user }) => {
          context.commit('user', user);
          context.commit('authenticated', true);
          return user;
        })
        .finally(() => context.dispatch('processing.done'));
    },

    'auth.initiatePasswordReset': (context, { email }) => {
      context.dispatch('processing.start');
      return AuthService.initiatePasswordReset(email)
        .then(() => {
          context.commit('authenticated', false);
        })
        .finally(() => context.dispatch('processing.done'));
    },

    'auth.logout': (context) => {
      context.dispatch('processing.start');
      return AuthService.logout()
        .then(() => {
          context.commit('user');
          context.commit('authenticated');
          context.commit('resetDrawers');
        })
        .finally(() => context.dispatch('processing.done'));
    },
  },

  getters: {},
};

export default state;
