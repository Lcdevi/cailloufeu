<template>
  <div id="atelier">
    <Navbar />
    <div id="main-atelier">
      <div id="title">
        <div class="trait"></div>
          <h1>L’atelier</h1>
        <div class="trait"></div>
      </div>
      <div id="informations">
        <div id="bandeau">
          <img src="~/assets/img/bandeau-silex.jpg" alt="">
        </div>
        <div id="main-content">
          <div>
            <img src="~/assets/img/atelier-laura-caillaux.jpg" alt="atelier caillou feu laura caillaux">
          </div>
          <div id="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas error, delectus quod eveniet laborum ratione ea, sit voluptas eius officia ipsum odio dolores facere enim reprehenderit velit explicabo. Est?
            Maxime, dicta aperiam in id at possimus, perspiciatis delectus quam omnis optio, minima rem.</p><br>
            <p>Totam quisquam voluptates suscipit at aliquid nostrum in quod, commodi, iusto maxime, adipisci minima minus ullam?
            Architecto alias neque dolores ea id. Numquam maiores libero aliquam amet distinctio, quos quidem tempore laborum iure harum, cupiditate repellendus impedit facilis perferendis autem! A voluptatibus nihil nisi dolorum libero.
            </p><br>
            <p>Totam quisquam voluptates suscipit at aliquid nostrum in quod, commodi, iusto maxime, adipisci minima minus ullam?
            Architecto alias neque dolores ea id. Numquam maiores libero aliquam amet distinctio, quos quidem tempore laborum iure harum, cupiditate repellendus impedit facilis perferendis autem! A voluptatibus nihil nisi dolorum libero.
            </p>
          </div>
        </div>
      </div>
      <Adress />
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
// import adress from '../components/adress.vue'
// export default {
//   components: { adress },}
</script>


<style lang="scss" scoped>

#atelier {
  
  #main-atelier {
    display: flex;
    flex-direction: column;
    border-right: 2px solid $frame;
    border-bottom: 2px solid $frame;
    border-left: 2px solid $frame;
    padding-bottom: 100px;

    & #title {
      display: flex;
      justify-content: center;
      height: 62px;
      margin: 72px 0 100px 0;
      align-items: center;
      & h1 {
        font-family: $text;
        color: $blue;
        font-size: 51px;
        font-weight: 400;
        text-transform: uppercase;
      }
      & .trait {
        width: 62px;
        height: 1px;
        background-color: $frame;
        margin: 10px;
      }
    }

    & #informations {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;

      & #bandeau {
        
        & img {
          width: 90vw;
        }

      }

      & #main-content {
        // border: 1px solid blue;
        display: flex;
        margin-top: 140px;
        & img {
          width: 410px;
          border-radius: 220px;
          margin-right: 100px;
        }
        & #text {
          width: 410px;
        }
      }
    }
  }

}

</style>