<template>
  <header_component2/>
  <div v-if="item" class="detalle-container">
    <h1>{{ item.title || item.name }}</h1>
    <div class="detalle-content">
      <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`" alt="Imagen" class="detalle-imagen" />
      <div class="detalle-text">
        <p>{{ item.overview }}</p>
        <p>Rating: {{ item.vote_average }}/10</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import header_component2 from '../components/header2.vue';
export default {
  name: 'detalle_view',
  data() {
    return {
      item: null,
    };
  },
  components: {
    header_component2,
  },
  mounted() {
    const { type, id } = this.$route.params;
    this.fetchItemDetails(type, id);
  },
  methods: {
    fetchItemDetails(type, id) {
      const apiKey = '802067a2adc0838122b3ec68940d51d0';
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.item = data;
        });
    },
  },
};
</script>

<style scoped>
.detalle-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 12px #00ffcc;
}

.detalle-content {
  display: flex;
  align-items: center;
}

.detalle-imagen {
  width: 300px; /* Ajusta el tamaño de la imagen según sea necesario */
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 255, 204, 0.5);
}

.detalle-text {
  margin-left: 20px;
}

.detalle-container h1 {
  font-size: 1.5em;
  color: #00ffcc;
}

.detalle-container p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #fff;
}

.detalle-container p:last-child {
  margin-bottom: 0;
}

.detalle-container p:first-child::first-letter {
  font-size: 1.5em;
  font-weight: bold;
}

.detalle-container p:first-child {
  margin-bottom: 20px;
}
</style>