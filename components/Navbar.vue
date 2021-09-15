<template>
<div id="navbar">
  <div id="logo">
    <img src="~/assets/img/logo-cailloufeu.JPG" alt="logo caillou feu laura caillaux">
    <div id="trait"></div>
  </div>

  <div id="navinfo">
    <div id="title">
      <div id="h1social">
        <h1>CAILLOU FEU</h1>
        <a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">
          <div id="social">
            <img src="~/assets/img/instagram-brands.svg" alt="logo instagram">
            <h3>instagram</h3>
          </div>
        </a>
      </div>
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
        <p><NuxtLink to="/">L’atelier</NuxtLink></p>
        <p><NuxtLink to="/projets">Projets</NuxtLink></p>
        <p><NuxtLink to="/cours">Cours</NuxtLink></p>
        <p><NuxtLink to="/contact">Contact</NuxtLink></p>
        <p>Shop</p>
      </div>
      <div id="protocole-badaboum">
        <NuxtLink to="/protocole-badaboum">Protocole BadabOUm</NuxtLink>
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
    
    & a:hover {
      font-style: italic;
    }

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

        & #h1social {
          // border: 1px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & h1 {
            font-size: 77px;
            font-weight: 400;
            letter-spacing: 9px;
            margin: 20px 0 10px 20px;
          }

          & #social {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            margin-right: 20px;
            margin-bottom: -17px;
            flex-direction: column;
            h3 {
              font-family: 'Quicksand', sans-serif;
              font-size: 14px;
              font-weight: 700; 
            }
            img {
              width: 25px;
              color: $blue;
            }
          }
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
          font-size: 18px;
          font-weight: 300;

          & #pointilles {
            height: 18px;
            width: 100px;
            border-bottom: 1px dashed #605b8d;
            flex-grow: 1;
            margin: 0 5px;
          }

        }

      }

      & #menu {
        display: flex;
        font-family: $text;
        font-size: 28px;
        justify-content: space-between;
        height: 91px;
        align-items: center;
        margin: 0 20px 0 0;

        & #categories {
          display: flex;

          & p {
            margin: 20px;
          }

        }

      }

    }


  }
</style>