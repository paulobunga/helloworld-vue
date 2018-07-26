import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/views/Home.vue';
import About from '~/views/About.vue';

// const Home = () => import(/* webpackChunkName: "Home" */ '~/views/Home.vue');
// const About = () => import(/* webpackChunkName: "About" */ '~/views/About.vue');

Vue.use(Router);

const router = new Router({
  routes: [
    ...(process.env.NODE_ENV === 'development'
      ? [
        {
          path: '/sample',
          name: 'Sample',
          component: () => import(/* webpackChunkName: "Sample" */ '~/views/Sample.vue'),
        },
      ]
      : []),
    {
      path: '/',
      redirect: {
        path: '/home',
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

router.afterEach((to /* , from */) => {
  if (to.path === '/home') {
    document.title = 'Fyli';
    return;
  }
  document.title = `Fyli | ${to.name}`;
});
