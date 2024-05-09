<template>
    <div class="serie-container justify-between" @click="$emit('clickserie')">
      <img :src="require(`../assets/${imagen}`)" alt="Imagen de la serie" />
      <h2>{{ titulo }}</h2>
      <div class="puntuacio">{{ puntuacion }}</div>
    </div>
  </template>
  <script>
   export default {
     // Establece un nombre al componente. De lo contrario aparece como "Anónimo" en DevTools.
     name: "carta_serie",
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
    .serie-container {
      display: flex;
      flex-direction: column;
      width: 160px;
      height: 305px;
      padding: 10px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0px 0px 12px rgb(255, 0, 191);
      cursor: pointer;
      transition: 0.3s;
      background-color: yellow;
    }
    .serie-container img {
      border-radius: 5px;
      width: 100%;
      height: 60%;
    }
  
    .serie-container:hover {
      box-shadow:  -7px 8px 9px rgb(255, 0, 191);
      transform: translate(6px, -8px);
    }
  
    .serie-container   img {
      width: 100%;
    }
    .serie-container h2 {
      font-size: 1.2em;
      color: rgb(255, 0, 191);
      margin: auto;
    }
    .puntuacio {
      font-size: 1.2em;
      margin: 0 -10px -10px -10px;
      background-color: aqua;
      padding: 6px;
    }
  
    .justify-between {
      justify-content: space-between;
    }
  </style>