// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxt/a11y",
  ],

  ui: {
    colorMode: false,
  },

  site: {
    url: "https://ekb-it-core.ru",
    name: "EKB-it-core - Компьютерная помощь в Екатеринбурге",
    description:
      "Настройка и восстановление Windows/Linux в Екатеринбурге. Установка ОС, удаление вирусов, настройка периферии, автоматизация задач. Бесплатная консультация.",
    defaultLocale: "ru",
    trailingSlash: false,
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "EKB-it-core",
      description: "Компьютерная помощь в Екатеринбурге",
      telephone: "+79931074700",
      email: "gantsev.k.service@gmail.com",
      contactPoint: {
        telephone: "+79931074700",
        contactType: "customer support",
        areaServed: "RU",
        availableLanguage: ["Russian"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Екатеринбург",
        addressRegion: "Свердловская область",
        postalCode: "620000",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 56.8389,
        longitude: 60.6057,
      },
      priceRange: "₽₽",
      sameAs: ["https://t.me/gantsev_k", "mailto:gantsev.k.service@gmail.com"],
    },
  },

  typescript: {
    strict: true,
  },

  app: {
    baseURL: "/",
  },

  fonts: {
    providers: {
      Fontshare: false,
    },
  },
});
