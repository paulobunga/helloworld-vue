import { AuthService } from '../common/Auth.service';

import { API_ENDPOINT } from '../common/config';
import * as FetchHelper from '../common/fetch.helper';

/* eslint no-param-reassign: ["error", { "props": false }] */

const Todo = {
  state: {
    todo: null,
  },

  mutations: {
    todo: (state, value = null) => {
      state.todo = value;
    },
  },

  actions: {
    'todo.fetch': (context) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/todo`, {
        headers: {
          Authorization: `Bearer ${AuthService.token}`,
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => {
          const todoSet = result.todo;
          context.commit('todo', todoSet);
          return todoSet;
        })
        .finally(() => context.dispatch('processing.done'));
    },

    'todo.add': (context, todo) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/todo/add`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.todo)
        .finally(() => context.dispatch('processing.done'));
    },

    'todo.edit': (context, todo) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/todo/${todo.id}/edit`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.todo)
        .finally(() => context.dispatch('processing.done'));
    },

    'todo.remove': (context, todoId) => {
      context.dispatch('processing.start');

      return fetch(`${API_ENDPOINT}/todo/${todoId}/remove`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${AuthService.token}`,
          // 'Content-Type': 'application/json',
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.todo)
        .finally(() => context.dispatch('processing.done'));
    },
  },

  getters: {},
};

export default Todo;
