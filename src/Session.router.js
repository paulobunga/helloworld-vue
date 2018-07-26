import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '~/views/HomeView.vue';
import AboutView from '~/views/AboutView.vue';

// const HomeView = () => import(/* webpackChunkName: "HomeView" */ '~/views/HomeView.vue');
// const AboutView = () => import(/* webpackChunkName: "AboutView" */ '~/views/AboutView.vue');

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
          component: () => import(/* webpackChunkName: "SampleView" */ '~/views/SampleView.vue'),
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
    document.title = 'Hello World';
    return;
  }
  document.title = `Hello World | ${to.name}`;
});
