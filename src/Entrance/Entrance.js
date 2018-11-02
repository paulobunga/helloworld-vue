import { sync } from 'vuex-router-sync';

import * as CONFIG from '~/common/config';

import router from './router';

export default {
  name: 'Entrance',

  router,

  data: () => ({
    releaseVersion: CONFIG.RELEASE_VERSION,
  }),

  mounted() {
    this.$router.push('/');
    this.unsync = sync(this.$store, this.$router);
  },

  beforeDestroy() {
    this.unsync();
  },
};
