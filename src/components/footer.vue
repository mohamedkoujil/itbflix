<template>
    <footer id="Contacto">
      <div class="contacto">
        <div class="RRSS">
          <a href="https://es-es.facebook.com/"><img :src="require(`../assets/facebook.png`)"></a>
          <a href="https://twitter.com/"><img :src="require(`../assets/twitter.png`)"></a>
          <a href="https://www.instagram.com/"><img :src="require(`../assets/instagram.png`)"></a>
        </div>
        <address>
          <p>Institut Tecnològic de Barcelona 08076194 · c/ Aiguablava 121, 08033 Barcelona · Tlf: 937 070 020 · info@itb.cat</p>
        </address>
        <div class="copyright">
          <p>© Copyright ITBFlix Limited 2023</p>
        </div>
      </div>
    </footer>
</template>
  
<script>
  export default {
    name: "footer_component"
  }
</script>
  
<style>
footer {
    width: 100%;
    height: auto;
    padding-top: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
}

footer .contacto {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
 }

footer .contacto .RRSS {
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
 }

footer .contacto .RRSS img {
  width: 50px;
}

footer .contacto address {
    width: 30%;
    height: auto;
    text-align: center;
    color: white;
 }

footer .contacto .copyright {
    width: 30%;
    height: auto;
    text-align: center;
    color: white
 }
</style>  