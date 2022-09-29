export default {
  title: "Calogero Cantone",
  description: "Just playing around.",
  lang: "en-US",
  base: "/vitepress-starter/",
  lastUpdated: true,
  ignoreDeadLinks: true,

  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },

  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/CalogeroCantone/vitepress-starter/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CalogeroCantone/vitepress-starter",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Calogero Cantone",
    },

    algolia: {
      appId: "TV818UQAW4",
      apiKey: "0c67df6546120e37d914350c7f1c2e44",
      indexName: "vitepress-starter",
    },
  },
};
