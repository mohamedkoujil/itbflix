<template>
    <header>
        <router-link to="/home" style="text-decoration: none;"><h1 id="verTodo">ITBFLIX</h1></router-link>
    </header>
</template>

<script>
export default {
    name: "header_component2"
};
</script>

<style scoped>
header {
    display: flex;
    justify-content:end;
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
</style>