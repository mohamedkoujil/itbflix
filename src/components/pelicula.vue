<template>
  <div class="peli-container justify-between" @click="$emit('clickPelicula')">
    <img :src="require(`../assets/${imagen}`)" alt="Imagen de la película" />
    <h2>{{ titulo }}</h2>
    <div>{{ puntuacion }}</div>
  </div>
</template>
<script>
 export default {
   // Establece un nombre al componente. De lo contrario aparece como "Anónimo" en DevTools.
   name: "carta_pelicula",
   // Lista de atributos (props) aceptados desde el componente padre.
   props: {
      imagen: String,
      titulo: String,
      puntuacion: String,
    },
   data() {
      return {};
   },
   // Lista de funciones que se ejecutarán cuando se acceda a la propiedad en cuestión.
   computed: {},
   // Lista de funciones (métodos) disponibles en el componente Vue.
   methods: {
   },
 };
</script>
<style>
  .peli-container {
    display: flex;
    flex-direction: column;
    width: 225px;
    height: 400px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s;
  }
  .peli-container img {
    border-radius: 5px;
    width: 100%;
    height: 60%;
  }

  .peli-container:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
  img {
    width: 100%;
  }
  h2 {
    font-size: 1.5em;
  }
  p {
    font-size: 1.2em;
  }

  .justify-between {
    justify-content: space-between;
  }
</style>