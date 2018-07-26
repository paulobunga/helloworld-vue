import 'babel-polyfill';
import 'intl';
import 'intl/locale-data/jsonp/fr';
import 'whatwg-fetch';

import { sync } from 'vuex-router-sync';

import '~/common/debug';

import '~/common/config';
import '~/common/event';

import Vue from 'vue';

import '~/common/vue';

import '~/common/vuetify';
import '~/common/portal';

import '~/components/shared';

import App from '~/App.vue';
import store from '~/store';
import router from '~/router';

import './registerServiceWorker';

sync(store, router);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
