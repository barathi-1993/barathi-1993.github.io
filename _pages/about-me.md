---
layout: page
title: About
permalink: /about-me/
nav: true
nav_order: 1
---

<style>
.about-page-intro{max-width:1050px;margin:0 auto 1.35rem;line-height:1.7;color:var(--global-text-color-light)}
.about-showcase{max-width:1050px;margin:0 auto 3rem;display:grid;grid-template-columns:minmax(260px,345px) minmax(0,1fr);gap:clamp(1rem,3vw,2.1rem);align-items:start;position:relative}
.about-topic-list{display:grid;grid-template-columns:minmax(0,1fr);gap:.78rem;align-content:start}
.about-topic-button{width:100%;appearance:none;cursor:pointer;display:flex;align-items:center;gap:.9rem;min-height:88px;padding:1rem 1.05rem;background:var(--global-bg-color);border:1px solid var(--global-divider-color);border-radius:14px;text-align:left;color:var(--global-text-color);transition:border-color .18s ease,background .18s ease,box-shadow .18s ease,transform .18s ease}
.about-topic-button:hover,.about-topic-button[aria-expanded="true"]{border-color:var(--global-theme-color);box-shadow:0 6px 20px rgba(126,60,148,.1);background:linear-gradient(115deg,rgba(182,102,214,.09),rgba(121,128,213,.045));transform:translateX(3px)}
.about-topic-button:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:2px}
.about-topic-index{display:flex;align-items:center;justify-content:center;flex:none;width:38px;height:38px;border-radius:10px;background:var(--global-divider-color);color:var(--global-theme-color);font-weight:750;font-size:.82rem}
.about-topic-button[aria-expanded="true"] .about-topic-index{background:var(--global-theme-color);color:#fff}
.about-topic-copy{flex:1;min-width:0}
.about-topic-copy strong{display:block;line-height:1.35;font-size:.97rem;font-weight:720}
.about-topic-copy small{display:block;font-size:.77rem;line-height:1.5;color:var(--global-text-color-light);margin-top:.32rem}
.about-topic-arrow{font-size:1.25rem;color:var(--global-theme-color);flex:none}
.about-popup-stage{position:relative;min-width:0;min-height:450px}
.about-popup-placeholder{min-height:450px;border:1px dashed var(--global-divider-color);border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;gap:.65rem;background:radial-gradient(ellipse at 32% 25%,rgba(179,118,213,.13),transparent 62%),radial-gradient(ellipse at 78% 78%,rgba(124,152,235,.12),transparent 65%);color:var(--global-text-color-light)}
.about-popup-placeholder .about-placeholder-icon{display:flex;align-items:center;justify-content:center;width:63px;height:63px;border-radius:50%;font-size:1.5rem;color:var(--global-theme-color);background:rgba(182,102,214,.12)}
.about-popup-placeholder strong{font-size:.96rem;color:var(--global-text-color)}
.about-popup-placeholder span{font-size:.86rem;max-width:300px;line-height:1.7}
.about-popup[hidden],.about-popup-placeholder[hidden]{display:none!important}
.about-popup{position:absolute;inset:0 0 auto 0;z-index:5;max-height:min(69vh,680px);overflow-y:auto;overscroll-behavior:contain;background:var(--global-bg-color);border:1px solid var(--global-theme-color);border-radius:18px;box-shadow:0 15px 45px rgba(63,36,90,.16);padding:clamp(1.25rem,3vw,1.8rem);animation:about-popup-arrive .2s ease-out}
.about-popup-top{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.45rem}
.about-popup-kicker{font-size:.72rem;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:var(--global-theme-color)}
.about-popup-close{appearance:none;border:1px solid var(--global-divider-color);background:var(--global-bg-color);color:var(--global-text-color);border-radius:50%;width:35px;height:35px;display:inline-flex;align-items:center;justify-content:center;font-size:1.3rem;line-height:1;cursor:pointer;flex:none}
.about-popup-close:hover{border-color:var(--global-theme-color);color:var(--global-theme-color)}
.about-popup-close:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:2px}
.about-popup h2{font-size:clamp(1.18rem,2.3vw,1.5rem);color:var(--global-theme-color);margin:0 0 1.1rem;padding-bottom:.6rem;border-bottom:1px solid var(--global-divider-color)}
.about-popup-body{font-size:.94rem;line-height:1.8;overflow-wrap:anywhere}
.about-popup-body p{margin:0 0 .95rem}
.about-popup-body p:last-child{margin-bottom:0}
.about-popup-body ul{padding-left:1.3rem;margin:.35rem 0}
.about-popup-body li{margin:0 0 .55rem}
.about-popup-body li:last-child{margin-bottom:0}
@keyframes about-popup-arrive{from{opacity:.25;translate:0 5px}to{opacity:1;translate:0 0}}
@media(max-width:780px){
 .about-showcase{display:block}
 .about-topic-list{gap:.7rem}
 .about-topic-button{min-height:78px;padding:.85rem}
 .about-topic-index{width:34px;height:34px}
 .about-popup-stage{position:fixed;inset:0;z-index:10002;min-height:0;pointer-events:none}
 .about-popup-placeholder{display:none}
 .about-popup{position:absolute;inset:auto;top:50%;left:50%;width:min(94vw,620px);max-height:80dvh;padding:1.25rem;transform:translate(-50%,-50%);pointer-events:auto;animation:none}
 .about-showcase.has-active:before{content:"";position:fixed;inset:0;background:rgba(25,19,42,.52);z-index:10001}
 body.about-popup-open{overflow:hidden}
}
@media(prefers-reduced-motion:reduce){.about-topic-button{transition:none}.about-popup{animation:none}}
</style>

<p class="about-page-intro">Explore my background by moving your cursor over each topic. On a phone or tablet, tap a topic to open its details.</p>

<div class="about-showcase" data-about-showcase>
  <div class="about-topic-list" role="group" aria-label="About topics">
  <button type="button" class="about-topic-button" data-about-trigger="about-detail-1" aria-controls="about-detail-1" aria-expanded="false">
    <span class="about-topic-index" aria-hidden="true">01</span>
    <span class="about-topic-copy"><strong>Research profile</strong><small>Computational pathology, vision and multimodal AI</small></span>
    <span class="about-topic-arrow" aria-hidden="true">↗</span>
  </button>
  <button type="button" class="about-topic-button" data-about-trigger="about-detail-2" aria-controls="about-detail-2" aria-expanded="false">
    <span class="about-topic-index" aria-hidden="true">02</span>
    <span class="about-topic-copy"><strong>Academic background</strong><small>Doctoral training and academic qualifications</small></span>
    <span class="about-topic-arrow" aria-hidden="true">↗</span>
  </button>
  <button type="button" class="about-topic-button" data-about-trigger="about-detail-3" aria-controls="about-detail-3" aria-expanded="false">
    <span class="about-topic-index" aria-hidden="true">03</span>
    <span class="about-topic-copy"><strong>Research and engineering interests</strong><small>Methods, tools and research priorities</small></span>
    <span class="about-topic-arrow" aria-hidden="true">↗</span>
  </button>
  <button type="button" class="about-topic-button" data-about-trigger="about-detail-4" aria-controls="about-detail-4" aria-expanded="false">
    <span class="about-topic-index" aria-hidden="true">04</span>
    <span class="about-topic-copy"><strong>Academic and professional service</strong><small>Editorial roles and research community contributions</small></span>
    <span class="about-topic-arrow" aria-hidden="true">↗</span>
  </button>
  <button type="button" class="about-topic-button" data-about-trigger="about-detail-5" aria-controls="about-detail-5" aria-expanded="false">
    <span class="about-topic-index" aria-hidden="true">05</span>
    <span class="about-topic-copy"><strong>Selected honors</strong><small>Awards and academic recognition</small></span>
    <span class="about-topic-arrow" aria-hidden="true">↗</span>
  </button>
  </div>
  <div class="about-popup-stage">
    <div class="about-popup-placeholder" aria-hidden="true">
      <div class="about-placeholder-icon"><i class="fa-solid fa-arrow-pointer"></i></div>
      <strong>Explore a topic</strong>
      <span>Hover over a section on the left to reveal more information without expanding the page.</span>
    </div>
  <section class="about-popup" id="about-detail-1" data-about-panel="about-detail-1" aria-labelledby="about-detail-1-heading" hidden>
    <div class="about-popup-top">
      <span class="about-popup-kicker">About / 01</span>
      <button type="button" class="about-popup-close" aria-label="Close Research profile popup">×</button>
    </div>
    <h2 id="about-detail-1-heading">Research profile</h2>
    <div class="about-popup-body"><p>I am a computer vision researcher working at the intersection of computational pathology, medical imaging, multimodal artificial intelligence, and practical machine learning systems. My research combines algorithm design with the development of reproducible data-processing and model-evaluation pipelines.</p>
<p>During my postdoctoral research in Stanford University's Department of Pathology, I have worked on whole-slide histopathology image analysis, including tile extraction, artifact filtering, quality control, tissue classification, segmentation, and annotation workflows. I have also worked with image and text foundation models for multimodal pathology applications, and contributed to dataset construction and clinical prediction research.</p>
<p>My earlier research at Kyungpook National University in South Korea covered gesture recognition, real-time visual interaction, industrial anomaly detection, small-object detection, and handwriting recognition. This breadth motivates my interest in methods that can generalize across domains and be integrated into usable tools.</p>
    </div>
  </section>

  <section class="about-popup" id="about-detail-2" data-about-panel="about-detail-2" aria-labelledby="about-detail-2-heading" hidden>
    <div class="about-popup-top">
      <span class="about-popup-kicker">About / 02</span>
      <button type="button" class="about-popup-close" aria-label="Close Academic background popup">×</button>
    </div>
    <h2 id="about-detail-2-heading">Academic background</h2>
    <div class="about-popup-body"><p>I completed my <strong>Ph.D. in Computer Vision at Kyungpook National University in 2024</strong>, following an M.Sc. in Applied Mathematics with Computer Applications from Bharathiar University, India, and a B.Sc. in the same discipline from Nirmala College for Women.</p>
    </div>
  </section>

  <section class="about-popup" id="about-detail-3" data-about-panel="about-detail-3" aria-labelledby="about-detail-3-heading" hidden>
    <div class="about-popup-top">
      <span class="about-popup-kicker">About / 03</span>
      <button type="button" class="about-popup-close" aria-label="Close Research and engineering interests popup">×</button>
    </div>
    <h2 id="about-detail-3-heading">Research and engineering interests</h2>
    <div class="about-popup-body"><p>My current interests include reliable medical image analysis, multimodal vision-language learning, foundation models, real-time computer vision, and efficient model development. On the implementation side, I work with Python, PyTorch, TensorFlow, QuPath, MLflow, multi-GPU experimentation, and Docker-based prototyping.</p>
<p>I value rigorous evaluation, careful dataset preparation, transparent reporting of research status, and practical applications of AI.</p>
<p>For specific contributions and publications, see <a href="{{ '/projects/' | relative_url }}">Research &amp; Projects</a> and <a href="{{ '/publications/' | relative_url }}">Publications</a>. My <a href="{{ '/cv/' | relative_url }}">CV</a> page provides further professional background.</p>
    </div>
  </section>

  <section class="about-popup" id="about-detail-4" data-about-panel="about-detail-4" aria-labelledby="about-detail-4-heading" hidden>
    <div class="about-popup-top">
      <span class="about-popup-kicker">About / 04</span>
      <button type="button" class="about-popup-close" aria-label="Close Academic and professional service popup">×</button>
    </div>
    <h2 id="about-detail-4-heading">Academic and professional service</h2>
    <div class="about-popup-body"><ul>
  <li><strong>Co-organizer / track chair:</strong> RECCAP 2026, IIT Palakkad; North American Young Investigators Symposium on Mathematical Oncology 2026, Stanford University.</li>
  <li><strong>Conference reviewing:</strong> CVPR, NeurIPS, MICCAI, WACV, and ACM Multimedia (2026).</li>
  <li><strong>Associate Editor:</strong> IEEE Journal of Biomedical and Health Informatics (JBHI), Clinical Informatics.</li>
  <li><strong>Journal reviewing:</strong> IEEE SMC Magazine, IEEE Access, IEEE Journal of Biomedical and Health Informatics, Computer Animation and Virtual Worlds, International Journal of Advanced Manufacturing Technology, and Journal of Autonomous Intelligence.</li>
  <li><strong>Professional memberships:</strong> IEEE and ACM.</li>
</ul>
    </div>
  </section>

  <section class="about-popup" id="about-detail-5" data-about-panel="about-detail-5" aria-labelledby="about-detail-5-heading" hidden>
    <div class="about-popup-top">
      <span class="about-popup-kicker">About / 05</span>
      <button type="button" class="about-popup-close" aria-label="Close Selected honors popup">×</button>
    </div>
    <h2 id="about-detail-5-heading">Selected honors</h2>
    <div class="about-popup-body"><ul>
  <li><strong>2026</strong>: Best Oral Presentation Runner-Up, Women in MICCAI (WiM) 2026.</li>
  <li><strong>2026</strong>: Charles B. Carrington Memorial Award for Outstanding Poster Presentation, Stanford University.</li>
  <li><strong>2024</strong>: Best Thesis Award, Kyungpook National University.</li>
  <li><strong>2021 to 2022</strong>: Best Paper Awards at multiple conferences, as listed in the CV.</li>
</ul>
    </div>
  </section>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const showcase = document.querySelector("[data-about-showcase]");
  if (!showcase) return;
  const triggers = Array.from(showcase.querySelectorAll("[data-about-trigger]"));
  const panels = Array.from(showcase.querySelectorAll("[data-about-panel]"));
  const placeholder = showcase.querySelector(".about-popup-placeholder");
  const touchLayout = window.matchMedia("(max-width: 780px)");
  const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  let current = null;
  let suppressFocus = false;

  function show(id) {
    current = id;
    triggers.forEach(function (button) {
      button.setAttribute("aria-expanded", String(button.dataset.aboutTrigger === id));
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.aboutPanel !== id;
    });
    if (placeholder) placeholder.hidden = Boolean(id);
    showcase.classList.toggle("has-active", Boolean(id));
    document.body.classList.toggle("about-popup-open", Boolean(id) && touchLayout.matches);
  }

  function close(restoreFocus) {
    const previous = current;
    show(null);
    if (restoreFocus && previous) {
      const trigger = triggers.find(function (button) {
        return button.dataset.aboutTrigger === previous;
      });
      if (trigger) {
        suppressFocus = true;
        trigger.focus();
        suppressFocus = false;
      }
    }
  }

  triggers.forEach(function (button) {
    const key = button.dataset.aboutTrigger;
    button.addEventListener("pointerenter", function () {
      if (hasHover.matches && !touchLayout.matches) show(key);
    });
    button.addEventListener("focus", function () {
      if (!suppressFocus) show(key);
    });
    button.addEventListener("click", function () {
      show(key);
    });
    button.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        show(key);
        const panel = panels.find(function (item) { return item.dataset.aboutPanel === key; });
        const closeButton = panel && panel.querySelector(".about-popup-close");
        if (closeButton) closeButton.focus();
      }
    });
  });

  panels.forEach(function (panel) {
    const closeButton = panel.querySelector(".about-popup-close");
    if (closeButton) closeButton.addEventListener("click", function () { close(true); });
  });

  showcase.addEventListener("pointerleave", function () {
    if (hasHover.matches && !touchLayout.matches) show(null);
  });
  showcase.addEventListener("focusout", function (event) {
    if (!showcase.contains(event.relatedTarget)) show(null);
  });
  showcase.addEventListener("click", function (event) {
    if (event.target === showcase) close(false);
  });
  document.addEventListener("pointerdown", function (event) {
    if (current && !showcase.contains(event.target)) show(null);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && current) {
      event.preventDefault();
      close(true);
    }
  });
  touchLayout.addEventListener("change", function () { show(null); });
});
</script>
