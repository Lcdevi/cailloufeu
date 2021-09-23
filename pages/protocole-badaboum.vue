<template>
<div id="protocole">
  <Navbar />
    <div id="main-protocole">
      <div id="title">
        <div class="trait"></div>
          <h1>protocole Badaboum</h1>
        <div class="trait"></div>
      </div>
      <div id="protocole-content">
        <div id="protocole-pres">
          <p>Atelier de narration en bande dessinée<br>
          pour les enfants du CE1 au CM2</p>
        </div>
        <div id="protocole-images">
          <div>
            <img src="~/assets/img/protocole/protocole-badaboum-02.jpg" alt="photo d'un atelier protocole badaboum" id="image01">
          </div>
          <div id="legende">
            <p>L’atelier <span>Protocole BADABOUM</span> est une invitation à construire une histoire en bande dessinée, penser et réaliser sa couverture, puis finaliser sa création en reliant les pages et la couverture sous forme de livre broché.<br><br>
            Animé par deux intervenants, Jonathan Daviau, auteur-illustrateur et Laura Caillaux, artisan relieuse et illustratrice.<br><br>
            N’hesitez pas à nous contacter pour avoir plus d’informations !<br><br>
            email: <span>jonathan.daviau@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  <Newsletter />
  <Footer />
</div>
</template>

<style lang="scss" scoped>
  #protocole {
  
    #main-protocole {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;

      & #protocole-content {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $text;

        & img {
          width: 350px;
        }

        & #protocole-pres {
          margin: 0px 0 102px 0;
          text-align: center;
          font-size: 22px;
          font-style: italic;
        }

        & #protocole-images {
          // border: 1px solid green;
          width: 96vw;
          display: flex;
          flex-wrap: wrap;
          // position: relative;
          justify-content: center;

          & #legende {
            width: 400px;
            border: solid 1px $frame;
            background-color: white;
            z-index: 100000;
            padding: 40px;
            // position: absolute;
            top: 40px;
            left: 309px;
            margin-left: 20px;
            height: 100%;
            
            
            & span {
              font-weight: 700;
            }

          }

        }

      }

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

    }
  }


/////////////////////// RESPONSIVE /////////////////////////


////////////// IPAD PRO //////////////////

@media (max-width: 414px) {


  #protocole {
  
    #main-protocole {
      border: none;


      & #protocole-content {
      

        & img {
        }

        & #protocole-pres {
  
        }

        & #protocole-images {
          & img {
            width: 90vw;
          }
   

          & #legende {
            width: 90vw;
            margin: 0;
       
            
            
            & span {
            }

          }

        }

      }

      & #title {

        & h1 {
          text-align: center;
 
        }
        & .trait {

        }
      }

    }
  }

}
</style>