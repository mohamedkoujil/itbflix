<template>
    <aside>
      <h3>Premios y festivales</h3>
      <div class="artículosAside">
        <article>
          <img alt="Oscars" :src="require(`../assets/Oscars.jpg`)" />
          <h4>Premios Oscar (Academy Awards, USA) 2023</h4>
          <ul>
            <li>Mejor película del año: Everything Everywhere All at Once.</li>
            <li>Mejor interpretación por un actor en el papel principal: Brendan Fraser (The Whale).</li>
            <li>Mejor interpretación por una actriz en el papel principal: Michelle Yeoh (Everything Everywhere All at Once).</li>
            <li>Mejor dirección: Daniel Kwan, Daniel Scheinert (Everything Everywhere All at Once).</li>
            <li>Mejor guión original: Everything Everywhere All at Once.</li>
          </ul>
        </article>
        <article>
          <img alt="BAFTA" :src="require(`../assets/BAFTA.jpg`)" />
          <h4>Premios BAFTA (England, UK) 2023</h4>
          <ul>
            <li>Mejor película del año: All Quiet on the Western Front.</li>
            <li>Mejor interpretación por un actor en el papel principal: Austin Butler (Elvis).</li>
            <li>Mejor interpretación por una actriz en el papel principal: Cate Blanchett (Tár).</li>
            <li>Mejor dirección: Edward Berger(All Quiet on the Western Front).</li>
            <li>Mejor guión original: The Banshees of Inisherin.</li>
          </ul>
        </article>
        <article>
          <img alt="Emmys" src="../assets/Emmys.jpeg" />
          <h4>Premios Emmy (Primetime Emmy Awards, USA) 2023</h4>
          <ul>
            <li>Mejor serie de drama: Andor, Better Call Saul, La Casa del Dragón, Succession, The Crown, The Last of Us, The White Lotus y Yellowjackets.</li>
            <li>Mejor serie de comedia: Abbott Elementary, Barry, Jury Duty, Only Murders in the Building, Ted Lasso, The Bear, The Marvelous Mrs. Maisel y Wednesday.</li>
            <li>Mejor actor en una serie de drama: Bob Odenkirk (Better Call Saul), Brian Cox(Succession), Jeff Bridges(The Old Man), Jeremy Strong (Succession), Kieran Culkin (Succession) y Pedro Pascal (The Last of Us).</li>
            <li>Mejor actriz en una serie de drama: Bella Ramsey (The Last of Us), Elisabeth Moss (The Handmaid's Tale), Keri Russell (The Diplomat), Melanie Lynskey (Yellowjackets), Sarah Snook (Succession) y Sharon Horgan (Bad Sisters).</li>
            <li>Mejor actor en una serie de comedia: Bill Hader (Barry), Jason Segel (Shrinking), Jason Sudeikis (Ted Lasso), Jeremy Allen White (The Bear) y Martin Short (Only Murders in the Building).</li>
            <li>Mejor actriz en una serie de comedia: Christina Applegate (Dead to Me), Jenna Ortega (Wednesday), Natasha Lyonne (Poker Face), Quinta Brunson (Abbott Elementary) y Rachel Brosnahan (The Marvelous Mrs. Maisel).</li>
            <li>Mejor director en una serie de drama: Benjamin Caron (Andor), Dearbhla Walsh (Bad Sisters), Lorene Scafaria (Succession), Mark Mylod (Succession), Andrij Parekh (Succession), Peter Hoar (The Last of Us) y Mike White (The White Lotus).</li>
            <li>Mejor director en una serie de comedia: Bill Hader (Barry), Declan Lowney (Ted Lasso), Christopher Storer (The Bear), Amy Sherman-Palladino (The Marvelous Mrs. Maisel), Mary Lou Belli (The Ms. Pat Show) y Tim Burton (Wednesday).</li>
          </ul>
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
    margin-top: 80px;
  }
  
  aside h3 {
    padding-top: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    padding-left: 25px;
    font-weight: bold;
    color: black;
    text-align: center;

}

aside .artículosAside {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #CCC;
    margin: 10px 0 10px 0;
}

aside .artículosAside article h4{
    width: auto;
    height: auto;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    text-align: center;
    background-color: none;
}

aside .artículosAside article ul li {
    width: auto;
    height: auto;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    list-style: none;
}

aside .artículosAside article img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}
</style>