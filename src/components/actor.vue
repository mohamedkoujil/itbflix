<template>
    <div class="actor-container justify-between" @click="$emit('clickActor')">
      <div class="actor-details">
      <img :src="require(`../assets/${imagen}`)" alt="Imagen del actor/actriz" class="actor-image" />
      <h2>{{ nombre }}</h2>
      <div class="puntuacion">{{ puntuacion }}</div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "carta_actor",
    props: {
      imagen: String,
      nombre: String,
      puntuacion: String
    },
  };
</script>
  
<style>
.actor-container {
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
}

.actor-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
}

.actor-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px 0 10px 0;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 12px rgb(255, 0, 191);
}

h2 {
  font-size: 1.2em;
  color: #ccc;
  margin: 0;
}

.puntuacion {
  font-size: 1em;
  color: #00ffcc;
}
</style>