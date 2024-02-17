const icons = [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
];

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  app: {
    head: {
      title: 'Nuxt 3 x GitHub Pages',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Teogor\' personal website!' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: icons.map(icon => ({
        rel: icon.rel,
        type: icon.type,
        sizes: icon.sizes ? icon.sizes : undefined,
        href: icon.href,
      })),
    },
  },
  modules: [
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
    '@/assets/style/main.scss',
  ]
})