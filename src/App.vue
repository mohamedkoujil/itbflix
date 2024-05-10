<template>
  <aside_component />
  
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

  <h1>Series destacadas</h1>
  <section class="flex wrap center">
    <carta_serie 
      imagen = "ahsoka_series.jpg"
      titulo="Ahsoka" 
      puntuacion="8.8/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "el_exorcista_creyente.jpg"
      titulo="El Exorcista Creyente"
      puntuacion="6.7/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "gen_v.jpg"
      titulo="Gen V"
      puntuacion="7.5/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "loki.jpg"
      titulo="Loki"
      puntuacion="9.8/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "nowhere.jpg"
      titulo="Nowhere"
      puntuacion="7.8/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "reptile.jpg"
      titulo="Reptile"
      puntuacion="5.5/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "sex_education.jpg"
      titulo="Sex Education"
      puntuacion="9/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "the_continental.jpg"
      titulo="The Continental"
      puntuacion="8.2/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "the_creator.jpg"
      titulo="The Creator"
      puntuacion="7.7/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "vikings.jpg"
      titulo="Vikings"
      puntuacion="8.9/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "the_witcher.webp"
      titulo="The Witcher"
      puntuacion="8.6/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "stranger_things.jpg"
      titulo="Stranger Things"
      puntuacion="8.5/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "wednesday.jpg"
      titulo="Wedneday"
      puntuacion="7.9/10"
      @clickSerie="clicDiv"
    />

    <carta_serie 
      imagen = "the_last_of_us.jpg"
      titulo="The Last Of Us"
      puntuacion="9.1/10"
      @clickSerie="clicDiv"
    />
  </section>

    <h1>Top 10 series más populares</h1>
    <section class="top-diez-series">
      <top_series />
    </section>

    <footer_component />
</template>

<script>
import carta_pelicula from './components/pelicula.vue';
import carta_actor from './components/actor.vue';
import aside_component from './components/aside.vue';
import carta_serie from './components/serie.vue';
import top_series from './components/top-series.vue';
import footer_component from './components/footer.vue';

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
    aside_component,
    carta_serie,
    top_series,
    footer_component
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
  box-shadow: 0px 0px 12px #00ffcc;
  background-color: #102c54
}

.top-diez-series {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 12px #00ffcc;
  background-color: #102c54
}
</style>