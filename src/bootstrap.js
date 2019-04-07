/**
 * App bootstrap
 */

import * as FetchHelper from './common/fetch.helper';
import * as Dialog from './Shared/Dialog';

import { AuthService } from './Auth/Auth.service';

import store from './store';

export default async function bootstrap() {
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
}
