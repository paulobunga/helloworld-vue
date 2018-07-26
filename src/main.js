import './common';

import { sync } from 'vuex-router-sync';

import Vue from 'vue';

import '~/common/vue';

import '~/common/vuetify';
import '~/common/portal';

import '~/components/shared';

import App from '~/App.vue';
import store from '~/store';
import router from '~/router';

import './registerServiceWorker';
import { AuthService } from './common/Auth.service';

sync(store, router);

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
});

app.$mount('#app');

AuthService.initialize().then(() => {
  if (store.state.authenticated && !AuthService.isAuthenticated()) {
    store.dispatch('auth.logout');
  }
});

if (process.env.NODE_ENV === 'development') {
  global.$app = app;
}
