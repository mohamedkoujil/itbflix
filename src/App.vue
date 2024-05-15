<template>
  <aside_component/>
  <router-view/>
  <footer_component/>
</template>

<script>
import aside_component from './components/aside.vue';
import footer_component from './components/footer.vue';

export default {
  name: 'App',
  components: {
    aside_component,
    footer_component
  }
};
</script>

<style>
#app {
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
</style>