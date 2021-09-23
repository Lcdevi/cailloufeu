<template>
  <div id="inscription">
    <Navbar />
    <div id="main-inscription">
      <div id="title">
        <div class="trait"></div>
          <h1>inscription stage & workshop</h1>
        <div class="trait"></div>
      </div>
      <div id="inscription-pres">
        <p>Il n'y a pas de session prévue pour l'instant !</p><br>
        <p>Vous pouvez remplir ce formulaire pour être prévenu-e des prochaines sessions.</p>
      </div>
        <div id="inscription-formulaire">
          <form class="inscription-form" @submit.prevent="sendEmail">
            <label>nom / prénom</label>
            <input class="input" type="text" name="name">
            <label>adresse email</label>
            <input class="input" type="email" name="email">
            <label>Je suis interessé-e par</label>
            <div>
              <input type="checkbox" id="stage" name="stage">
              <label for="stage">stage</label>
            </div>
            <div>
              <input type="checkbox" id="workshop" name="workshop">
              <label for="workshop">workshop</label>
            </div>
            <label>message (facultatif)</label>
            <textarea name="message"></textarea>
            <!-- <input type="submit" value="Envoyer"> -->
            <div class="submit">
              <button type="submit" value="Send">envoyer</button>
            </div>
          </form>
        </div>
        <Adress />
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  mounted() {
    console.log(process.env.YOUR_SERVICE_ID)
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm("service_dapgoeh", "template_isqxedl", e.target, "user_Px6NrRyRJfhGW63Y8PmNy")
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("message envoyé")
        }, (error) => {
            console.log('FAILED...', error);
            alert("ATTENTION votre message n'a pas pu être envoyé")
        });
        e.target.reset();
    }
  }
}
</script>


<style lang="scss" scoped>

#inscription {
  
  #main-inscription {
    display: flex;
    flex-direction: column;
    border-right: 2px solid $frame;
    border-bottom: 2px solid $frame;
    border-left: 2px solid $frame;
    padding-bottom: 100px;
    justify-content: center;
    align-items: center;

    & #inscription-pres {
      text-align: center;
      font-family: $text;
    }

    & #inscription-formulaire {
      font-size: 16px;
      font-family: $text;
      // border: 1px solid red;
      margin: 40px 0;
      width: 500px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      & .inscription-form {
      display: flex;
      flex-direction: column;
      & span {
        font-weight: 700;
      }
      & label {
        margin: 20px 0 5px 0px;
      }
      & .input {
        height: 38px;
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

</style>