import{_ as s,c as n,o as a,a as l}from"./app.09178a68.js";const d=JSON.parse('{"title":"Comments","description":"","frontmatter":{},"headers":[{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"RFC/docs/02-basic-coding-standard/01-comments.md","lastUpdated":1664447137000}'),p={name:"RFC/docs/02-basic-coding-standard/01-comments.md"},e=l(`<h1 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-hidden="true">#</a></h1><p><strong>RFC NUM</strong>: 02-01</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-hidden="true">#</a></h2><p>The BubblePod comment standard.</p><h2 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-hidden="true">#</a></h2><p>All code must be documented. The default language is English.</p><p>Use the standard <a href="https://jsdoc.app/" target="_blank" rel="noreferrer">JSDoc</a> syntax.</p><p>Template:</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * What function do.</span></span>
<span class="line"><span style="color:#676E95;"> *</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">author</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">%name% %surname</span><span style="color:#676E95;">&gt; &lt;%email%&gt;</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">throws</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">%ExceptionType%</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> When append this exception.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> %paramName% What is this parameter.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> What the function returns.</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UserDocument</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">NotFoundException</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Example:</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Find and return the User with a specific id.</span></span>
<span class="line"><span style="color:#676E95;"> *</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">author</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">Calogero Cantone </span><span style="color:#89DDFF;">&lt;</span><span style="color:#676E95;">calogero.cantone.work@gmail.com</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">throws</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">NotFoundException</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> If not exist a user with the specified id.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#676E95;"> The id of the User to retrieve.</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> The User with the specified id.</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UserDocument</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">NotFoundException</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>Tip</strong>: In case of functions/methods, you can use the vscode autocompletion simply writing <code>/**</code> and <code>ENTER</code>.</p><h2 id="authors" tabindex="-1">Authors <a class="header-anchor" href="#authors" aria-hidden="true">#</a></h2><ol><li><ul><li>Full Name: Calogero Cantone</li><li>Email: <a href="mailto:calogero.cantone.work@gmail.com" target="_blank" rel="noreferrer">calogero.cantone.work@gmail.com</a></li><li>Role: CIO</li></ul></li></ol>`,14),o=[e];function r(t,c,i,y,F,D){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{d as __pageData,u as default};