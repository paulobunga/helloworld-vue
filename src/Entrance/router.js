import Vue from 'vue';
import Router from 'vue-router';

import LoginView from './LoginView.vue';
import SignupView from './SignupView.vue';
import PasswordResetView from './PasswordResetView.vue';

import AboutView from '~/Other/AboutView.vue';

// const LoginView = () => import(/* webpackChunkName: "LoginView" */ './LoginView.vue');

// const AboutView = () => import(/* webpackChunkName: "AboutView" */ '~/Other/AboutView.vue');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignupView,
    },
    {
      path: '/recover',
      name: 'Recover password',
      component: PasswordResetView,
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
          name: 'SampleView',
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
  document.title = `Starter | ${to.name}`;
});
