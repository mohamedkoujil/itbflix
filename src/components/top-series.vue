<template>
    <div class="top-series">
      <ul>
        <li v-for="(serie, index) in topSeries" :key="serie.id">
          <span class="rank">{{ index + 1 }}</span>
          <img class="cover" :src="serie.image.medium" :alt="serie.name" />
          <span class="title">{{ serie.name }}</span>
          <span class="rating">Calificación: {{ serie.rating.average }}/10</span>
        </li>
      </ul>
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
  .top-series {
    margin-top: 20px;
  }
  
  ul {
    display: flex;
    justify-content:space-between;
    align-items: center;
    list-style: none;
    margin: 10px 20px 10px 20px;
  }
  
  li {
    margin-bottom:0 10px 0 10px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    background-color:#1e3d6f;
    color: #CCC;
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
    object-fit: cover;
    border-radius: 5px;
  }
  
  .rating {
    color: #00ffcc;
  }
  </style>  