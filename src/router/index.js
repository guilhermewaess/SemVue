import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import AccordionDoc from '@/components/AccordionDoc';
import DimmerDoc from '@/components/DimmerDoc';
import DropdownDoc from '@/components/DropdownDoc';
import ModalDoc from '@/components/ModalDoc';
import PopupDoc from '@/components/PopupDoc';
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
      path: '/DimmerDoc',
      name: 'DimmerDoc',
      component: DimmerDoc,
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
      path: '/PopupDoc',
      name: 'PopupDoc',
      component: PopupDoc,
    },
    {
      path: '/RatingDoc',
      name: 'RatingDoc',
      component: RatingDoc,
    },
  ],
});
