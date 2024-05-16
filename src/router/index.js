import { createRouter, createWebHistory } from 'vue-router';
import home_view from '../views/home.vue';
import detalle_view from '../views/detalle.vue';

const routes = [
  { path: '/home', component: home_view, name: 'home' },
  { path: '/detalle/:type/:id', component: detalle_view, name: 'detalle' },
  { path: '/', redirect: '/home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;