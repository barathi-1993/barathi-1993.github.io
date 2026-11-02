---
layout: page
title: About
permalink: /about-me/
nav: true
nav_order: 1
---

<style>
.about-intro{max-width:860px;margin:0 auto 1.65rem;line-height:1.75;color:var(--global-text-color)}
.about-accordion{max-width:860px;margin:0 auto 2.5rem;display:grid;grid-template-columns:minmax(0,1fr);gap:.85rem}
.about-section{min-width:0;border:1px solid var(--global-divider-color);border-radius:14px;background:var(--global-bg-color);overflow:hidden;transition:border-color .18s ease,box-shadow .18s ease}
.about-section[open]{border-color:var(--global-theme-color);box-shadow:0 8px 24px rgba(105,65,135,.09)}
.about-section>summary{min-height:72px;display:flex;align-items:center;gap:1rem;padding:1rem 1.3rem;cursor:pointer;list-style:none;font-weight:700;font-size:1.08rem;line-height:1.4;color:var(--global-text-color)}
.about-section>summary::-webkit-details-marker{display:none}
.about-section>summary:hover{color:var(--global-theme-color)}
.about-section>summary:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:-3px}
.about-section-number{display:inline-flex;align-items:center;justify-content:center;width:37px;height:37px;flex-shrink:0;border-radius:10px;background:var(--global-divider-color);color:var(--global-theme-color);font-size:.83rem}
.about-section[open] .about-section-number{color:white;background:var(--global-theme-color)}
.about-section-label{flex:1;min-width:0}
.about-chevron{display:inline-block;width:10px;height:10px;flex-shrink:0;margin-right:.25rem;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);transition:transform .18s ease}
.about-section[open] .about-chevron{transform:rotate(225deg)}
.about-section-content{padding:0 1.5rem 1.4rem 5.9rem;font-size:.96rem;line-height:1.8;overflow-wrap:anywhere}
.about-section-content p{margin-bottom:1rem}
.about-section-content p:last-child{margin-bottom:0}
.about-section-content ul{padding-left:1.25rem;margin-top:.25rem;margin-bottom:.25rem}
.about-section-content li{margin-bottom:.5rem}
@media(max-width:700px){.about-accordion{gap:.65rem}.about-section>summary{padding:.88rem 1rem;min-height:64px;gap:.7rem;font-size:1rem}.about-section-number{width:31px;height:31px;font-size:.77rem}.about-section-content{padding:0 1.1rem 1.2rem;font-size:.93rem;line-height:1.73}}
@media(prefers-reduced-motion:reduce){.about-section,.about-chevron{transition:none}}
</style>

<div class="about-intro"><p>My background spans computational pathology, computer vision, and practical machine learning research. Open one section at a time to explore my background, work, and professional service.</p></div>

<div class="about-accordion" aria-label="About sections">
<details class="about-section" name="about-sections" open>
  <summary><span class="about-section-number" aria-hidden="true">01</span><span class="about-section-label">Research profile</span><span class="about-chevron" aria-hidden="true"></span></summary>
  <div class="about-section-content">
<p>I am a computer vision researcher working at the intersection of computational pathology, medical imaging, multimodal artificial intelligence, and practical machine learning systems. My research combines algorithm design with the development of reproducible data-processing and model-evaluation pipelines.</p>
<p>During my postdoctoral research in Stanford University's Department of Pathology, I have worked on whole-slide histopathology image analysis, including tile extraction, artifact filtering, quality control, tissue classification, segmentation, and annotation workflows. I have also worked with image and text foundation models for multimodal pathology applications, and contributed to dataset construction and clinical prediction research.</p>
<p>My earlier research at Kyungpook National University in South Korea covered gesture recognition, real-time visual interaction, industrial anomaly detection, small-object detection, and handwriting recognition. This breadth motivates my interest in methods that can generalize across domains and be integrated into usable tools.</p>
</div>
</details>

<details class="about-section" name="about-sections">
  <summary><span class="about-section-number" aria-hidden="true">02</span><span class="about-section-label">Academic background</span><span class="about-chevron" aria-hidden="true"></span></summary>
  <div class="about-section-content">
<p>I completed my <strong>Ph.D. in Computer Vision at Kyungpook National University in 2024</strong>, following an M.Sc. in Applied Mathematics with Computer Applications from Bharathiar University, India, and a B.Sc. in the same discipline from Nirmala College for Women.</p>
</div>
</details>

<details class="about-section" name="about-sections">
  <summary><span class="about-section-number" aria-hidden="true">03</span><span class="about-section-label">Research and engineering interests</span><span class="about-chevron" aria-hidden="true"></span></summary>
  <div class="about-section-content">
<p>My current interests include reliable medical image analysis, multimodal vision-language learning, foundation models, real-time computer vision, and efficient model development. On the implementation side, I work with Python, PyTorch, TensorFlow, QuPath, MLflow, multi-GPU experimentation, and Docker-based prototyping.</p>
<p>I value rigorous evaluation, careful dataset preparation, transparent reporting of research status, and practical applications of AI.</p>
<p>For specific contributions and publications, see <a href="{{ '/projects/' | relative_url }}">Research &amp; Projects</a> and <a href="{{ '/publications/' | relative_url }}">Publications</a>. My <a href="{{ '/cv/' | relative_url }}">CV</a> page provides further professional background.</p>
</div>
</details>

<details class="about-section" name="about-sections">
  <summary><span class="about-section-number" aria-hidden="true">04</span><span class="about-section-label">Academic and professional service</span><span class="about-chevron" aria-hidden="true"></span></summary>
  <div class="about-section-content">
<ul>
  <li><strong>Co-organizer / track chair:</strong> RECCAP 2026, IIT Palakkad; North American Young Investigators Symposium on Mathematical Oncology 2026, Stanford University.</li>
  <li><strong>Conference reviewing:</strong> CVPR, NeurIPS, MICCAI, WACV, and ACM Multimedia (2026).</li>
  <li><strong>Associate Editor:</strong> IEEE Journal of Biomedical and Health Informatics (JBHI), Clinical Informatics.</li>
  <li><strong>Journal reviewing:</strong> IEEE SMC Magazine, IEEE Access, IEEE Journal of Biomedical and Health Informatics, Computer Animation and Virtual Worlds, International Journal of Advanced Manufacturing Technology, and Journal of Autonomous Intelligence.</li>
  <li><strong>Professional memberships:</strong> IEEE and ACM.</li>
</ul>
</div>
</details>

<details class="about-section" name="about-sections">
  <summary><span class="about-section-number" aria-hidden="true">05</span><span class="about-section-label">Selected honors</span><span class="about-chevron" aria-hidden="true"></span></summary>
  <div class="about-section-content">
<ul>
  <li><strong>2026</strong>: Best Oral Presentation Runner-Up, Women in MICCAI (WiM) 2026.</li>
  <li><strong>2026</strong>: Charles B. Carrington Memorial Award for Outstanding Poster Presentation, Stanford University.</li>
  <li><strong>2024</strong>: Best Thesis Award, Kyungpook National University.</li>
  <li><strong>2021 to 2022</strong>: Best Paper Awards at multiple conferences, as listed in the CV.</li>
</ul>
</div>
</details>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Fallback for browsers without native exclusive named-details support.
  const sections = Array.from(document.querySelectorAll(".about-accordion .about-section"));
  sections.forEach(function (section) {
    section.addEventListener("toggle", function () {
      if (!section.open) return;
      sections.forEach(function (other) {
        if (other !== section && other.open) other.open = false;
      });
    });
  });
});
</script>
