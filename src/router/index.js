import { createRouter, createWebHistory } from 'vue-router';
import peliculas_detalle from '../views/Peliculas.vue';
import series_detalle from '../views/Series.vue';

const routes = [
  { path: '/peliculas', component: peliculas_detalle },
  { path: '/series', component: series_detalle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;