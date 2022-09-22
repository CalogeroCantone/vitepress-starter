import{_ as a,c as l,b as s,d as p,t as o,a as e,o as t}from"./app.41d9dbf2.js";const m=JSON.parse('{"title":"Mermaid","description":"","frontmatter":{"title":"Mermaid","lang":"en-US","editLink":true},"headers":[{"level":2,"title":"{{ $frontmatter.title }}","slug":"frontmatter-title","link":"#frontmatter-title","children":[]}],"relativePath":"mermaid/index.md"}'),c={name:"mermaid/index.md"},D={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),C=e(`<div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">flowchart</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% GOALS DATABASE %%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Goals &amp; Projects %%</span></span>
<span class="line"><span style="color:#A6ACCD;">G[(Goals)] &lt;===&gt; |Connect To| P[(Projects)]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% PROJECTS DATABASE %%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Deadline %%</span></span>
<span class="line"><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">o </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Has</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> PD</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Deadline</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">PD </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> MT</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Met</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">) &amp; OV</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Overdue</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">OV </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Push</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> OVF</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">4</span><span style="color:#A6ACCD;"> Days</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Tasks %%</span></span>
<span class="line"><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">o </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Has</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> PT</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Tasks</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">PT </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> IC</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Incomplete</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">PT </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Complete</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">C </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Needs</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> R</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">[Review</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Review &amp; Goals %%</span></span>
<span class="line"><span style="color:#A6ACCD;">R </span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">.-</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Creates</span><span style="color:#C3E88D;"> New</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> G</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">flowchart</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Colors %%</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef blue fill:#2374f7,stroke:#000,stroke-width:2px,color:#fff</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef pink fill:#eb3dd6,stroke:#000,stroke-width:2px,color:#fff</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef orange fill:#fc822b,stroke:#000,stroke-width:2px,color:#fff</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef red fill:#ed2633,stroke:#000,stroke-width:2px,color:#fff</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef green fill:#16b522,stroke:#000,stroke-width:2px,color:#fff</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% GOALS DATABASE %%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Goals &amp; Projects %%</span></span>
<span class="line"><span style="color:#A6ACCD;">G[(Goals)]:::blue &lt;===&gt; |Connect To| P[(Projects)]:::blue</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% PROJECTS DATABASE %%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Deadline %%</span></span>
<span class="line"><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">o </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Has</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> PD</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Deadline</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:::orange</span></span>
<span class="line"><span style="color:#A6ACCD;">PD </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> MT</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Met</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">):::green</span></span>
<span class="line"><span style="color:#A6ACCD;">PD </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> OV</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Overdue</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">):::red</span></span>
<span class="line"><span style="color:#A6ACCD;">OV </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Push</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> OVF</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">4</span><span style="color:#A6ACCD;"> Days</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">:::pink</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Tasks %%</span></span>
<span class="line"><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">o </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Has</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> PT</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">Tasks</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:::orange</span></span>
<span class="line"><span style="color:#A6ACCD;">PT </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> IC</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Incomplete</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">):::red</span></span>
<span class="line"><span style="color:#A6ACCD;">PT </span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Is</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">[Complete</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">):::green</span></span>
<span class="line"><span style="color:#A6ACCD;">C </span><span style="color:#89DDFF;">---</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Needs</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> R</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">[Review</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">%% Review &amp; Goals %%</span></span>
<span class="line"><span style="color:#A6ACCD;">R </span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">.-</span><span style="color:#C3E88D;">&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">Creates</span><span style="color:#C3E88D;"> New</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> G</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2);function y(n,A,F,i,d,E){return t(),l("div",null,[s("h2",D,[p(o(n.$frontmatter.title)+" ",1),r]),C])}const P=a(c,[["render",y]]);export{m as __pageData,P as default};
