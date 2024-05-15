<template>
    <div v-if="fromApi" class="serie-container justify-between" @click="irAlDetalle">
      <img :src=imagen alt="Imagen de la serie" />
      <h2>{{ titulo }}</h2>
      <div class="puntuacio">{{ puntuacion }}</div>
    </div>
    <div v-else class="serie-container justify-between" @click="$emit('clickSerie')">
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
        fromApi: Boolean,
        id: Number,
      },
     data() {
        return {};
     },
     // Lista de funciones que se ejecutarán cuando se acceda a la propiedad en cuestión.
     computed: {},
     // Lista de funciones (métodos) disponibles en el componente Vue.
     methods: {
      irAlDetalle() {
        this.$router.push({name: 'detalle', params: {type: 'tv', id: this.id}});
      }
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

      border: 1px solid #00ffcc; 
      border-radius: 5px;
      box-shadow: 0px 0px 5px #00ffcc; 
      cursor: pointer;
      transition: 0.3s;
      background-color: #04042e; 
    }
    .serie-container img {
      border-radius: 5px;
      width: 100%;
      height: 60%;
    }
  
    .serie-container:hover {
      box-shadow:  1px 1px 14px #00ffcc; 
    }
  
    .serie-container   img {
      width: 100%;
    }

    .serie-container h2 {
      font-size: 1.2em;
      color: #00ffcc; 
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