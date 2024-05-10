<template>
    <div class="top-series-container" v-for="(serie, index) in topSeries" :key="serie.id">
        <div class="card">
          <span class="rank">{{ index + 1 }}</span>
          <img class="cover" :src="serie.image.medium" :alt="serie.name" />
          <span class="title">{{ serie.name }}</span>
          <span class="rating">Calificación: {{ serie.rating.average }}/10</span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "top_series",
    data() {
      return {
        topSeries: [],
      };
    },
    created() {
      this.fetchTopSeries();
    },
    methods: {
      async fetchTopSeries() {
        try {
          const response = await fetch('https://api.tvmaze.com/shows');
          if (!response.ok) {
            throw new Error('No se pudieron obtener las series.');
          }
          const data = await response.json();
          const sortedSeries = data.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
          this.topSeries = sortedSeries.slice(0, 10);
        } catch (error) {
          console.error('Error al obtener las series:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  .top-series-container {
    margin-top: 20px;
    display: flex;
  }
  
  .card {
    margin:0 10px 18px 10px;
    display: flex;
    flex-direction:column;
    background-color:#1e3d6f;
    align-items: center;
    color: #CCC;
    border-radius: 5px;
    padding: 5px;
    height: 16em;
    width: 7em;
    box-shadow: 0px 0px 4px #00ffcc;
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0px 0px 12px #00ffcc;
    cursor: pointer;
  }
  
  .rank {
    font-weight: bold;
  }
  
  .title {
    font-weight: bold;
    color: #CCC;
  }
  
  .cover {
    width: 100px;
    height: 150px;
    border-radius: 5px;
  }
  
  .rating {
    color: #00ffcc;
  }
  </style>  