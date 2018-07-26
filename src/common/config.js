const debug = require('~/common/debug').create('~/common/config'); // eslint-disable-line global-require

const CONFIG = {};

export default CONFIG;

const CONFIG_OVERRIDE = {};

if (localStorage && localStorage.CONFIG_OVERRIDE) {
  try {
    Object.assign(CONFIG_OVERRIDE, JSON.parse(localStorage.CONFIG_OVERRIDE));
  } catch (e) {
    debug(e);
  }
}

debug('CONFIG_OVERRIDE', CONFIG_OVERRIDE);

CONFIG.ENV = process.env.NODE_ENV;

CONFIG.APP_VERSION = process.env.APP_VERSION || 'LATEST';

CONFIG.ENDPOINT = CONFIG.ENV === 'production' ? 'https://api.fily.com' : 'http://localhost:1337';

Object.assign(CONFIG, CONFIG_OVERRIDE);

debug('CONFIG', CONFIG);
