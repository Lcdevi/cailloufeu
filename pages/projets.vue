<template>
<div id="projets">
  <Navbar />
  <ResponsiveNavbar />
    <div id="main-projets">
      <div id="title">
        <div class="trait"></div>
          <h1>Projets</h1>
        <div class="trait"></div>
      </div>
      <div id="content-projects">
        <div>
          <NuxtLink to="/le-livre">
            <img src="~/assets/img/projets/silex_plume-ledessin.jpg" alt="dessin silex pour le rubrique le livre">
            <p>le livre</p>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/le-dessin">
          <img src="~/assets/img/projets/silex_plume-lelivre.jpg" alt="dessin silex pour rubrique le dessin">
          <p>le dessin</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  <Newsletter />
  <Footer />
</div>
</template>



<style lang="scss" scoped>
  #projets {
  
    #main-projets {
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

      & #content-projects {
        display: flex;
        // border: 1px solid red;
        font-family: $text;
        font-size: 35px;
        font-weight: 300;
        justify-content: center;
        margin: 40px 0;

        & div {
          // border: 1px solid green;
          margin: 0 115px;
          display: flex;
          flex-direction: column;
          // align-items: center;
        }

        & img {
          width: 238px;
          margin: 0 0 30px 0;
        }

        & p {
          text-align: center;
        }
      }

    }
  }

///////////// IPAD 975 PX /////////////////////

@media (max-width: 975px) {
  #projets {
    #main-projets {
      & #title {
        & h1 {       
        }
        & .trait {
        }
      }
      & #content-projects {
        & div {
          margin: 0 10px;
        }
        & img {
          width: 40vw;
          margin: 0;
        }
        & p {
        }
      }
    }
  }
}


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {
  #projets {
    #main-projets {
      border: none;
      & #title {
        margin-bottom: 70px;
        & h1 {     
          font-size: 36px;  
        }
        & .trait {
        }
      }
      & #content-projects {
        // border: 1px solid red;
        flex-direction: row;
        margin: 0;
        font-size: 28px;
        justify-content: space-around;
        & div {
          align-items: center;
          margin: 20px 0;
        }
        & img {
          width: 38vw;
        }
        & p {
        }
      }
    }
  }
}
</style>