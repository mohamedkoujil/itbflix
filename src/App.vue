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
    <section class="flex wrap center">
      <carta_actor 
        imagen="cate_blanchett.webp"
        nombre="Cate Blanchett" 
        puntuacion="8.5/10"
        :peliculas="['El señor de los anillos', 'Carol', 'Blue Jasmine']"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="ewan_mcgregor.webp"
        nombre="Ewan McGregor"
        puntuacion="8.3/10"
        :peliculas="['Trainspotting', 'Moulin Rouge!', 'Star Wars']"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="johnny_depp.webp"
        nombre="Johnny Depp"
        puntuacion="7.9/10"
        :peliculas="['Piratas del Caribe', 'Eduardo Manostijeras', 'Charlie y la fábrica de chocolate']"
        @clickActor="clicDiv"
      />

      <carta_actor 
        imagen="helena_bonham_carter.webp"
        nombre="Helena Bonham Carter"
        puntuacion="8.0/10"
        :peliculas="['El discurso del rey', 'Harry Potter', 'Fight Club']"
        @clickActor="clicDiv"
      />

      <carta_actor
      imagen="leonardo_dicaprio.webp"
      nombre="Leonardo DiCaprio"
      puntuacion="9.0"
      :peliculas="['Titanic', 'El lobo de Wall Street', 'Origen']"
      @clickActor="clickActor"
      />

    <carta_actor
      imagen="scarlett_johansson.jpg"
      nombre="Scarlett Johansson"
      puntuacion="8.7"
      :peliculas="['Avengers: Endgame', 'Lost in Translation', 'Jojo Rabbit']"
      @clickActor="clickActor"
      />

    <carta_actor
      imagen="christina_ricci.jpg"
      nombre="Christina Ricci"
      puntuacion="8.5"
      :peliculas="['Sleepy Hollow', 'Monster', 'La familia Addams']"
      @clickActor="clickActor"
      />
    </section>
</template>

<script>
import carta_pelicula from './components/pelicula.vue'
import carta_actor from './components/actor.vue'

export default {
  name: 'App',
  data() {
    return {
      img: ""
    }
  },
  components: {
    carta_pelicula,
    carta_actor
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
