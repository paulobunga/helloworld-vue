import { sync } from 'vuex-router-sync';

import * as CONFIG from '~/common/config';

import router from './Session.router';

export default {
  name: 'Session',

  router,

  data: () => ({
    releaseVersion: CONFIG.RELEASE_VERSION,
    navigationMenuItems: [
      {
        title: 'Home',
        icon: 'home',
        route: '/home',
      },
      {
        title: 'About',
        icon: 'info_outline',
        route: '/about',
      },
    ],
  }),

  methods: {
    logout() {
      this.$store.dispatch('auth.logout');
    },
  },

  created() {
    if (process.env.NODE_ENV === 'development') {
      this.$data.navigationMenuItems.push({
        title: 'Sample',
        icon: 'code',
        route: '/sample',
      });
    }
  },

  mounted() {
    this.$router.push('/');
    this.unsync = sync(this.$store, this.$router);
  },

  beforeDestroy() {
    this.unsync();
  },
};
