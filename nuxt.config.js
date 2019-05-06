import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:200,400,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2176B9' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/_reset.sass',
    '~/assets/sass/_general.sass',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['storyblok-nuxt', {
      accessToken: 'OOJdwwtg8Qk5aNmUcWnt4gtt',
      cacheProvider: 'memory'
    }],
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/sass/_variables.sass'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
