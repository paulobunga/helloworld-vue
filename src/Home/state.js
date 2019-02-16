import { AuthService } from '../Auth/Auth.service';

import { API_ENDPOINT } from '../common/config';
import * as FetchHelper from '../common/fetch.helper';

/* eslint no-param-reassign: ["error", { "props": false }] */

const state = {
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
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/task`, {
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
        .finally(() => context.dispatch('processing.done'));
    },

    'task.create': (context, task) => {
      context.dispatch('processing.start');

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
        .finally(() => context.dispatch('processing.done'));
    },

    'task.edit': (context, task) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/task/${task.id}/edit`, {
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
        .finally(() => context.dispatch('processing.done'));
    },

    'task.remove': (context, taskId) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/task/${taskId}/remove`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
          // 'Content-Type': 'application/json',
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.task)
        .finally(() => context.dispatch('processing.done'));
    },
  },

  getters: {},
};

export default state;
