<template>
<div id="responsivenavbar">
  <div id="navbar">
    <div id="logo">
      <NuxtLink to="/">
        <img src="~/assets/img/logo-cailloufeu-silex-calame-blu.png" alt="logo caillou feu laura caillaux">
      </NuxtLink>
    </div>

			<div v-on:click="togglemenu">
				<p :class="[isActive ? 'display-menu' : 'remove-menu']">MENU</p>
				<div class="cross" :class="[isActive ? 'remove-menu' : 'display-menu']">
					<div class="line"></div>
				</div>
			</div>

    <div id="social">
      <a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
      </a>
    </div>
  </div>
  <div id="categories" :class="[isActive ? 'remove-menu' : 'display-menu']">
      <p><NuxtLink to="/">L’atelier</NuxtLink></p>
      <p><NuxtLink to="/projets">Projets</NuxtLink></p>
      <p><NuxtLink to="/cours">Cours</NuxtLink></p>
      <p><NuxtLink to="/contact">Contact</NuxtLink></p>
      <p><NuxtLink to="/shop">Shop</NuxtLink></p>
      <p><NuxtLink to="/protocole-badaboum">Protocole Badaboum</NuxtLink></p>
      <p>      
        <a href="https://www.instagram.com/le.cailloux/" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </a>
      </p>
  </div>
</div>
</template>

<script>
export default {

	data: function () {
    return {
      isActive: true
    }
  },


	computed: {
		computedClass() {
			let className = 'remove-menu';
			return className;
		}
	},

	methods: {
    togglemenu: function () {
		this.isActive = !this.isActive
    console.log("toggle", this.isActive)
		}
  }
}
</script>


<style lang="scss" scoped>
#responsivenavbar {
  #navbar {
    display: none;
  }
}

@media (min-width: 880px) {
  #responsivenavbar {
    display: none;
  }

}

@media (max-width: 880px) {
  #responsivenavbar {

	& .remove-menu {
		display: none;
	}
    #navbar {
      display: flex;
      border: 2px solid $frame;
      justify-content: space-between;
      align-items: center;
      & #logo {
        width: 130px;
        padding: 10px;
        & img {
          width: 100%;
        }
      }
      & p {
        font-family: $text;
        font-size: 34px;
      }
      & #social {
        width: 130px;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        & svg {
          width: 34px;
        }
      }
		& .cross {
			position: relative;
			width: 50px;
			height: 50px;
			cursor: pointer;
			// border: 1px solid $blue;
			margin: 3px;
			border-radius: 50%;

			&	.line {
				width: 50px;
				height: 1px;
				background-color: $blue;
				border-radius: 5px;
				transform: rotate(25deg) translate(9px, 22px);
			}

			&	.line::before,
				.line::after {
				content: '';
				position: absolute;
				width: 50px;
				height: 1px;
				background-color: $blue;
				border-radius: 5px;
				}
			&	.line::before {
				transform: translateX(-1px) rotate(116deg);
			}
			& .line::after {
				transform: translateX(-1px) rotate(55deg);
			}
		}
    }
      & #categories {
        line-height: 34px;
      border-bottom: 1px solid $blue;
      border-right: 1px solid $blue;
      border-left: 1px solid $blue;
      border-top: 1px solid $blue;
      text-align: center;
      font-family: $text;
      padding: 30px 0 30px 0;
      margin: 20px 0;
      & svg {
        width: 29px;
        margin-top: 20px;
      }
      }
  }
}

@media (max-width: 414px) {
  #responsivenavbar {
    #navbar {
      border: none;
      & #logo {
        padding: 0px;
        & img {
          width: 93px;
        }
      }
      & #social {
        display: none;
        & svg {
        }
      }
    }
    & #categories {
      // border: none;
      & .display-menu {
        // border-top: 1px solid $blue;
      }
    }

  }
}
</style>