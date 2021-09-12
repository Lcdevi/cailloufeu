<template>
<div id="protocole">
  <Navbar />
    <div id="main-protocole">
      <div id="title">
        <h1>protocole Badaboum</h1>
      </div>
    </div>
  <Footer />
</div>
</template>

<style lang="scss" scoped>
  #protocole {
  
    #main-protocole {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;

      & #title {
        display: flex;
        justify-content: center;
        height: 62px;
        margin: 72px 0;
              
        & h1 {
          font-family: $text;
          color: $blue;
          font-size: 51px;
          font-weight: 400;
          text-transform: uppercase;
      }
      }

    }
  }
</style>