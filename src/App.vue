<template>
  <h1>Películas destacadas</h1>
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

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />

    <carta_pelicula 
      imagen = "star_wars_despertar_fuerza.jpg"
      titulo="Star Wars: El despertar de la fuerza"
      puntuacion="6.7/10"
      @clickPelicula="clicDiv"
    />
  </section>

  <h1>Actores destacados</h1>
    <section class="featured-actors">
      <carta_actor 
        imagen="cate_blanchett.webp"
        nombre="Cate Blanchett" 
        puntuacion="8.5/10"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="ewan_mcgregor.webp"
        nombre="Ewan McGregor"
        puntuacion="8.3/10"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="johnny_depp.webp"
        nombre="Johnny Depp"
        puntuacion="7.9/10"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="helena_bonham_carter.webp"
        nombre="Helena Bonham Carter"
        puntuacion="8.0/10"
        @clickActor="clicDiv"
      />

      <carta_actor
      imagen="leonardo_dicaprio.webp"
      nombre="Leonardo DiCaprio"
      puntuacion="9.0/10"
      @clickActor="clickActor"
      />

    <carta_actor
      imagen="scarlett_johansson.jpg"
      nombre="Scarlett Johansson"
      puntuacion="8.7/10"
      @clickActor="clickActor"
      />

    <carta_actor
      imagen="christina_ricci.jpg"
      nombre="Christina Ricci"
      puntuacion="8.5/10"
      @clickActor="clickActor"
      />
    </section>
    <h1>Top 10 series más populares</h1>
    <section class="top-diez-series">
      <top_series />
    </section>
</template>

<script>
import carta_pelicula from './components/pelicula.vue';
import carta_actor from './components/actor.vue';
import top_series from './components/top-series.vue';

export default {
  name: 'App',
  data() {
    return {
      img: ""
    }
  },
  components: {
    carta_pelicula,
    carta_actor,
    top_series
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

h1 {
  color: #CCC;
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

.featured-actors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgb(255, 0, 191);
  background-color: #102c54
}

.top-diez-series {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgb(255, 0, 191);
  background-color: #102c54
}
</style>