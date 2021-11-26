<template>
  <div id="atelier">
    <Navbar />
    <ResponsiveNavbar />
    <div id="main-atelier">
      <div id="title">
        <div class="trait"></div>
          <h1>L’atelier</h1>
        <div class="trait"></div>
      </div>
      <div id="informations">
        <div id="bandeau">
          <img src="~/assets/img/bandeau-silex-responsive.jpg" alt="dessin silex à l'encre" id="bandeau-responsive">
          <img src="~/assets/img/bandeau-silex.jpg" alt="dessin silex à l'encre" id="bandeau-desktop">
        </div>
        <div id="main-content">
          <div id="atelier-image" >
            <img src="~/assets/img/atelier-laura-caillaux.jpg" alt="atelier caillou feu laura caillaux">
          </div>

          <div id="atelier-img-responsive">
            <img src="~/assets/img/atelier-laura-caillaux-responsive.jpg" alt="atelier caillou feu laura caillaux">
          </div>
          <div id="text">
            <p>
              L’atelier <em>Caillou Feu</em> est un atelier de reliure, édition, livre d’artiste et dessin basé à Saint-Denis et ouvert sur rdv.
            </p>
          </div>
        </div>
      </div>
      <Adress />
    </div>
    <!-- <Newsletter /> -->
    <Footer />
  </div>
</template>



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

        & #bandeau-responsive {
          display: none;
        }
        & #bandeau-desktop {
          display: block;
        }
        
        & img {
          width: 90vw;
        }

      }

      & #main-content {
        // border: 1px solid blue;
        display: flex;
        margin-top: 140px;
        & #atelier-image{
          & img {
            width: 410px;
            // border-radius: 220px;
            margin-right: 16px;
          }
        } 
        & #atelier-img-responsive {
          display: none;
        }
        & #text {
          width: 410px;
          font-family: $text;
          font-size: 28px;
          line-height: 42px;
          margin-top: 90px;
        }
      }
    }
  }

}



///////////// IPAD 1011 PX /////////////////////

@media (max-width: 1011px) {

  #atelier {
    #main-atelier {
      & #title {
        & h1 {
        }
        & .trait {
        }
      }
      & #informations {
        & #bandeau {      
          & img {
          }
        }
        & #main-content {
          width: 90vw;
          & img {
            width: 45vw;
            margin-right: 20px;
          }
          & #text {
          }
        }
      }
    }
  }
}


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {

  #atelier {
    #main-atelier {
      border: none;
      & #title {
        margin-bottom: 40px;
        & h1 {
          font-size: 36px;
        }
        & .trait {
        }
      }
      & #informations {
        & #bandeau { 
        & #bandeau-responsive {
          display: block;
        }    
        & #bandeau-desktop {
          display: none;
        }   
          & img {
            width: 97vw;
          }
        }
        & #main-content {
          flex-direction: column;
          width: 90vw;
          align-items: center;
          margin-top: 40px;
          & #atelier-image {
            & img {
              display: none;
            }
          }
          & #atelier-img-responsive {
            display: block;
            & img {
              width: 98vw;
              margin: 0;
            }
          }
          & #text {
            width: 90vw;
            font-size: 24px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>