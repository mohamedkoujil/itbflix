<template>
  <section class="flex wrap center">
    <carta_pelicula 
      imagen = "sawx.jpg"
      titulo="Saw X" 
      puntuacion="5.8/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />
  </section>
</template>

<script>
import carta_pelicula from './components/pelicula.vue'

export default {
  name: 'App',
  data() {
    return {
      img: ""
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

.flex {
  display: flex;
}

.wrap {
  flex-wrap: wrap;
}

.center{
  justify-content: center;
  align-items: center;
}
</style>
