const debugCreate = require('debug');

const PREFIX = 'fyli';

const debug = debugCreate(PREFIX);

debug.create = (ns) => {
  const debugInstance = debugCreate(`${PREFIX}:${ns}`);
  debugInstance.error = debug.error;
  debugInstance.PREFIX = PREFIX;
  return debugInstance;
};

debug.error = debugCreate(`${PREFIX}:error`);

export const { create, error } = debug;

if (process.env.NODE_ENV === 'development' && localStorage && !localStorage.debug) {
  localStorage.debug = `${PREFIX}*`;
}

if (process.env.NODE_ENV === 'development') {
  global.$debug = create('debug');
}
