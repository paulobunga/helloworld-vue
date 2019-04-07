import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '~/Home/HomeView.vue';
import AboutView from '~/Other/AboutView.vue';

// const HomeView = () => import(/* webpackChunkName: "HomeView" */ '~/Home/HomeView.vue');
// const AboutView = () => import(/* webpackChunkName: "AboutView" */ '~/Other/AboutView.vue');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    ...(process.env.NODE_ENV === 'development'
      ? [
        {
          path: '/sample',
          name: 'Sample',
          component: () => import(/* webpackChunkName: "SampleView" */ '~/Other/SampleView.vue'),
        },
      ]
      : []),
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

router.afterEach((to, from) => {
  if (to.path === '/home') {
    document.title = 'Starter';
    return;
  }
  document.title = `Starter | ${to.name}`;
});
