<template>
  <div
    id="vignette"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
  <NuxtLink :to="`/projet-livre/${project.id}`">
    <img :src="require(`~/assets/img/projets/livre/${project.vignette}.jpg`)" alt="image reliure livre laura caillaux caillou feu" />
  </NuxtLink>
  
    <div v-if="hover" id="legende">
      <span class="bold">{{project.title}}</span> <br>
      <span id="italic">{{project.categorie}}</span> <br>
      {{project.auteur}}<br>
      {{project.date}}<br>
      <br>
      <NuxtLink :to="`/projet-livre/${project.id}`">
        <span class="bold">Voir plus</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import projectData from "~/data/livres.json";

  export default {
    props: ['index', 'project'],

    data() {
      return {
        projects: projectData,
        hover:false
      }
    }
  }
</script>

<style lang="scss" scoped>
#vignette {
  // border: 1px solid red;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
        
  & img {
    width: 24vw;
    margin: 2px;
  }

  & #legende {
    color: $blue;
    width: 20vw;
    // height: 50%;
    border: 2px solid $frame;
    margin: 0 2px;
    // background-color: rgba(255, 255, 255, .7);
    background-color: white;
    z-index: 10000;
    position: absolute;
    // bottom: 2px;
    padding: 15px;
    font-family: $text;
    line-height: 22px;

    & #italic {
      font-style: italic;
    }

    & .bold {
      font-weight: 700;
    }

  }
}


///////////// SMARTPHONE 600 PX /////////////////////

@media (max-width: 600px) {
#vignette {

        
  & img {
    width: 47vw;
  }

  & #legende {
    display: none;

    & #italic {
    }

    & .bold {
    }

  }
}
}
</style>
