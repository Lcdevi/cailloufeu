<template>
  <div id="newsletter">
    <p><span>Inscription newsletter → </span> </p>
        <form class="contact-form" @submit.prevent="sendEmail">
          <input class="input" type="email" name="email" placeholder="email">
          <!-- <div class="submit"> -->
            <button type="submit" value="Send">envoyer</button>
          <!-- </div> -->
        </form>
  </div>

</template>


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
  }
  & button {
    background-color: white;
    border: 1px solid $frame;
    height: 20px;
    padding: 0 3px;
    font-weight: 700;
    color: $blue;
    cursor: pointer;
  }
  & button:hover {
    background-color: $frame;
    color: white;
  }
}


</style>
