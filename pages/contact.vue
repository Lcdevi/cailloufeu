<template>
<div id="contact">
  <Navbar />
    <div id="main-contact">
      <div id="title">
        <div class="trait"></div>
          <h1>Contact</h1>
        <div class="trait"></div>
      </div>

      <div id="contact-content">
<!-- *******************************************
PRESENTATION
************************************************ -->
        <div id="contact-pres">
          <p>Vous avez un projet de reliure, édition d’art, auto-édition, fanzine, emboitage, cartonnage... ?<br>
          Vous êtes interessé-e-s par les cours et souhaitez des informations complémentaires ?<br>
          Vous souhaitez en savoir plus sur mon activité dessinée ?<br>
          N’hesitez pas à m’écrire par mail</p>
        </div>
<!-- *******************************************
EMAIL
************************************************ -->
<h2>bonjour@cailloufeu.com</h2>
<!-- *******************************************
FORMULAIRE
************************************************ -->
        <div id="contact-pres">
          <p>Ou utilisez ce formulaire de contact.<br>
Je me ferais un plaisir de vous répondre au plus vite !</p>
        </div>
        <contact-form>
        </contact-form>
      </div>
    </div>
  <Newsletter />
  <Footer />
</div>
</template>

<style lang="scss" scoped>
  #contact {
  
    #main-contact {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;
      font-family: $text;

      & #contact-content {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;

        & #contact-pres {
          // border: 1px solid green;
          width: 80%;
          text-align: center;
          // margin: 0 0 40px 0;
        }

        & h2 {
          font-size: 48px;
          font-weight: 400;
          margin: 40px 0;
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


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {
  #contact {
  
    #main-contact {
      border: 0;
    

      & #contact-content {
     

        & #contact-pres {
          width: 90vw;
        }

        & h2 {
          font-size: 30px;
        }

      }

      & #title {

        & h1 {

        }
        & .trait {

        }
      }

    }
  }

}
</style>