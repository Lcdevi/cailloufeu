<template>
  <div id="projet-livre">
    <Navbar />
    <div id="main-projet-livre">
      <div id="fil-ariane">
        <p>
          <NuxtLink to="/">home</NuxtLink> /
          <NuxtLink to="/projets">projets</NuxtLink> /
          <NuxtLink to="/le-livre">le livre</NuxtLink> /
          {{product.title}}        
        </p>
      </div>
      <div id="content">
        <div id="legende">
          <h1>{{product.title}}</h1><br>
          <span id="italique">{{product.categorie}}</span><br><br>
          <span>auteur →</span> {{product.auteur}} <br>
          <span>description →</span> {{product.description}} <br>
          <span>reliure →</span> {{product.reliure}} <br>
          <span>format →</span> {{product.format}} <br>
          <span>impression →</span> {{product.impression}} <br>
          <span>nb de pages →</span> {{product.pages}} <br>
          <span>date →</span> {{product.date}} <br>
          <span>nombre d'exemplaire →</span> {{product.exemplaire}}<br>
          <span>prix →</span> {{product.prix}}
        </div>
        <img id="main-image" :src="require(`~/assets/img/projets/livre/${product.photo1}.jpg`)" :alt="`${product.alt}`" />       
        <img :src="require(`~/assets/img/projets/livre/${product.photo2}.jpg`)" :alt="`${product.alt}`" />
        <img :src="require(`~/assets/img/projets/livre/${product.photo3}.jpg`)" :alt="`${product.alt}`" />
        <img :src="require(`~/assets/img/projets/livre/${product.photo4}.jpg`)" :alt="`${product.alt}`" />
        <img :src="require(`~/assets/img/projets/livre/${product.photo5}.jpg`)" :alt="`${product.alt}`" />
        <img :src="require(`~/assets/img/projets/livre/${product.photo6}.jpg`)" :alt="`${product.alt}`" />
        <img :src="require(`~/assets/img/projets/livre/${product.photo7}.jpg`)" :alt="`${product.alt}`" />
      </div>
    </div>
    <Footer />

  </div>
</template>

<script>
import { mapState } from "vuex";
// import projectData from "~/data/livres.json";

  export default {
    data() {
      return {
        // projects: projectData,
        id: this.$route.params.id,
      } 
},

  computed: {
    ...mapState(["storedata"]),
    product() {
      return this.storedata.find(el => el.id === this.id);
    }
  }

}
</script>

<style lang="scss" scoped>
#projet-livre {
  #main-projet-livre {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid $frame;
    border-bottom: 2px solid $frame;
    border-left: 2px solid $frame;

      & #fil-ariane {
        // border: 1px solid green;
        display: flex;
        font-family: $text;
        font-size: 18px;
        margin: 30px;
      }

      & #content {
        // border: 1px solid red;
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 80px 0;

        & #legende {
          border: 1px solid $frame;
          width: 32vw;
          margin: 1px;
          padding: 20px;
          font-family: $text;
          font-size: 16px;
          line-height: 24px;

          & #italique {
            font-style: italic;
            font-size: 17px;
            font-weight: 400;
          }

          & span {
            font-weight: 700;
          }

        }

      }

      & #main-image {
        width: 54vw;
      }

      & img {
        width: 48%;
        margin: 1px;
      }
  }
}
</style>