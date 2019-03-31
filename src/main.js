import './common/init';

import Vue from 'vue';

import './common/vue';

import './common/vuetify';
import './common/portal';

import './components/shared';

import store from './store';

import * as FetchHelper from './common/fetch.helper';
import * as Dialog from './Shared/Dialog';

import { AuthService } from './Auth/Auth.service';

import App from './App.vue';

import './registerServiceWorker';

const app = new Vue({
  store,
  render: (h) => h(App),
});

app.$mount('#app');

if (process.env.NODE_ENV === 'development') {
  global.$app = app;
}

(async function initializer() {
  FetchHelper.events.on('failure', (error, response) => {
    if (AuthService.isAuthenticated() && response.status === 401) {
      store.dispatch('Auth/logout');
    }
  });

  await AuthService.initialize();

  if (!AuthService.isAuthenticated() && store.state.Auth.authenticated) {
    store.dispatch('Auth/logout');
  }

  store.dispatch('Shared/ready');

  if (AuthService.isAuthenticated()) {
    store.dispatch('Shared/initialize').catch((error) => Dialog.toast(Dialog.FAILURE, error.message));
  }

  AuthService.events.on('login', () => {
    store.dispatch('Shared/initialize').catch((error) => Dialog.toast(Dialog.FAILURE, error.message));
  });

  AuthService.events.on('logout', () => {
    store.dispatch('Shared/uninitialize');
  });
}());
