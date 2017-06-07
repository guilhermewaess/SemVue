import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import AccordionDoc from '@/components/AccordionDoc';
import ModalDoc from '@/components/ModalDoc';

Vue.use(Router);

export default new Router({
  hashbang: false,
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'welcome' },
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/ModalDoc',
      name: 'ModalDoc',
      component: ModalDoc,
    },
    {
      path: '/AccordionDoc',
      name: 'AccordionDoc',
      component: AccordionDoc,
    },
  ],
});

