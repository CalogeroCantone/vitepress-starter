import MermaidPlugin from "vitepress-plugin-mermaid";

module.exports = {
  title: 'Calogero Cantone',
  description: 'Just playing around.',
  base: "/vitepress-starter/",
  ignoreDeadLinks: true,
  markdown: {
    config: MermaidPlugin,
  },
}