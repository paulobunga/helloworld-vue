import Vue from 'vue';

import Vuetify from 'vuetify';

import { COLOR } from './styles';

Vue.use(Vuetify, {
  theme: {
    primary: COLOR.primary,
    secondary: COLOR.primaryDark,
    accent: COLOR.accent,
    inverse: COLOR.inverse,

    success: COLOR.success,
    error: COLOR.error,
    info: COLOR.info,
    warning: COLOR.warning,
    off: COLOR.off,
  },
});
