import MermaidPlugin from "vitepress-plugin-mermaid";

export default {
  title: 'Calogero Cantone',
  description: 'Just playing around.',
  base: "/vitepress-starter/",
  markdown: {
    config: MermaidPlugin,
  }
}