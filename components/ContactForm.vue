<template>
  <div class="contactform-container">
  <form class="contact-form" ref="form" @submit.prevent="sendEmail">
      <label>nom</label>
      <input class="input" type="text" name="name">
      <label>adresse email</label>
      <input class="input" type="email" name="email">
      <label>sujet</label>
      <input class="input" type="text" name="subject">
      <label>message</label>
      <textarea name="message"></textarea>
      <div class="submit">
        <button type="submit" value="Send">envoyer</button>
      </div>
  </form>
    <p v-if="validate" id="validatemessage">Votre message a bien été envoyé, merci !</p>  
    <p v-if="unvalidate">Il y a eu un problème, veuillez recommencer !</p>
    <Adress />
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

  mounted() {
    console.log(process.env.YOUR_SERVICE_ID)
  },

  methods: {
    sendEmail(e) {
      emailjs.sendForm("service_dapgoeh", "template_6835ge7", this.$refs.form, "user_Px6NrRyRJfhGW63Y8PmNy")
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
  .contactform-container {
    // border: 1px solid red;
    margin: 40px 0;
    width: 500px;
    & .contact-form {
      display: flex;
      flex-direction: column;
      & label {
        margin: 20px 0 5px 0px;
        font-size: 14px;
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
    & #validatemessage {
      // display: none;
      color: $green;
      font-weight: 700;
    }
  }


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {
  .contactform-container {
    width: 90vw;

    & .contact-form {
   
      & label {
   
      }
      & .input {
      }
      & textarea, .input{
       
      }
      & textarea {
       
      }
      & .submit {
      
        & button {
        
        }
      & button:hover {
         
        }
      }
    }
    & #validatemessage {

    }
  }
}
</style>