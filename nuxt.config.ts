const pkg = require('./package')
import NuxtConfiguration from '@nuxt/config'
const environment = process.env.NODE_ENV || 'development';
const envSet = require(`./env.${environment}.json`)

const nuxtConfig: NuxtConfiguration = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Chrole',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://urx2.nu/qSvy' }
    ]
  },

  env: envSet,

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'sanitize.css',
    '~/assets/scss/root.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/resize'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~/assets/scss/root.scss']
  },

  /*
  ** Build configuration
  */
  build: {
    extend(config: any, ctx: any) {
        // svg
        const svgRule = config.module.rules.find((rule: any) => rule.test.test('.svg'));

        svgRule.test = /\.(png|jpe?g|gif|webp)$/;

        config.module.rules.push({
          test: /\.svg$/,
          loader: 'vue-svg-loader'
        });
      if (ctx.isDev && ctx.isClient) {
        // ESLint
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default nuxtConfig
