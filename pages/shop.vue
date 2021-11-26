<template>
  <div id="shop">
    <Navbar />
    <ResponsiveNavbar />
      <div id="text">
        <div id="title">
          <div class="trait"></div>
            <h1>shop</h1>
          <div class="trait"></div>
        </div>
        <img src="~/assets/img/shop/image-shop.jpg" alt="photo de l'atelier en noir et blanc">
        <div id="shop-news">
          <div>
            <p>La boutique en ligne est fermée. Une production de papeterie est actuellement en cours à l'atelier et va être mise en ligne mi décembre 2021.</p><br>
            <p>Vous pouvez suivre l'atelier sur <span><a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">instagram</a></span> pour être prévenu.e des prochaines ventes.</p><br><br>
          </div>
        </div>
  
        <!-- <div id="formulaire-newsletter-shop">
          <p id="newsletter">Newsletter</p>
          <form ref="form" class="contact-form" @submit.prevent="sendEmail">
            <label>adresse email</label>
            <input class="input" type="email" name="email">
            <div class="submit">
              <button type="submit" value="Send">envoyer</button>
            </div>
          </form>
          <p v-if="validate" id="validatemessage">Inscription envoyée, merci !</p>  
        </div> -->


        <img src="~/assets/img/shop/image-shop-ateliervoltaire.jpg" alt="boutique atelier voltaire">

        <div id="revendeur">
          <div>
            <h3>Vous trouverez mes carnets dans ces boutiques :</h3>
          </div>
          <div id="boutiques"><br>
            <div>
              <h4>PARIS</h4>
              <p><a href="https://www.instagram.com/atelier.voltaire.paris/" target="_blank" rel="noopener">Atelier Voltaire</a><br>
              81 Bd Voltaire, 75011 Paris</p>
            </div>
            <br>
            <div>
              <h4>TOULOUSE</h4>
              <p><a href="https://maaadboutique.com/" target="_blank" rel="noopener">MAAAD</a><br>
              2bis Rue du Puits Vert, 31000 Toulouse</p>
            </div>          
          </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      validate: false,
      unvalidate: false
    }
  },

  methods: {
    sendEmail(e) {
      emailjs.sendForm("service_owxtdwe", "template_4o27f7p", this.$refs.form, "user_NaM1stgXQWebtXCjHYdox")
        .then((result) => {
            console.log('SUCCESS!', result.text);
            // alert("message envoyé")
            this.validate = true;
        }, (error) => {
            console.log('FAILED...', error.text);
            // alert("ATTENTION votre message n'a pas pu être envoyé")
            this.unvalidate = true;
        });
        e.target.reset();
    }
  }


}
</script>

<style lang="scss" scoped>
#shop {
  & #text {
    font-family: $text;
    text-align: center;
    border-left: 2px solid $frame;
    border-right: 2px solid $frame;
    border-bottom: 2px solid $frame;
    padding: 0 0 120px 0;
      & #title {
        display: flex;
        justify-content: center;
        height: 62px;
        padding: 103px 0 80px 0;
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
    & img {
      width: 240px;
      margin: 0 0 40px 0;
    }
    & #shop-news {
      justify-content: center;
      display: flex;

      & div {
        width: 25rem;
      }
    }

    // & #formulaire-newsletter-shop {
    //   margin-bottom: 62px;
    // }

    & span {
      text-decoration: underline;
    }
    // & #newsletter {
    //   font-family: $text;
    //   font-size: 28px;
    // }
    & .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          & label {
            margin: 20px 0 5px 0px;
            font-size: 14px;
          }
          & .input {
            height: 38px;
            width: 340px;
          }
          & textarea, .input{
            border: 1px solid $frame;
            padding: 10px;
          }
          & textarea {
            height: 160px;
          }
          & .submit {
            display: flex;
            justify-content: center;
            & button {
              background-color: inherit;
              border: 1px solid $frame;
              width: 80px;
              height: 30px;
              cursor: pointer;
              margin: 20px 0;
              font-family: inherit;
              color: $blue;
              font-weight: 700;
              font-size: 16px;
            }
          & button:hover {
              color: white;
              background-color: $frame;
            }
          }
        }
        & #validatemessage {
          // display: none;
          color: rgb(27, 138, 99);
          font-weight: 700;
        }



    & #revendeur {
      & a {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 880px) {

  #shop {
    & #text {
      & img {
        width: 200px;
      }
      & p {
        margin-right: 30px;
        margin-left: 30px;
        font-size: 15px;
      }
    }
  }


}

@media (max-width: 414px) {

  #shop {
    #text {
      border: none;
      #title {
        h1 {
          font-size: 36px;
        }
      }
    }
  }


}

</style>