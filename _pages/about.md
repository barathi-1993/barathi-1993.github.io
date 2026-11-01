---
layout: about
title: Home
permalink: /
subtitle: Computer Vision · Medical AI · Applied Machine Learning
hide_title_block: true
profile: false
selected_papers: false
social: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<style>
.greeting-hero{position:relative;isolation:isolate;display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,285px);gap:clamp(1.6rem,5vw,4rem);align-items:center;min-height:510px;padding:2rem 0 4.2rem}
.greeting-hero:before{content:"";position:absolute;inset:0;z-index:-1;opacity:.34;pointer-events:none;background:radial-gradient(circle at 7% 27%,var(--global-divider-color) 0 3px,transparent 4px),radial-gradient(circle at 38% 12%,var(--global-divider-color) 0 4px,transparent 5px),radial-gradient(circle at 66% 80%,var(--global-divider-color) 0 3px,transparent 4px),linear-gradient(126deg,transparent 30%,var(--global-divider-color) 30.1%,transparent 30.25%,transparent 64%,var(--global-divider-color) 64.1%,transparent 64.25%)}
.greeting-hero .greeting-eyebrow{font-size:.75rem;font-weight:750;letter-spacing:.13em;text-transform:uppercase;color:var(--global-theme-color);margin-bottom:1.1rem}
.greeting-hero .greeting-title{font-size:clamp(2.45rem,5.5vw,4.5rem);line-height:1.1;letter-spacing:-.055em;font-weight:800;margin:0 0 1rem}
.greeting-hero .greeting-title .name{color:var(--global-theme-color)}
.greeting-hero .greeting-role{font-size:clamp(1.1rem,2.2vw,1.42rem);line-height:1.5;font-weight:600;min-height:2.9em;margin-bottom:1.5rem}
.greeting-hero .greeting-role span{color:var(--global-theme-color)}
.greeting-hero .greeting-description{font-size:1rem;line-height:1.8;color:var(--global-text-color-light);max-width:530px;margin-bottom:1.65rem}
.greeting-hero .greeting-action{display:inline-flex;align-items:center;gap:.6rem;background:var(--global-theme-color);color:#fff;border-radius:99px;padding:.82rem 1.5rem;text-decoration:none;font-weight:700;box-shadow:0 9px 22px #74007824}
.greeting-hero .greeting-action:hover{filter:brightness(.93);text-decoration:none;color:#fff}
.greeting-hero .greeting-socials{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.7rem;align-items:center}
.greeting-hero .greeting-socials a{width:43px;height:43px;display:flex;align-items:center;justify-content:center;background:var(--global-text-color);color:var(--global-bg-color);border-radius:50%;font-size:1.15rem;text-decoration:none;transition:transform .2s ease}
.greeting-hero .greeting-socials a:hover{transform:translateY(-3px);background:var(--global-theme-color);color:#fff}
.greeting-hero .greeting-portrait{width:100%;height:auto;aspect-ratio:4/5;object-fit:cover;object-position:top center;border-radius:20px;box-shadow:0 20px 36px #00000016}
@media(max-width:700px){.greeting-hero{grid-template-columns:1fr;min-height:0;padding:1rem 0 3rem;gap:2rem}.greeting-hero .greeting-portrait{max-width:230px;aspect-ratio:1/1}.greeting-hero .greeting-role{min-height:3em}}
@media(prefers-reduced-motion:reduce){.greeting-hero .greeting-socials a{transition:none}}
</style>

<section class="greeting-hero" aria-label="Introduction">
  <div>
    <h2 class="greeting-title">Hi There,<br>I'm <span class="name">Barathi Subramanian</span></h2>
    <p class="greeting-role">I work in <span id="rotating-research-role">Computer Vision</span><span aria-hidden="true"> |</span></p>
    <p class="greeting-description">Developing research-driven, practical AI systems across computational pathology, multimodal medical imaging, and applied machine learning.</p>
    <a class="greeting-action" href="{{ '/about-me/' | relative_url }}">About <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    <div class="greeting-socials" aria-label="Professional profiles">
      <a href="mailto:barathi1@stanford.edu" aria-label="Email Barathi"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a>
      <a href="https://github.com/barathi-1993" aria-label="GitHub profile" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/barithi-subramanian/" aria-label="LinkedIn profile" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://scholar.google.com/citations?user=kJnV_74AAAAJ" aria-label="Google Scholar profile" rel="noopener noreferrer"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
      <a href="https://profiles.stanford.edu/barathi-subramanian" aria-label="Stanford work profile" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v4.5l9 2.25v-1.5h2v1.5l9-2.25V8a2 2 0 0 0-2-2ZM10 4h4v2h-4V4Zm11 10.55-8 2v1.2h-2v-1.2l-8-2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.45Z"/></svg></a>
    </div>
  </div>
  <img class="greeting-portrait" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" width="285" height="357" alt="Portrait of Barathi Subramanian" loading="eager">
</section>


<script>
document.addEventListener("DOMContentLoaded",function(){
  const el=document.getElementById("rotating-research-role");
  if(!el||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const roles=["Computer Vision","Medical AI","Multimodal Learning","Applied Machine Learning"];
  let i=0;
  window.setInterval(function(){i=(i+1)%roles.length;el.textContent=roles[i]},1700);
});
</script>
