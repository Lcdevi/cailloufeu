<template>
  <div id="shop">
    <Navbar />
      <div id="text">
        <div id="title">
          <div class="trait"></div>
            <h1>shop</h1>
          <div class="trait"></div>
        </div>
        <img src="~/assets/img/shop/silex_calame-shop.jpg" alt="cours reliure atelier caillou feu laura caillaux">
        <p>Désolé, les carnets et autres livres sont en train d'être reliés.</p><br>
        <p>Revenez plus tard ou suivez l'atelier Caillou Feu sur <span><a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">instagram</a></span> pour être prévenu.e des prochaines ventes !</p><br>
        <p>Vous pouvez aussi vous inscrire à la newsletter pour être informé.e des préventes et autres joyeusetés.</p><br><br>
        <p id="newsletter">Newsletter</p>
        <form class="contact-form" @submit.prevent="sendEmail">
          <label>adresse email</label>
          <input class="input" type="email" name="email">
          <div class="submit">
            <button type="submit" value="Send">envoyer</button>
          </div>
        </form>
      </div>
    <Footer />
  </div>
</template>

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
    & span {
      text-decoration: underline;
    }
    & #newsletter {
      font-family: $text;
      font-size: 28px;
    }
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
  }
}
</style>