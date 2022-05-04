<template>
<div id="cours">
  <Navbar />
  <ResponsiveNavbar />
    <div id="main-cours">
      <div id="title">
        <div class="trait"></div>
          <h1>cours</h1>
        <div class="trait"></div>
      </div>


      <div id="cours-content">
<!-- *******************************************
COURS GENERAL
************************************************ -->
        <div class="cours-div">
          <img src="~/assets/img/cours/cours-laura-caillaux.jpg" alt="cours reliure atelier caillou feu laura caillaux">
          <div class="cours-legende" id="cours-legende-general">
            <p>
              L'atelier Caillou Feu propose trois formules différentes :<br><br>
              <span>Cours de reliure</span> pour découvrir, s’initier ou se perfectionner.<br><br>
              <span>Stage</span> pour découvrir et s'initier à 4 reliures différentes.<br><br>
              <span>Workshop</span> pour prototyper, relier et éditer un projet personnel.
            </p>
          </div>
        </div>
<!-- *******************************************
COURS - COURS
************************************************ -->
        <div class="cours-div">
          <div class="cours-legende" id="cours-legende-wecandoo">
              <h2>LES COURS DE RELIURE</h2><br>
              Vous pouvez reserver votre cours avec WeCanDoo. 4 participant.es maximum.<br>Tous niveaux.<br><br>
              <span>Le duo :</span> initiation avec la reliure d'un duo de petits carnets.<br>
              2h / 50€<br><br>
              <span>Le grand carnet : </span> reliure croisée, dos toilé et couverture rigide pour un atelier plus poussé.<br>
              3h / 78€<br><br>
              <span>Le bradel : </span> Création d'un beau carnet toilé avec une technique traditionnelle, la reliure à la bradel.<br>
              4h / 98€<br><br>
              <a href="https://wecandoo.fr/atelier/paris-laura-duo-carnets" target="_blank" rel="noopener noreferrer">
              <span>> reservation duo de carnets</span>
              </a><br>
              <a href="https://wecandoo.fr/atelier/paris-laura-grand-carnet" target="_blank" rel="noopener noreferrer">
              <span>> reservation grand carnet</span>
              </a><br>
              <a href="https://wecandoo.fr/atelier/paris-laura-reliure-bradel" target="_blank" rel="noopener noreferrer">
              <span>> reservation le bradel</span>
              </a><br>
          </div>
          <img src="~/assets/img/cours/cours-laura-caillaux-stage.jpg" alt="cours reliure atelier caillou feu laura caillaux">
        </div>
<!-- *******************************************
COURS - STAGE
************************************************ -->
        <div class="cours-div">
          <img src="~/assets/img/cours/cours-laura-caillaux-workshop.jpg" alt="stage reliure atelier caillou feu laura caillaux">
          <div class="cours-legende" id="cours-legende-stage">
              <h2>STAGE DE RELIURE</h2><br>
              Sur deux journées, l’occasion de découvrir, relier et s'initier à 4 types de reliures différentes.<br><br>
              <ul>
                <li>copte</li>
                <li>bradel dos droit</li>
                <li>leporello</li>
                <li>couture croisée dos toilé</li>
              </ul>
              <br>
              materiel est fourni<br>
              2 journées / 16h / 280€<br><br>
            <NuxtLink to="/inscription">
            <span>> formulaire inscription stage</span>
            </NuxtLink>          
            </div>
        </div>
<!-- *******************************************
COURS - WORKSHOP
************************************************ -->
        <div class="cours-div">
          <div class="cours-legende" id="cours-legende-workshop">
            <h2>WORKSHOP EDITION D’ART</h2><br>
            Pendant deux journées, et selon le projet préalablement étudié, vous éditerez votre édition d’art ou auto-édition.<br>
            exemple : portfolio, leporello, boite pour photographies, chemise pour gravure, fanzine...<br>
            2 participant.es maximum.<br>
            Tous les matériaux sont fournis.
            (sauf cuir ou autre matériau particulier)<br><br>
            2 journées / 16h / 280€<br><br>
            <NuxtLink to="/inscription">
            <span>> formulaire inscription workshop</span>
            </NuxtLink>
          </div>
          <div id="ineshosni-div">
            <img src="~/assets/img/cours/cours-laura-caillaux-workshop-hosni.jpg" alt="workshop reliure atelier caillou feu laura caillaux">
            <p id="legende-ines"><span>Le ciel est gris, maman</span> de <a href="http://www.ineshosni.com/" target="_blank" rel="noopener noreferrer"> Inès Hosni </a> - 2017</p>
          </div>
        </div>
      </div>
    <Adress />
    </div>
  <Newsletter />
  <Footer />
</div>
</template>

<style lang="scss" scoped>
  #cours {
  
    #main-cours {
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

      & #cours-content {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;

        & img {
          width: 600px;
        }

        & .cours-div {
          // border: 1px solid green;
          display: flex;
          width: 80%;
          margin: 0 0 157px 0;
          align-items: center;
          justify-content: center;

          & .cours-legende {
            z-index: 100000000;
            border: 1px solid $frame;
            padding: 45px;
            font-family: $text;
            background-color: white;

            & span {
             font-weight: 700;
            }

          }

          & #cours-legende-general {
            width: 414px;
            margin-left: -80px;
            font-size: 18px;
          }

          & #cours-legende-wecandoo {
            width: 360px;
            margin-right: -40px;
            margin-bottom: -154px;
          }
          & #cours-legende-stage {
            width: 380px;
            margin: 1px 1px -106px -57px;
          }
          & #cours-legende-workshop {
            width: 400px;
            margin: 1px -108px -110px 1px;
          }
          & #ineshosni-div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            & #legende-ines {
                font-family: $text;
                font-size: 14px;
                & span {
                  font-style: italic;
                }
              }
          }
        }

      }

    }
  }


/////////////////////// RESPONSIVE /////////////////////////


////////////// IPAD PRO //////////////////

@media (max-width: 1144px) {
  #cours {
  
    #main-cours {

      & #cours-content {
 

        & img {
          // border: 1px solid red;
          width: 470px;
        }

        & .cours-div {

          & #cours-legende-wecandoo {
            margin-bottom: -48px;
          }
          & #cours-legende-stage {
            margin-bottom: -53px;
          }
        }

      }

    }
  }

}


////////////// IPAD //////////////////

@media (max-width: 1011px) {
  #cours {
  
    #main-cours {

      & #cours-content {
 

        & img {
          // border: 2px solid green;
          width: 470px;
        }

        & .cours-div {
          flex-direction: column;

          & #cours-legende-general {
            margin-left: 0;
          }
          & #cours-legende-wecandoo {
            margin-right: 0;
          }
          & #cours-legende-stage {
            margin: -50px;
          }
          & #cours-legende-workshop {
            margin: 0 0 -30px 0;
          }
        }

      }

    }
  }

}


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {
  #cours {
  
    #main-cours {
      border: none;

      #title {
        h1 {
          font-size: 36px;
        }
      }

      & #cours-content {
 

        & img {
          // border: 1px solid red;
          width: 90vw;
        }

        & .cours-div {

          & #cours-legende-general, #cours-legende-wecandoo, #cours-legende-stage, #cours-legende-workshop {
            width: 90vw;
            margin: 0;
          }

        }

      }

    }
  }

}

</style>