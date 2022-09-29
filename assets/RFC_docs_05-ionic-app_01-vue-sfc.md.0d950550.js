import{_ as s,c as n,o as e,a}from"./app.09178a68.js";const y=JSON.parse('{"title":"Vue SFC","description":"","frontmatter":{},"headers":[{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[{"level":3,"title":"Basic info about vue file","slug":"basic-info-about-vue-file","link":"#basic-info-about-vue-file","children":[]},{"level":3,"title":"SFC","slug":"sfc","link":"#sfc","children":[]}]}],"relativePath":"RFC/docs/05-ionic-app/01-vue-sfc.md","lastUpdated":1664447137000}'),l={name:"RFC/docs/05-ionic-app/01-vue-sfc.md"},t=a(`<h1 id="vue-sfc" tabindex="-1">Vue SFC <a class="header-anchor" href="#vue-sfc" aria-hidden="true">#</a></h1><p><strong>RFC NUM</strong>: 05-01</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-hidden="true">#</a></h2><p>The BubblePod standard VUE SFC specification.</p><h2 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-hidden="true">#</a></h2><h3 id="basic-info-about-vue-file" tabindex="-1">Basic info about vue file <a class="header-anchor" href="#basic-info-about-vue-file" aria-hidden="true">#</a></h3><p>Each vue component MUST be a .vue file. Each vue component SHOULD be written used Composition API over Option API.</p><h1 id="naming-conventions" tabindex="-1">Naming conventions <a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a></h1><p>Each vue component name MUST be composed by at least two words using the PascalCase notation. Each vue component MUST be prefixed using <code>BP</code> (ex: BPButton) that stand for BubblePod: this is very useful for distinction between custom and library components.</p><h3 id="sfc" tabindex="-1">SFC <a class="header-anchor" href="#sfc" aria-hidden="true">#</a></h3><p>The structure of the vue SFC SHOULD be as follows:</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">// TYPESCRIPT CODE HERE.</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- TEMPLATE CONTENT HERE. --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">// SCSS CODE HERE.</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Rules:</p><ul><li><p><strong><code>&lt;script&gt;</code></strong>:</p><ul><li>MUST be placed always at first;</li><li>MUST be written in Typescript;</li><li>SHOULD have setup flag (only for exceptional cases we can use Options API);</li><li>First line of code MUST start from position 0;</li></ul></li><li><p><strong><code>&lt;template&gt;</code></strong>:</p><ul><li>MUST be placed always in the middle;</li><li>MUST contains at least one HTML element, otherwise developer should delete it;</li><li>First line of code MUST start from position 2;</li></ul></li><li><p><strong><code>&lt;style&gt;</code></strong>:</p><ul><li>MUST be placed always at the end;</li><li>MUST be written in SCSS;</li><li>If no style is required developer should delete it;</li><li>First line of code MUST start from position 0;</li></ul></li></ul>`,14),o=[t];function p(i,c,r,u,d,h){return e(),n("div",null,o)}const m=s(l,[["render",p]]);export{y as __pageData,m as default};
