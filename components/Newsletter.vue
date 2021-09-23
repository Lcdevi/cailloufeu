<template>
  <div id="newsletter">
    <p><span>Inscription newsletter → </span> </p>
    <form class="contact-form" ref="form" @submit.prevent="sendEmail">
      <input class="input" type="email" name="email" placeholder="email">
      <button type="submit" value="Send">envoyer</button>
    </form>
    <p v-if="validate" id="validatemessage"> Inscription envoyée !</p>  
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
#newsletter {
  border-left: 2px solid $frame;
  border-right: 2px solid $frame;
  border-bottom: 2px solid $frame;
  display: flex;
  font-family: $text;
  padding: 20px 0;
  justify-content: center;
  & span {
    font-weight: 700;
  }
  & input {
    border: 1px solid $frame;
    height: 20px;
    padding: 3px;
    margin: 0 4px;
    border-radius: 0px;
  }
  & button {
    background-color: white;
    border: 1px solid $frame;
    height: 20px;
    padding: 0 3px;
    font-weight: 700;
    color: $blue;
    cursor: pointer;
    margin: 0 3px 0 0;
  }
  & button:hover {
    background-color: $frame;
    color: white;
  }
  & #validatemessage {
    color: $green;
  }
}

///////////// IPADPRO 1024 PX /////////////////////

@media (max-width: 1024px) {

}


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {

  #newsletter {
    border: none;
    font-size: 14px;
    flex-direction: column;
    background-color: $blue;
    color: white;
    padding: 20px;
    & input {
      margin: 4px 0;
      width: 100%;
      height: 34px;
      border-radius: 0px;
    }
    & button {
      width: 74px;
      height: 29px;
      color: $blue;
      background-color: white;
    }
  }

}
</style>
