<template>
    <aside>
      <h3>Premios y festivales</h3>
      <div class="artículosAside">
        <article>
          <img alt="Oscars" :src="require(`../assets/Oscars.jpg`)" />
          <h4>Premios Oscar (Academy Awards, USA) 2023</h4>
            <p>Mejor película del año: Everything Everywhere All at Once.</p>
            <p>Mejor interpretación por un actor en el papel principal: Brendan Fraser (The Whale).</p>
            <p>Mejor interpretación por una actriz en el papel principal: Michelle Yeoh (Everything Everywhere All at Once).</p>
            <p>Mejor dirección: Daniel Kwan, Daniel Scheinert (Everything Everywhere All at Once).</p>
            <p>Mejor guión original: Everything Everywhere All at Once.</p>
        </article>
        <article>
          <img alt="BAFTA" :src="require(`../assets/BAFTA.jpg`)" />
          <h4>Premios BAFTA (England, UK) 2023</h4>
            <p>Mejor película del año: All Quiet on the Western Front.</p>
            <p>Mejor interpretación por un actor en el papel principal: Austin Butler (Elvis).</p>
            <p>Mejor interpretación por una actriz en el papel principal: Cate Blanchett (Tár).</p>
            <p>Mejor dirección: Edward Berger(All Quiet on the Western Front).</p>
            <p>Mejor guión original: The Banshees of Inisherin.</p>
        </article>
        <article>
          <img alt="Emmys" src="../assets/Emmys.jpeg" />
          <h4>Premios Emmy (Primetime Emmy Awards, USA) 2023</h4>
            <p>Mejor serie de drama: Andor, Better Call Saul, La Casa del Dragón, Succession, The Crown, The Last of Us, The White Lotus y Yellowjackets.</p>
            <p>Mejor serie de comedia: Abbott Elementary, Barry, Jury Duty, Only Murders in the Building, Ted Lasso, The Bear, The Marvelous Mrs. Maisel y Wednesday.</p>
        </article>
      </div>
    </aside>
</template>
  
<script>
  export default {
    name: "aside_component"
  }
</script>
  
<style>
  aside {
    background-color: #00ffcc;
    padding: 14px;
    border-radius: 5px;
    box-shadow: #00ffcc 0 0 12px;
    float: left;
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    color: #04042e
  }
  
  aside h3 {
    padding-top: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    padding-left: 25px;
    font-weight: bold;

}

aside .artículosAside {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #blñack;
    margin: 10px 0 10px 0;
}

aside .artículosAside article h4{
    width: auto;
    height: auto;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background-color: none;
}

aside .artículosAside article img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}
</style>