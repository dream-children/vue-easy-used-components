import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/transition',
    name: 'transition',
    component: () =>
      import(/* webpackChunkName: "transition" */ '../views/Transition.vue')
  },
  {
    path: '/throttle',
    name: 'Throttle',
    component: () =>
      import(/* webpackChunkName: "throttle" */ '../views/Throttle.vue')
  },
  {
    path: '/watermark',
    name: 'WaterMark',
    component: () =>
      import(/* webpackChunkName: "watermark" */ '../views/WaterMark.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
