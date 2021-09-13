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
    <Footer />
  </div>
</template>

<script>
export default {}
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
      margin: 72px 0 120px 0;
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
      display: flex;
      justify-content: center;

      & #text {
        width: 500px;
        border: 1px solid $frame;
        padding: 35px;
        background-color: white;
        margin-left: -25px;
        margin-top: 45px;
      }

    }


    & img {
      width: 606px;
    }

  }

}

</style>