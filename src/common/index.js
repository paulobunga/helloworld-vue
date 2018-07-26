import './polyfill';

import './events';

import * as Logger from './logger';

import * as CONFIG from './config';

if (process.env.NODE_ENV === 'development') {
  global.Logger = Logger;
  global.CONFIG = CONFIG;
}

/**
 * Setup Logger
 */
Logger.setup('fyli');

if (process.env.NODE_ENV === 'development') {
  Logger.enable('fyli*');
}
