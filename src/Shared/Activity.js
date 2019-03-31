import store from '../store';

export function processing(module = 'App', operation = 'default') {
  store.dispatch('Activity/processing', `${module}.${operation}`); // `${module}.${operation}`
}

export function done(module = 'App', operation = 'default') {
  store.dispatch('Activity/done', `${module}.${operation}`); // `${module}.${operation}`
}
