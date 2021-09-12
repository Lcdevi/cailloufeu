<template>
<div id="livre">
  <Navbar />
    <div id="main-livre">
      <!-- <div id="title">
        <div class="trait"></div>
          <h1>Le livre</h1>
        <div class="trait"></div>
      </div> -->
      <div id="fil-ariane">
        <p>
          <NuxtLink to="/">home</NuxtLink> /
          <NuxtLink to="/projets">projets</NuxtLink> /
          le livre
        </p>
      </div>
    </div>
  <Footer />
</div>
</template>

<style lang="scss" scoped>
  #livre {
  
    #main-livre {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;

      & #fil-ariane {
        // border: 1px solid green;
        display: flex;
        font-family: $text;
        font-size: 18px;
        margin: 30px;
      }

      // & #title {
      //   display: flex;
      //   justify-content: center;
      //   height: 62px;
      //   margin: 72px 0;
      //   align-items: center;
      //   & h1 {
      //     font-family: $text;
      //     color: $blue;
      //     font-size: 51px;
      //     font-weight: 400;
      //     text-transform: uppercase;
      //   }
      //   & .trait {
      //     width: 62px;
      //     height: 1px;
      //     background-color: $frame;
      //     margin: 10px;
      //   }
      // }

    }
  }
</style>