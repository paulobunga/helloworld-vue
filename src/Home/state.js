import { AuthService } from '../Auth/Auth.service';

import { API_ENDPOINT } from '../common/config';

import * as FetchHelper from '../common/fetch.helper';

import * as Activity from '../Shared/Activity';

/* eslint no-param-reassign: ["error", { "props": false }] */

const MODULE = 'Home';

const state = {
  namespaced: true,

  state: {
    task: null,
  },

  mutations: {
    task: (state, value = null) => {
      state.task = value;
    },
  },

  actions: {
    'task.fetch': (context) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/task`, {
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => {
          const { data } = result;
          context.commit('task', data);
          return data;
        })
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'task.create': (context, task) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/ask/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.task)
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'task.edit': (context, task) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/task/${task.id}/edit`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.task)
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'task.remove': (context, taskId) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/task/${taskId}/delete`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.task)
        .finally(() => Activity.done(MODULE, 'operation'));
    },
  },

  getters: {},
};

export default state;
