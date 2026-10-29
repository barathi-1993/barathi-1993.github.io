---
layout: about
title: About
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
.portfolio-home{--ph-line:var(--global-divider-color);--ph-accent:var(--global-theme-color)}
.portfolio-home .ph-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(200px,280px);gap:clamp(1.5rem,5vw,3.6rem);align-items:center;padding:2.3rem 0 3.1rem}
.portfolio-home .ph-kicker{font-size:.76rem;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:var(--ph-accent);margin-bottom:1rem}
.portfolio-home .ph-lead{font-size:clamp(1.15rem,2.4vw,1.48rem);line-height:1.55;margin:0 0 1rem;max-width:35rem}
.portfolio-home .ph-detail{font-size:.97rem;line-height:1.75;max-width:35rem;color:var(--global-text-color-light);margin-bottom:1.4rem}
.portfolio-home .ph-portrait{width:100%;aspect-ratio:4/5;object-fit:cover;object-position:center top;border-radius:18px;display:block;box-shadow:0 12px 32px #00000014}
.portfolio-home .ph-actions{display:flex;gap:.7rem;flex-wrap:wrap}
.portfolio-home .ph-actions a{display:inline-block;text-decoration:none;border:1px solid var(--ph-accent);border-radius:8px;padding:.65rem 1rem;font-weight:600;font-size:.9rem}
.portfolio-home .ph-actions a:first-child{background:var(--ph-accent);color:var(--global-bg-color)}
.portfolio-home .ph-section{border-top:1px solid var(--ph-line);padding:2.3rem 0}
.portfolio-home .ph-section h2{margin:0 0 1rem;font-size:1.45rem}
.portfolio-home .ph-text{max-width:660px;line-height:1.8}
.portfolio-home .ph-features{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem;margin-top:1.2rem}
.portfolio-home .ph-feature{padding:1rem 0}
.portfolio-home .ph-feature h3{font-size:1.05rem;margin:0 0 .5rem}
.portfolio-home .ph-feature p{font-size:.92rem;line-height:1.65;color:var(--global-text-color-light);margin:0}
.portfolio-home .ph-work{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.15rem;margin-top:1.3rem}
.portfolio-home .ph-work a{color:inherit;text-decoration:none;border:1px solid var(--ph-line);border-radius:12px;overflow:hidden;display:block;transition:transform .2s,box-shadow .2s}
.portfolio-home .ph-work a:hover{transform:translateY(-3px);box-shadow:0 9px 22px #00000013}
.portfolio-home .ph-work img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#e9eef4}
.portfolio-home .ph-work .ph-card-body{padding:1rem}
.portfolio-home .ph-work h3{font-size:1.05rem;margin:0 0 .35rem}
.portfolio-home .ph-work p{font-size:.88rem;line-height:1.6;margin:0;color:var(--global-text-color-light)}
@media(max-width:680px){.portfolio-home .ph-hero{grid-template-columns:1fr;padding-top:1rem;gap:1.35rem}.portfolio-home .ph-portrait{max-width:240px;aspect-ratio:4/4}.portfolio-home .ph-features,.portfolio-home .ph-work{grid-template-columns:1fr}.portfolio-home .ph-section{padding:1.8rem 0}}
</style>

<div class="portfolio-home">
  <section class="ph-hero" aria-label="Introduction">
    <div>
      <div class="ph-kicker">Researcher · Builder · Collaborator</div>
      <p class="ph-lead">Building practical computer vision and medical AI systems, from research ideas to working pipelines.</p>
      <p class="ph-detail">My work connects computational pathology, multimodal learning, and applied computer vision. I have conducted postdoctoral research at Stanford University and earned my Ph.D. in Computer Vision at Kyungpook National University.</p>
      <div class="ph-actions">
        <a href="{{ '/projects/' | relative_url }}">Explore research</a>
        <a href="{{ '/publications/' | relative_url }}">Publications</a>
        <a href="{{ '/cv/' | relative_url }}">CV</a>
      </div>
    </div>
    <div><img class="ph-portrait" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Portrait of Barathi Subramanian" width="280" height="350" loading="eager"></div>
  </section>

  <section class="ph-section">
    <h2>Focus areas</h2>
    <div class="ph-features">
      <div class="ph-feature"><h3>Computational pathology</h3><p>Whole-slide image processing, tissue datasets, segmentation, and clinical imaging research.</p></div>
      <div class="ph-feature"><h3>Multimodal AI</h3><p>Vision-language models and foundation-model approaches to medical image understanding.</p></div>
      <div class="ph-feature"><h3>Applied computer vision</h3><p>Object detection, industrial anomaly detection, gesture recognition, and reproducible AI pipelines.</p></div>
    </div>
  </section>

  <section class="ph-section">
    <h2>Selected projects</h2>
    <div class="ph-work">
      <a href="{{ '/projects/1_starc9/' | relative_url }}">
        <img src="{{ '/assets/img/projects/STARC9_1.jpg' | relative_url }}" alt="STARC-9 histopathology research visual" loading="lazy">
        <div class="ph-card-body"><h3>STARC-9</h3><p>Colorectal histopathology dataset · NeurIPS 2025</p></div>
      </a>
      <a href="{{ '/projects/2_digital_pathology_pipeline/' | relative_url }}">
        <img src="{{ '/assets/img/projects/pathology-workflow.svg' | relative_url }}" alt="Illustration of a multi-step digital pathology image pipeline" loading="lazy">
        <div class="ph-card-body"><h3>Digital pathology AI</h3><p>WSI preprocessing, annotation, and multimodal analysis.</p></div>
      </a>
      <a href="{{ '/projects/5_gesture2music/' | relative_url }}">
        <img src="{{ '/assets/img/projects/gesture-vision.svg' | relative_url }}" alt="Illustration of gesture tracking and temporal signal analysis" loading="lazy">
        <div class="ph-card-body"><h3>Gesture2Music</h3><p>Real-time vision and gesture-driven interaction.</p></div>
      </a>
    </div>
    <p style="margin-top:1.3rem"><a href="{{ '/projects/' | relative_url }}">View all projects →</a></p>
  </section>

  <section class="ph-section">
    <h2>About</h2>
    <p class="ph-text">My research spans reliable image analysis, multimodal modeling, dataset curation, and the engineering needed to make methods reproducible and usable. I work across academic and application-driven settings, with experience in PyTorch, model evaluation, annotation workflows, and deployment-oriented prototyping.</p>
    <p><a href="{{ '/experience/' | relative_url }}">Experience & skills →</a> &nbsp;·&nbsp; <a href="{{ '/service/' | relative_url }}">Academic service →</a> &nbsp;·&nbsp; <a href="https://github.com/barathi-1993">GitHub →</a></p>
  </section>
</div>
