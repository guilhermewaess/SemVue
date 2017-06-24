import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import AccordionDoc from '@/components/AccordionDoc';
import ModalDoc from '@/components/ModalDoc';
import DropdownDoc from '@/components/DropdownDoc';
import RatingDoc from '@/components/RatingDoc';

Vue.use(Router);

export default new Router({
  hashbang: false,
  linkActiveClass: 'active',
  mode: 'hash',
  // base: `${__dirname}/SemVue`,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
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
      path: '/AccordionDoc',
      name: 'AccordionDoc',
      component: AccordionDoc,
    },
    {
      path: '/DropDownDoc',
      name: 'DropDownDoc',
      component: DropdownDoc,
    },
    {
      path: '/ModalDoc',
      name: 'ModalDoc',
      component: ModalDoc,
    },
    {
      path: '/RatingDoc',
      name: 'RatingDoc',
      component: RatingDoc,
    },
  ],
});

