import data from './data/livres.json'

let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `le-livre/${el.id}`))
  })
}

export default {
  googleAnalytics: {
    // Options
    id: 'UA-36308307-1'
  },

  generate: {
    routes: dynamicRoutes
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Atelier Caillou FEU',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // charge un module Node.js directement (ici c'est un fichier SASS)
    // 'bulma',
    // fichier CSS dans notre projet
    '~/assets/css/main.css',
    // fichier SCSS dans notre projet
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
    // Simple usage
    // '@nuxtjs/google-fonts',

    // With options
    // ['@nuxtjs/google-fonts', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
       
    // style-resources to use variables in all the app
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts'



  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  googleFonts: {
    /* module options */
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Quattrocento: {
        wght: [400]
      },
      Rambla: {
        wght: [300, 400, 700],
        ital: [400]
      },
      Quicksand: {
        wght: [400, 300]
      },
      Philosopher: true,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
