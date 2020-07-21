import { Configuration } from '@nuxt/types'
import i18n from './nuxt-i18n.config'
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const environment = process.env.NODE_ENV || 'development'

const config: Configuration = {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | 岡山県 新型コロナウイルス感染症対策サイト(非公式)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://okayama.stopcovid19.jp'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '岡山県 新型コロナウイルス感染症対策サイト(非公式)'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@fujiwaraizuho'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@fujiwaraizuho'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https:///okayama.stopcovid19.jp/ogp.png'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '798578557330092'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true
    },
    {
      src: '@/plugins/axe',
      ssr: true
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['nuxt-i18n', i18n],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
    '@nuxtjs/sitemap'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      icons: false
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  /*
   * nuxt-i18n による自動リダイレクトを停止したためコメントアウト
   * @todo 「Cookieがあるときのみ、その言語にリダイレクトする」を実装する場合は復活させる
   * 実装しない場合は以下の記述を完全に削除する
   */
  /* optionalCookies: [
    {
      name: 'i18n_redirected',
      label: 'i18n Redirection Cookie',
      description:
        'For automatically switching UI languages in accordance with locale preferences in the web browser configuration.',
      cookies: ['i18n_redirected']
    }
  ], */
  build: {
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue'
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/]
        })
      ]
    },
    extend(config: any) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
    }
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '岡山県 新型コロナウイルス感染症対策サイト(非公式)',
    theme_color: '#eb42b5',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  generate: {
    fallback: true,
    routes() {
      const locales = ['ja' /* 'en', 'zh-cn', 'zh-tw', 'ko', 'ja-basic' */]
      const pages = [
        '/cards/details-of-confirmed-cases',
        /*
        '/cards/details-of-tested-cases',
        */
        '/cards/number-of-confirmed-cases',
        /*
        '/cards/number-of-confirmed-cases-by-municipalities',
        */
        '/cards/attributes-of-confirmed-cases',
        '/cards/number-of-tested',
        /*
        '/cards/number-of-inspection-persons',
        */
        '/cards/number-of-reports-to-covid19-telephone-advisory-center',
        // '/cards/number-of-reports-to-covid19-consultation-desk',
        /*
        '/cards/predicted-number-of-toei-subway-passengers',
        '/cards/agency'
        '/cards/number-of-reports-to-covid19-telephone-advisory-center',
        '/cards/predicted-number-of-toei-subway-passengers',
        '/cards/agency',
        '/cards/positive-rate',
        '/cards/positive-number-by-diagnosed-date',
        */
        '/cards/monitoring-number-of-confirmed-cases',
        /*
        '/cards/untracked-rate',
        '/cards/positive-status-severe-case',
        '/cards/number-of-hospitalized',
        */
        '/cards/monitoring-number-of-reports-to-covid19-consultation-desk'
        /*
        '/cards/monitoring-status-overview',
        '/cards/number-of-reports-to-consultations-about-fever-in-7119',
        '/cards/number-of-tokyo-rules-applied',
        '/cards/monitoring-items-overview'
        */
      ]

      const routes: string[] = []
      locales.forEach(locale => {
        pages.forEach(page => {
          if (locale === 'ja') {
            routes.push(page)
            return
          }
          const route = `/${locale}${page}`
          routes.push(route)
        })
      })
      return routes
    }
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://okayama.stopcovid19.jp/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: ['/print/**'],
    routes: ['/about', '/flow', '/parent', '/worker', '/medical']
  }
}

export default config
