import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'about',
    children: [{
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    }, {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    }],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
