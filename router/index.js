import Vue from 'vue';
import VueRouter from 'vue-router';
import Peliculas from '../src/views/Peliculas.vue';
import Series from '../src/views/Series.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/peliculas', component: Peliculas },
  { path: '/series', component: Series },
];

const router = new VueRouter({
  routes
});

export default router;