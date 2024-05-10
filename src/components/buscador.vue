<template>
    <input placeholder="Enter your text..." class="input" name="text" type="text">
  </template>
  
  <script>
  export default {
    name: 'buscador_component',
    props: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .input {
    background-color: #04042e;
    max-width: 190px;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid white;
    border-radius: 5px;
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
  }
  
  .input:focus {
    color: aqua;
    background-color: #212121;
    outline-color:  aqua;
    box-shadow: -3px -3px 15px aqua;
    transition: .1s;
    transition-property: box-shadow;
  }
  </style>
  