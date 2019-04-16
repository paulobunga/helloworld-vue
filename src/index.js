import './common/init';

import './styles/index.css';

import Vue from 'vue';

import './common/vue';

import './common/vuetify';
import './common/portal';

import './components/shared';

import store from './store';

import bootstrap from './bootstrap';

import App from './App.vue';

// import './registerServiceWorker';

const app = new Vue({
  store,
  render: (h) => h(App),
});

app.$mount('#app');

if (process.env.NODE_ENV === 'development') {
  global.$app = app;
}

bootstrap();

import('pwacompat');
