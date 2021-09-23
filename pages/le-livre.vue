<template>
<div id="livre">
  <Navbar />
    <div id="main-livre">
      <div id="fil-ariane">
        <p>
          <NuxtLink to="/">home</NuxtLink> /
          <NuxtLink to="/projets">projets</NuxtLink> /
          le livre
        </p>
      </div>
      <div id="title">
        <div class="trait"></div>
          <h1>LE LIVRE</h1>
        <div class="trait"></div>
      </div>
      <div id="vignettes">
        <vignette
          v-for="(project, index) in projects" 
          :key="project.id" 
          :index="index"
          :project="project"
        >
        </vignette>
      </div>
    </div>
  <Newsletter />
  <Footer />
</div>
</template>

<script>
import projectData from "~/data/livres.json";
import Vignette from '../components/Vignette.vue';

export default {
  components: { Vignette },
	data() {

    return {
      projects: projectData,
			visibleSlide: 0,
      hover: false
    }
  },
	computed: {
		slidesLen() {
			return this.livres.length;
		}
	}
}
</script>

<style lang="scss" scoped>
  #livre {
  
    #main-livre {
      display: flex;
      flex-direction: column;
      border-right: 2px solid $frame;
      border-bottom: 2px solid $frame;
      border-left: 2px solid $frame;
      padding-bottom: 100px;
      align-items: center;
      padding: 0 11vw;
      
      
      & #fil-ariane {
        // border: 1px solid green;
        display: flex;
        font-family: $text;
        font-size: 18px;
        margin: 30px;
      }

      & #title {
        display: flex;
        justify-content: center;
        height: 62px;
        margin: 0px 0px 40px 0;
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

      #vignettes {
        // border: 1px solid blue;
        display: flex;
        flex-wrap: wrap;
        width: 74vw;
        margin-bottom: 120px;
      }

    }
  }
</style>