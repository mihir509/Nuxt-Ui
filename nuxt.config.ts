// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore' , 'acceptHMRUpdate'],
    },

  ],
  '@nuxt/ui',
  '@nuxtjs/color-mode',
  '@nuxt/image'],
  imports:{
    dirs: ['stores'],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
