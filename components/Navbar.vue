<template>
<div id="navbar">
  <div id="logo">
    <NuxtLink to="/">
      <img src="~/assets/img/logo-cailloufeu-silex-calame-blu.JPG" alt="logo caillou feu laura caillaux">
    </NuxtLink>
    <div id="trait"></div>
  </div>

  <div id="navinfo">
    <div id="title">
      <div id="h1social">
        <NuxtLink to="/">
          <h1>CAILLOU FEU</h1>
        </NuxtLink>
        <a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">
          <div id="social">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
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
        <p><NuxtLink to="/shop">Shop</NuxtLink></p>
      </div>
      <div id="protocole-badaboum">
        <NuxtLink to="/protocole-badaboum">Protocole Badaboum</NuxtLink>
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
      align-items: center;

      & img {
        width: 240px;
        padding: 20px;
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
          & a:hover {
            font-style: normal;
          }
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
            svg {
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

@media (max-width: 1122px) {
  #navbar {
    #logo {
      display: none;
    }
  }
}

@media (max-width: 880px) {
  #navbar {
    display: none;
  }
}

</style>