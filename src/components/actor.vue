<template>
    <div class="actor-container justify-between" @click="$emit('clickActor')">
      <img :src="require(`../assets/${imagen}`)" alt="Imagen del actor/actriz" />
      <h2>{{ nombre }}</h2>
      <div class="peliculas">
        <h3>Películas destacadas:</h3>
        <ul>
          <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
        </ul>
      </div>
      <div class="puntuacion">{{ puntuacion }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "carta_actor",
    props: {
      imagen: String,
      nombre: String,
      puntuacion: String,
      peliculas: Array,
    },
  };
  </script>
  
  <style>
  .actor-container {
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 550px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgb(255, 0, 191);
    cursor: pointer;
    transition: 0.3s;
    background-color: #102c54;
  }
  
  .actor-container img {
    width: auto;
    height: 200px;
    box-shadow: 0px 0px 12px rgb(255, 0, 191);
    border-radius: 50%;
    margin: auto;
    width: 150px;
  }
  
  .actor-container:hover {
    box-shadow:  -7px 8px 9px rgb(255, 0, 191);
    transform: translate(6px, -8px);
  }
  
  h2 {
    font-size: 1.2em;
    color: #ccc;
    margin: 10px 0;
  }
  
  .puntuacion {
    font-size: 1.2em;
    margin: 0 -10px -10px -10px;
    background-color: aqua;
    padding: 6px;
    border-radius: 4px;
  }
  
  .peliculas {
    margin-top: auto;
  }
  
  .peliculas h3 {
    font-size: 1em;
    color: #ccc;
  }
  
  .peliculas ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .peliculas li {
    font-size:smaller;
    background-color: #004275;
    color: #CCC;
    margin-left: 20px;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  </style>