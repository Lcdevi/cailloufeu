<template>
<div id="navbar">
  <div id="logo">
    <img src="~/assets/img/logo-cailloufeu.JPG" alt="logo caillou feu laura caillaux">
    <div id="trait"></div>
  </div>

  <div id="navinfo">
    <div id="title">
      <h1>CAILLOU FEU</h1>
      <div id="description">
        <div>
          <p>Drawing / Publishing / Bookbinding</p>
        </div>
        <div id="pointilles"></div>
        <div>
          <p>Dessin / Edition / Reliure</p>
        </div>
      </div>
      <div id="trait2"></div>
    </div>
    <div id="menu">
      <div id="categories">
        l'atelier
        cours
        projets
        shop
      </div>
      <div id="protocole-badaboum">
        PROTOCOLE BadabOUm
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
  #navbar {
    border: 2px solid $frame;
    height: 255px;
    display: flex;

    & #logo {
      display: flex;

      & img {
        width: 240px;
        // height: auto;
        // border-right: 2px solid $frame;
      }

      & #trait {
        background-color: $frame;
        width: 2px;
        height: 251px;
      }
    }

    & #navinfo {

      width: 100%;

      & #title {

        & h1 {
          font-size: 77px;
          font-weight: 400;
          letter-spacing: 9px;
          margin: 20px 0 10px 20px;
        }

        & #trait2 {
          background-color: $frame;
          width: 100%;
          height: 2px;

        }

        & #description {
          display: flex;
          justify-content: space-between;
          margin: 10px 20px 20px 20px;
          font-family: 'Quicksand', sans-serif;
          font-size: 28px;

          & #pointilles {
            height: 26px;
            width: 100px;
            border-bottom: 1px dashed $blue;
            flex-grow: 1;
            margin: 0 5px;
          }

        }

      }

      & #menu {
        display: flex;
      }

    }


  }
</style>