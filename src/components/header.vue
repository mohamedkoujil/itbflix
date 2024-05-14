<template>
    <header>
        <nav class="flex center">
            <ul class="flex center">
                <li id="peliculas">Peliculas</li>
                <li id="series">Series</li>
            </ul>
        </nav>
        <h1 id="verTodo">ITBFLIX</h1>
    </header>
</template>

<script>
export default {
    name: "header_component",
    mounted() {
    // Attach event listeners when the component is mounted
    document.getElementById("peliculas").addEventListener("click", this.emitPeliculas);
    document.getElementById("series").addEventListener("click", this.emitSeries);
    document.getElementById("verTodo").addEventListener("click", this.emitTodo);
  },
  methods: {
    emitPeliculas() {
      this.$emit("clickPeliculas");
    },
    emitSeries() {
      this.$emit("clickSeries");
    },
    emitTodo() {
      this.$emit("clickTodo");
    }
  }
}


</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 24px;
    color: #ffffff;
    /* Texto principal blanco */
    animation: pulsate 0.11s ease-in-out infinite alternate;
    font-size: 32px;
}

header h1:hover {
    cursor: pointer;
    
}

@keyframes pulsate {
    100% {
        /* Sombra de texto con tonos de cian */
        text-shadow:
            0 0 4px #00ffcc,
            0 0 11px #00ffcc,
            0 0 19px #00ffcc,
            0 0 40px #00ffcc,
            0 0 80px #00ffcc,
            0 0 90px #00ffcc,
            0 0 100px #00ffcc,
            0 0 150px #00ffcc;
    }

    0% {
        /* Sombra de texto con tonos de cian */
        text-shadow:
            0 0 4px #00ffcc,
            0 0 10px #00ffcc,
            0 0 18px #00ffcc,
            0 0 38px #00ffcc,
            0 0 73px #00ffcc,
            0 0 80px #00ffcc,
            0 0 94px #00ffcc,
            0 0 140px #00ffcc;
    }
}

li {
    list-style: none;
}

li a {
    text-decoration: none;
    color: #ffffff;
    /* Texto principal blanco */
    border-radius: 5px;
}

li {
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    box-shadow: #00ffcc 0 1.5px 3px;
    /* Cambiado a un tono de cian */
    margin-right: 10px;
    transition: 0.3s;
}

li:hover {
    color: #ffffff;
    /* Texto principal blanco */
    background-color: rgba(0, 255, 204, 0.075);
    cursor: pointer;
}
</style>