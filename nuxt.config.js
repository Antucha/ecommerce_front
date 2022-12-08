const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = {
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: '6LfKlfwgAAAAAG7T9PHIsPh2_9myEKNfkrq4Wwy2' // for example
    }
  },
  head: {
    title: 'Konecta',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: "https://static.geetest.com/v4/gt4.js"
        // src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQFKwVLvTw3-ovzOWm1UUAHeIVyDkW2t4&libraries=places'
        // src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places&v=weekly"'
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/yandex-map.js', mode: 'client' },
    { src: '~plugins/leaflet.js', mode: 'client' },
    '~/plugins/bootstrap-vue',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/moment',
    // ['@nuxtjs/fontawesome', {
    //   component: 'fa-icon',
    //   suffix: true,
    //   // imports: [
    //   //   //import whole set
    //   //   {
    //   //     set: '@fortawesome/free-solid-svg-icons',
    //   //     icons: ['fas']
    //   //   }
    //   // ]
    // }
    // ]
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://strapi.nuxtjs.org/
    // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: false,
    language: 'es',
    size: 'normal',
    /* reCAPTCHA options */
    // language: String,   // Recaptcha language (v2)
    // mode: String,       // Mode: 'base', 'enterprise'
    siteKey: '6LfKlfwgAAAAAG7T9PHIsPh2_9myEKNfkrq4Wwy2',    // Site key for requests
    version: 2,    // Version
    // size: String
  },
  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser()
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/not-found-page.vue')
      })
    },
    middleware: ['authAction']
  },

  axios: {},
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },

    //  extend(config, {isDev, isClient}) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
  }
}



//
