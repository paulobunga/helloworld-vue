import CONFIG from '~/common/config';

export default {
  name: 'App',

  data: () => ({
    buildVersion: CONFIG.APP_VERSION,
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

  created() {
    if (process.env.NODE_ENV === 'development') {
      this.$data.navigationMenuItems.push({
        title: 'Sample',
        icon: 'code',
        route: '/sample',
      });
    }

    this.$vuetify.theme.primary = '#1687A7';
    this.$vuetify.theme.accent = '#FBC02D';
  },
};
