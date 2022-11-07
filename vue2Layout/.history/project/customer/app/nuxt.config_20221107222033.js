const authenticationAPI = require("./api/authentication").default;
const axios = require("axios");

const getLocaleOptions = () => {
  return axios
    .get(
      "https://super-template-backend.dev.starsnet.com.hk/api/customer/configuration/slug/customer-locales"
    )
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
};

export default async () => {
  /*
   ** Get Locale Options for i18n
   */
  const locale_data_options = await getLocaleOptions();

  // Transform the locale_data_options to the format required by nuxt i18n
  const locales = locale_data_options.map((option) => {
    return {
      code: option.value,
      name: option.title[option.value],
      iso: option.value,
      file: `${option.value}.js`,
    };
  });

  return {
    // ssr: false,

    /*
     ** Folder which contains all vue files
     */
    dir: {
      pages: "views",
    },

    /*
     ** env variables
     */
    env: {
      appDebug: process.env.APP_DEBUG === "true",
      baseURL: process.env.BASE_URL,
      defaultLang: process.env.DEFAULT_LANG,
    },

    /*
     ** Headers of the page
     */
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: process.env.APP_NAME,
      titleTemplate: `%s - ${process.env.APP_NAME}`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.SEO_META_DESCRIPTION || "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: process.env.SEO_META_KEYWORDS || "",
        },

        /* OG Start */
        {
          hid: "og:title",
          property: "og:title",
          content: process.env.APP_NAME,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: process.env.SEO_META_DESCRIPTION || "",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: process.env.BASE_URL,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: process.env.APP_NAME,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: process.env.LOGO_IMAGE_URL,
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "255",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "255",
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "zh_Hant",
        },
        {
          hid: "og:locale:alternate",
          property: "og:locale:alternate",
          content: "en",
        },
        {
          hid: "og:locality",
          property: "og:locality",
          content: "Hong Kong",
        },
        /* OG End */
      ],
      link: [
        // SEO Start
        {
          hid: "canonical",
          rel: "canonical",
          href: process.env.BASE_URL,
        },
        {
          rel: "icon",
          type: "image/png",
          href: process.env.LOGO_IMAGE_URL,
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: process.env.LOGO_IMAGE_URL,
        },
        // SEO End

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900",
        },
      ],
    },

    router: {
      middleware: ["standard", "result-page"],
      extendRoutes(routes, resolve) {
        routes = routes.map((route) => {
          switch (route.path) {
            case "/replace/path":
              return {
                name: "replace-name",
                path: "/replace/path",
                component: resolve(__dirname, "views/path/to/file.vue"),
              };
            default:
              return route;
          }
        });

        return routes;
      },
    },

    /*
     ** Customize the progress-bar color
     */
    loading: "~/components/Starsnet/widgets/loader.vue",

    /*
     ** Global CSS
     */
    css: [
      "swiper/css/swiper.css",
      "~/assets/scss/app.scss",
      "~/assets/css/custom.css",
      "~/assets/scss/custom.scss"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
      { src: "~/plugins/plugin.js", ssr: false },
      { src: "~/plugins/localStorage.js", ssr: false },
      { src: "~/plugins/standard.js", ssr: true },
      { src: "~/plugins/axios.js", ssr: true },
      { src: "~/api/index.js", ssr: true },
      { src: "~/plugins/operator/objectEquivalent.js", ssr: true },
      { src: "~/plugins/upload.js", ssr: true },
      { src: "~/plugins/moment.js", ssr: true },
      { src: "~/plugins/onResponseRedirect.js", ssr: true },
      { src: "~/plugins/onResponseToast.js", ssr: true },
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
      // Doc: https://axios.nuxtjs.org/usage
      "bootstrap-vue/nuxt",
      "@nuxtjs/i18n",
      "@nuxtjs/axios",
      "@nuxtjs/auth-next",
      "vue-scrollto/nuxt",
      "@nuxtjs/sitemap",
      "vue-social-sharing/nuxt",
    ],

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
      baseURL: process.env.API_URL,
      proxy: false,
    },
    publicRuntimeConfig: {
      axios: {
        baseURL: process.env.API_URL,
      },
    },
    generate: {
      fallback: true,
    },

    /*
     ** Authentication and Token Settings
     */
    auth: {
      strategies: {
        local: {
          Authorization: {
            property: "token",
            maxAge: 1800,
            type: "Bearer",
          },
          user: {
            property: "user",
            autoFetch: true,
          },
          endpoints: {
            login: { url: "/auth/login", method: "post" },
            logout: {
              url: "/auth/logout",
              method: "get",
            },
            user: { url: "/auth/user", method: "get" },
          },
          autoLogout: true,
        },
      },
      redirect: {
        login: "/authentication/login/email",
        logout: "/",
        home: "/",
      },
      watchLoggedIn: true,
      plugins: ["~/plugins/auth.js"],
    },

    /*
     ** i18n configuration
     */
    i18n: {
      langDir: "~/locales/",
      locales,
      defaultLocale: process.env.DEFAULT_LANG,
      strategy: "prefix_except_default",
      vueI18n: {
        fallbackLocale: process.env.DEFAULT_LANG,
      },
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "store_i18n",
        redirectOn: "root", // recommended
        // alwaysRedirect: true,
      },
      lazy: true,
    },

    /*
     ** Sitemap configuration
     */
    sitemap: {
      hostname: process.env.BASE_URL,
      gzip: true,
      exclude: [],
      sitemaps: [
        // Static pages sitemap
        {
          path: "/sitemap-static.xml",
          gzip: true,
        },

        // Another sitemap for /page/404 only
        {
          path: "/sitemap-bar.xml",
          routes: ["/page/404"],
          exclude: ["/**"],
          gzip: true,
        },
      ],
    },

    /*
     ** Build configuration
     */
    build: {
      transpile: ["vee-validate/dist/rules"],
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
      babel: { compact: true },
    },

    /**
     * For windows Hot Reload only
     */
    watchers: {
      webpack: {
        aggregateTimeout: 100,
        poll: 1000,
      },
    },
  };
};
