<template>
  <div class="contactform-container">
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>nom</label>
      <input class="input" type="text" name="name">
      <label>adresse email</label>
      <input class="input" type="email" name="email">
      <label>sujet</label>
      <input class="input" type="text" name="subject">
      <label>message</label>
      <textarea name="message"></textarea>
      <!-- <input type="submit" value="Envoyer"> -->
      <div class="submit">
        <button type="submit" value="Send">envoyer</button>
      </div>
    </form>
    <p v-if="validate" id="validatemessage">Votre message a bien été envoyé, merci !</p>  
    <Adress />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  mounted() {
    // console.log(process.env.YOUR_SERVICE_ID)
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_USER_ID)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("message envoyé")
        }, (error) => {
            console.log('FAILED...', error);
            alert("ATTENTION votre message n'a pas pu être envoyé")
        });
        e.target.reset();
    }
  },

  data() {
    return {
      validate: false
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
      color: rgb(27, 138, 99);
      font-weight: 700;
    }
  }
</style>