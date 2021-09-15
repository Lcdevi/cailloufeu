<template>
  <div id="dessin">
    <Navbar />
      <div id="main-dessin">
        <div id="fil-ariane">
          <p>
            <NuxtLink to="/">home</NuxtLink> /
            <NuxtLink to="/projets">projets</NuxtLink> /
            le dessin
          </p>
        </div>
        <div id="title">
          <div class="trait"></div>
            <h1>LE DESSIN</h1>
          <div class="trait"></div>
        </div>
        <div id="content-dessin">

<!-- *******************************************
Ces villes là
************************************************ -->

          <div id="cesvillesla" class="projet-content">
            <div>
              <img src="~/assets/img/dessin-cesvillesla01.jpg" alt="dessin laura caillaux ces villes là" id="dessin1">
            </div>
            <div>
              <img src="~/assets/img/dessin-cesvillesla02.jpg" alt="dessin laura caillaux ces villes là" id="dessin2">
            </div>
            <div>
              <img src="~/assets/img/dessin-cesvillesla03.jpg" alt="dessin laura caillaux ces villes là" id="dessin3">
            </div>
            <div id="legende-cesvilles" class="legendes">
              <h1>CES VILLES-LÀ</h1><br>
              <p class="legendes-infos">
                encre de chine, fusain, craie et pierre noire<br>
                56 x 75 cm<br>
                2014-2015<br>
              </p><br>
              <p>
                Ces dessins ont été réalisés entre Paris et Bangkok. Ils représentent ce qui me restait des paysages français à Bangkok, et vice versa.  Là bas comme ici, j’essayais de fixer le souvenir sur le papier.
              </p><br>
              <p class="lien-dessin">
                <a href="http://lauracaillaux.fr/creationartistique/portfolio/ces-villes-la/" target="_blank" rel="noopener noreferrer">
                  > voir plus  
                </a>
              </p>  
            </div>
            <div>
              <img src="~/assets/img/dessin-cesvillesla04.jpg" alt="dessin laura caillaux ces villes là" id="dessin4">
            </div>
          </div>

<!-- *******************************************
Le paysage changeur
************************************************ -->

          <div id="paysagechangeur" class="projet-content">
            <div>
              <img src="~/assets/img/paysagechangeur02.jpg" alt="dessin laura caillaux le paysage changeur" id="dessin1">
            </div>
            <div>
              <img src="~/assets/img/paysagechangeur13.jpg" alt="dessin laura caillaux le paysage changeur" id="dessin2">
            </div>
            <div>
              <img src="~/assets/img/paysagechangeur34.jpg" alt="dessin laura caillaux le paysage changeur" id="dessin3">
            </div>
            <div>
              <img src="~/assets/img/paysagechangeur42.jpg" alt="dessin laura caillaux le paysage changeur" id="dessin4">
            </div>
            <div id="legende-paysagechangeur" class="legendes">
              <h1>LE PAYSAGE CHANGEUR</h1><br>
              <p class="legendes-infos">
                encre de chine<br>
                dimensions variables – environ 12 x 16 cm<br>
                2015<br>
              </p><br>
              <p>
                « le paysage éclipse /
le paysage prison /
le paysage sans air sans lumière sans rires ni saisons /
le paysage glacé des cités ouvrières glacées en plein été comme au cœur de l'hiver /
le paysage éteint /
le paysage sans rien /
le paysage exploité affamé dévoré escamoté /
le paysage charbon /
le paysage poussière /
le paysage cambouis /
le paysage mâchefer /
le paysage châtré gommé effacé relégué et rejeté dans l'ombre » J. Prévert
              </p><br> 
              <p class="lien-dessin">
                <a href="http://lauracaillaux.fr/creationartistique/portfolio/le-paysage-changeur/" target="_blank" rel="noopener noreferrer">
                  > voir plus  
                </a>              </p>  
            </div>
          </div>

<!-- *******************************************
Les hommes masqués
************************************************ -->


        </div>
      </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  #dessin {
  
    #main-dessin {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;
      align-items: center;

      & #fil-ariane {
        // border: 1px solid green;
        display: flex;
        font-family: $text;
        font-size: 18px;
        margin: 30px;
      }

      & #title {
        display: flex;
        justify-content: center;
        height: 62px;
        margin: 0px 0px 40px 0;
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

      & #content-dessin {
        // border: 1px solid green;
        margin: 120px 0 0 0;
        padding: 0 85px;
        width: 100%;

        & .lien-dessin {
          font-style: italic;
          font-weight: 700;
        }

        & img {
          max-width: 500px;
        }

        & .projet-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          margin: 0 0 220px 0;
        }

        & .legendes {
          font-family: $text;
          font-size: 14px;
          line-height: 14px;
          background-color: white;
          padding: 14px 3px 9px 9px;
          border: 1px solid $frame;
          position: absolute;
          width: 350px;
          // color: $blue;

          & h1 {
            font-family: $ff-serif;
          }

          & .legendes-infos {
            font-style: italic;
          }

        }

// *******************************************        
// ********* STYLE PROJETS *******************
// *******************************************


// *****CES VILLES LA ************************
        & #cesvillesla {

          & #legende-cesvilles {
            top: 450px;
            left: 225px;
          }

          & #dessin2 {
            margin-top: 200px;
            margin-left: -45px;
          }

          & #dessin3 {
            max-width: 350px;
            margin-top: 180px;
          }

          & #dessin3 {
            margin: 80px 13px 0 0px;
          }

          & #dessin4 {
            margin: 40px 0 0 0px;
          }

        }

// ***** LE PAYSAGE CHANGEUR ************************
        & #paysagechangeur {

          & #legende-paysagechangeur {
            top: 350px;
            left: 225px;
          }

          & #dessin2 {
            width: 360px;
            margin-top: 144px;
            margin-left: 33px;
          }

          & #dessin3 {
            margin: 200px 13px 0 0px;
          }

          & #dessin4 {
            width: 390px;
            margin: 40px 0 0 0px;
          }

        }


      }

    }
  }
</style>