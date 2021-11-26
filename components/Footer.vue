<template>
  <div id="footer">
    <p>copyright ©laura caillaux 2021 - site web designé et developpé par  <a href="https://www.malt.fr/profile/lauracaillaux" target="_blank" rel="noopener noreferrer"> Laura Caillaux </a><p>
    <p>toutes les photos et images sur ce site appartiennent à Laura Caillaux et ne peuvent être utilisées sans son accord</p>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  border-right: 2px solid $frame;
  border-left: 2px solid $frame;
  border-bottom: 2px solid $frame;
  font-family: 'Quicksand', serif;
  font-size: 14px;
  padding: 20px;
  & p {
    text-align: center;
    }
    & a {
      text-decoration: underline;
    }
}


///////////// IPADPRO 1024 PX /////////////////////

@media (max-width: 1024px) {
  #footer {
    & p {
      font-size: 12px;
    }
  }
}


///////////// SMARTPHONE 414 PX /////////////////////

@media (max-width: 414px) {
  #footer {
    border: none;
  }
}
</style>