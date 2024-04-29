<template>
  <img :src="srcImg" alt="Vue logo"/>
  <carta_pelicula 
    :imagen = srcImg 
    titulo="Pelicula 1" 
    descripcion="Descripción de la película 1"
    @clickPelicula="clicDiv"
  />
</template>

<script>
import carta_pelicula from './components/pelicula.vue'

export default {
  name: 'App',
  data() {
    return {
      srcImg: './assets/logo.png'
    }
  },
  components: {
    carta_pelicula
  },
  methods: {
    clicDiv() {
      console.log("Clic en el div");
    },
  
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
