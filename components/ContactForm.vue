<template>
  <div class="contactform-container">
    <form class="contact-form">
      <label>nom</label>
      <input class="input" type="text" name="user_name">
      <label>adresse email</label>
      <input class="input" type="email" name="user_email">
      <label>sujet</label>
      <input class="input" type="text" name="user-subject">
      <label>message</label>
      <textarea name="message"></textarea>
      <!-- <input type="submit" value="Envoyer"> -->
      <div class="submit">
        <button type="submit" value="Send">envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com';

// export default {
//     mounted() {
//     console.log('this project 1', process.env.TEST_TEST)    
//   },

//   methods: {
//     sendEmail: (e) => {
//       emailjs.sendForm('service_owxtdwe', 'template_g4x6lr1', e.target, 'user_NaM1stgXQWebtXCjHYdox')
//         .then((result) => {
//             console.log('SUCCESS!', result.status, result.text);
//         }, (error) => {
//             console.log('FAILED...', error);
//         });
//     }
//   }
// }
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
  }
</style>