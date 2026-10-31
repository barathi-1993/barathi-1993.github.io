---
layout: page
permalink: /publications/
title: Publications
description: Journal articles, conference contributions, books and patents.
nav: true
nav_order: 3
---

<style>
.publication-controls{display:flex;justify-content:flex-end;align-items:center;width:100%;margin:0 0 .9rem}
.publication-controls .publication-search{width:50%;max-width:430px;min-width:200px;display:block;box-sizing:border-box;min-height:43px;border:1px solid var(--global-divider-color);border-radius:9px;padding:.55rem .9rem;background:var(--global-bg-color);color:var(--global-text-color)}
.publication-controls .publication-search:focus{outline:2px solid var(--global-theme-color);outline-offset:2px}
.publication-tabs{display:flex;flex-wrap:wrap;align-items:center;gap:.45rem;border-bottom:1px solid var(--global-divider-color);padding-bottom:.8rem;margin:0 0 1rem}
.publication-tabs button{appearance:none;background:transparent;color:var(--global-text-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:.58rem 1rem;min-height:42px;font-weight:600;cursor:pointer;transition:color .15s ease,background .15s ease}
.publication-tabs button[aria-pressed="true"]{background:var(--global-theme-color);border-color:var(--global-theme-color);color:#fff}
.publication-tabs button:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:2px}
.publication-tabs button:hover:not([aria-pressed="true"]){color:var(--global-theme-color)}
.publication-result-count{font-size:.86rem;color:var(--global-text-color-light);margin:0 0 1rem}
.publication-empty{border:1px dashed var(--global-divider-color);border-radius:10px;padding:1.6rem;text-align:center;color:var(--global-text-color);margin:1rem 0}
.publication-empty[hidden],.publication-result-count[hidden]{display:none!important}
.publications{min-width:0}
.publications .bibliography>li{overflow-wrap:anywhere}
.publications .preview{height:auto;max-width:100%}
@media(max-width:767px){
  .publication-controls .publication-search{width:100%;max-width:none;min-width:0}
  .publication-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.4rem}
  .publication-tabs button{padding:.55rem .35rem;font-size:.88rem}
  .publications .row{margin-right:0;margin-left:0}
  .publications .col,.publications [class*="col-sm-"]{padding-left:.35rem;padding-right:.35rem}
  .publications .abbr{margin-bottom:.7rem}
  .publications .abbr .preview{width:auto;max-width:165px}
}
@media(max-width:360px){.publication-tabs{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(prefers-reduced-motion:reduce){.publication-tabs button{transition:none}}
</style>

<div class="publication-controls">
  <label class="sr-only" for="bibsearch">Search publications</label>
  <input id="bibsearch" class="publication-search" type="search" autocomplete="off" spellcheck="false" placeholder="Search publications" aria-controls="publication-list">
</div>

<nav class="publication-tabs" aria-label="Publication categories">
  <button type="button" data-publication-filter="all" aria-pressed="true">All</button>
  <button type="button" data-publication-filter="journal" aria-pressed="false">Journals</button>
  <button type="button" data-publication-filter="conference" aria-pressed="false">Conferences</button>
  <button type="button" data-publication-filter="book" aria-pressed="false">Books</button>
  <button type="button" data-publication-filter="patent" aria-pressed="false">Patents</button>
</nav>
<p id="publication-result-count" class="publication-result-count" role="status" aria-live="polite"></p>

<div id="publication-list" class="publications">
{% bibliography %}
</div>

<p id="publication-empty" class="publication-empty" hidden>No publications match this category or search. Try another filter.</p>

<script src="{{ '/assets/js/publication-filters.js' | relative_url | bust_file_cache }}" defer></script>
