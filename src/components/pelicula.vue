<template>
  <div @click="$emit('clickPelicula')">
    <div>{{ imagen }}</div>
    <img :src="require(`../assets/${imagen}`)" alt="Imagen de la película" />
    <h2>{{ titulo }}</h2>
    <p>{{ descripcion }}</p>
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
      descripcion: String,
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
<style>/* Estilos CSS */</style>