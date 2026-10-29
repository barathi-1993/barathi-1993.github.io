---
layout: about
title: Home
permalink: /
subtitle: Computer Vision · Medical AI · Applied Machine Learning
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
.home-about{padding:3.1rem 0 2.3rem;border-top:1px solid var(--global-divider-color);scroll-margin-top:85px}
.home-about .section-kicker{color:var(--global-theme-color);font-size:.77rem;font-weight:750;letter-spacing:.13em;text-transform:uppercase}
.home-about h2{font-size:clamp(1.7rem,3vw,2.3rem);margin:.65rem 0 1.15rem;letter-spacing:-.035em}
.home-about p{max-width:750px;line-height:1.85;font-size:1.04rem}
.home-about .about-links{display:flex;flex-wrap:wrap;gap:1.25rem;margin-top:1.4rem}
@media(max-width:700px){.greeting-hero{grid-template-columns:1fr;min-height:0;padding:1rem 0 3rem;gap:2rem}.greeting-hero .greeting-portrait{max-width:230px;aspect-ratio:1/1}.greeting-hero .greeting-role{min-height:3em}.home-about{padding-top:2rem}}
@media(prefers-reduced-motion:reduce){.greeting-hero .greeting-socials a{transition:none}}
</style>

<section class="greeting-hero" aria-label="Introduction">
  <div>
    <div class="greeting-eyebrow">Research · Engineering · Translation</div>
    <h2 class="greeting-title">Hi There,<br>I'm <span class="name">Barathi Subramanian</span></h2>
    <p class="greeting-role">I work in <span id="rotating-research-role">Computer Vision</span><span aria-hidden="true"> |</span></p>
    <p class="greeting-description">Developing research-driven, practical AI systems across computational pathology, multimodal medical imaging, and applied machine learning.</p>
    <a class="greeting-action" href="#about-me">About Me <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></a>
    <div class="greeting-socials" aria-label="Professional profiles">
      <a href="mailto:barathi1@stanford.edu" aria-label="Email Barathi"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a>
      <a href="https://github.com/barathi-1993" aria-label="GitHub profile" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/barithi-subramanian/" aria-label="LinkedIn profile" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://scholar.google.com/citations?user=kJnV_74AAAAJ" aria-label="Google Scholar profile" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></a>
    </div>
  </div>
  <img class="greeting-portrait" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" width="285" height="357" alt="Portrait of Barathi Subramanian" loading="eager">
</section>

<section class="home-about" id="about-me" aria-labelledby="home-about-title">
  <span class="section-kicker">A little about me</span>
  <h2 id="home-about-title">About Me</h2>
  <p>I am a computer vision researcher with postdoctoral research experience in Stanford University's Department of Pathology. My work spans whole-slide imaging, multimodal medical AI, anomaly detection, and interactive vision systems, connecting research methodology with reproducible implementations.</p>
  <p>My Ph.D. in Computer Vision from Kyungpook National University, South Korea, established a foundation in gesture recognition and image analysis. Today, I focus on developing reliable methods and practical systems for medical imaging and other high-impact applications.</p>
  <div class="about-links">
    <a href="{{ '/about-me/' | relative_url }}">Read full biography →</a>
    <a href="{{ '/projects/' | relative_url }}">Explore research →</a>
    <a href="{{ '/cv/' | relative_url }}">View CV →</a>
  </div>
</section>

<script>
document.addEventListener("DOMContentLoaded",function(){
  const el=document.getElementById("rotating-research-role");
  if(!el||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const roles=["Computer Vision","Medical AI","Multimodal Learning","Applied Machine Learning"];
  let i=0;
  window.setInterval(function(){i=(i+1)%roles.length;el.textContent=roles[i]},2600);
});
</script>
