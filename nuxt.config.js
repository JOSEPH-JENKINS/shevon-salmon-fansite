export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shevon Salmon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: "Shevon Salmon is a digital creator from Jamaica giving the tech space the real OG vibe!" },
      {
        property: "og:image",
        hid: "og:image",
        content: "https://instagram.flos5-1.fna.fbcdn.net/v/t51.2885-15/274331807_128925189646582_7671437095064775413_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.flos5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=zRZ3QM-N0tMAX9mAsX8&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc3ODA4NTUyMDc0NjQ1NTcyMw%3D%3D.2-ccb7-5&oh=00_AT_PW-d5XSEbraIV8nunM49mpUKnywAq3U6zSP22CkWmig&oe=62AB2BE1&_nc_sid=30a2ef"
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/index.js", mode: "client" },
    { src: "~/plugins/both.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
    transpile: ["gsap"]
  }
}
