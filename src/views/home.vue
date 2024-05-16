<template>
    <header_component 
        @clickPeliculas="clickPeliculas" 
        @clickSeries="clickSeries"
        @clickTodo="clickTodo"/>
    <section v-show="verPelis" class="flex wrap center">
    <h1>Películas destacadas</h1>
    <!--Pelicules introduides manualment-->
    <div class="flex wrap center">
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
      <!--Pelicules introduides usant API-->
      <div v-for="movie in movies" :key="movie.id">
        <carta_pelicula 
          :imagen="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :titulo="movie.original_title"
          :puntuacion='Math.round(movie.vote_average * 10) / 10 + "/10"'
          :fromApi="true"
          :id="movie.id"
        />
      </div>
      <div class="addMovie">
        <img @click="this.showFromMovie" src="../assets/simbolo-mas.png" alt="Añadir película" />
        <h2>Añadir película</h2>
      </div>
      <!--Formulari per afegir pel·lícules-->
      <div v-show="showForm" class="formAddMovie">
        <form id="addMovieLocalStorage">
          <input type="text" placeholder="Título de la película" />
          <input type="text" placeholder="Puntuación" />
          <input type="text" placeholder="Imagen(link)" />
          <input type="submit" @click="this.addMovieLocalStorage" value="Añadir"/>
          <button @click="this.cancelarAddMovie">Cancelar</button>
        </form>
      </div>
      <div v-for="peli in pelisLocalStorage" :key="peli">
        <carta_pelicula 
          :imagen="peli['imagen']"
          :titulo="peli['titulo']"
          :puntuacion="peli['puntuacion']"
          :fromApi="true"
          @clickPelicula="clicDiv"
        />
     </div>
    </div>
  </section>

  <section v-if="!verPelis && verSeries" class="flex wrap center">
    <h1>Series destacadas</h1>
    <div class="flex wrap center">
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

      <div v-for="serie in series" :key="serie.id">
        <carta_serie 
          :imagen="'https://image.tmdb.org/t/p/w500' + serie.backdrop_path"
          :titulo="serie.original_name"
          :puntuacion='Math.round(serie.vote_average * 10) / 10 + "/10"'
          :fromApi="true"
          :id="serie.id"
        />
      </div>
    </div>
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
  
  <section v-show="verSeries && verPelis" class="flex wrap center">
    <h1>Series destacadas</h1>
    <!--Series introduides manualment-->
    <div class="flex wrap center">
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
      <!--Series introduides usant API-->
      <div v-for="serie in series" :key="serie.id">
        <carta_serie 
          :imagen="'https://image.tmdb.org/t/p/w500' + serie.backdrop_path"
          :titulo="serie.original_name"
          :puntuacion='Math.round(serie.vote_average * 10) / 10 + "/10"'
          :fromApi="true"
          :id="serie.id"
        />
      </div>
    </div>
  </section>

    <h1>Top 10 series más populares</h1>
    <section class="top-diez-series">
      <top_series />
    </section>
</template>

<script>
import header_component from '../components/header.vue';
import carta_pelicula from '../components/pelicula.vue';
import carta_actor from '../components/actor.vue';
import carta_serie from '../components/serie.vue';
import top_series from '../components/top-series.vue';

export default {
  name: 'home_view',
  data() {
    return {
      img: "",
      movies: [],
      series: [],
      verPelis: true,
      verSeries: true,
      showForm: false,
      pelisLocalStorage: []
    }
  },
  components: {
    header_component,
    carta_pelicula,
    carta_actor,
    carta_serie,
    top_series
  },
  methods: {
    clicDiv() {
      console.log("Clic en el div");
    },

    apiMovies() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=802067a2adc0838122b3ec68940d51d0')
      .then(response => response.json())
      .then(data => {
        this.movies = data.results;
        console.log(this.movies);
      })
    },

    apiSeries() {
      fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=802067a2adc0838122b3ec68940d51d0')
      .then(response => response.json())
      .then(data => {
        this.series = data.results;
        console.log(this.series);
      })
    },

    clickPeliculas() {
      this.verPelis = true;
      this.verSeries = false;
    },

    clickSeries() {
      this.verPelis = false;
      this.verSeries = true;
    },

    clickTodo() {
      this.verPelis = true;
      this.verSeries = true;
    },

    showFromMovie() {
      this.showForm = true;
    },

    cancelarAddMovie() {
      this.showForm = false;
    },

    addMovieLocalStorage() {
      console.log("Añadir película");
      this.showForm = false;
      //Añadir película al localStorage
      let pelis = this.pelisLocalStorage;
      let titulo = document.getElementById("addMovieLocalStorage")[0].value;
      let puntuacion = document.getElementById("addMovieLocalStorage")[1].value;
      let imagen = document.getElementById("addMovieLocalStorage")[2].value;
      if (imagen == "") {
        imagen = "https://i.ytimg.com/vi/rggwKu2-Cy4/hqdefault.jpg";
      }
      pelis.push({titulo: titulo, puntuacion: puntuacion, imagen: imagen});
      localStorage.setItem("pelis", JSON.stringify(pelis));
      this.cancelarAddMovie();
      
    },

    getLocalStorage() {
      let pelis = JSON.parse(localStorage.getItem("pelis"));
      console.log(pelis);
      if (pelis == null) {
        this.pelisLocalStorage = [];
      } else {
        this.pelisLocalStorage = pelis;
      }
    }
  },
  mounted() {
    this.apiMovies();
    this.apiSeries();
    this.getLocalStorage();
  }
}
</script>

<style>
#home {
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

.addMovie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 305px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #00ffcc; 
  border-radius: 5px;
  box-shadow: 0px 0px 5px #00ffcc; 
  cursor: pointer;
  transition: 0.3s;
  background-color: #04042e; 
}

.addMovie:hover {
  box-shadow:  1px 1px 14px #00ffcc; 
}

.addMovie img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.addMovie img:hover {
  filter: brightness(0.8);
  transition: 0.3s;
}

.addMovie h2 {
  color: #00ffcc;
}

.formAddMovie {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 205px;  
  padding: 10px;
  margin: 10px;
  border: 1px solid #00ffcc; 
  border-radius: 5px;
  box-shadow: 0px 0px 5px #00ffcc; 
  background-color: #1e3d6f; 
}
</style>