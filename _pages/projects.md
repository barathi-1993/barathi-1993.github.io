---
layout: page
title: Research
permalink: /projects/
description: Selected research contributions and funded programs spanning medical AI, computer vision, and multimodal learning.
nav: true
nav_order: 2
---

<style>
.research-intro{max-width:780px;margin-bottom:1.75rem;color:var(--global-text-color)}
.research-section-head{margin:2.5rem 0 .5rem}
.portfolio-project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin:1.25rem 0}
.portfolio-project{border:1px solid var(--global-divider-color);border-radius:12px;padding:1.3rem;display:flex;flex-direction:column;background:var(--global-bg-color);transition:border-color .2s ease,transform .2s ease}
.portfolio-project:hover{border-color:var(--global-theme-color);transform:translateY(-2px)}
.portfolio-project .research-figure{width:100%;aspect-ratio:16/9;object-fit:contain;display:block;margin:0 0 1rem;background:var(--global-bg-color);border-radius:8px}
.portfolio-project h3{font-size:1.15rem;margin:0 0 .5rem}
.portfolio-project p{flex-grow:1;font-size:.94rem;margin-bottom:.85rem}
.portfolio-project .project-tag{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--global-theme-color);font-weight:700;margin-bottom:.6rem}
.research-programs{display:grid;gap:1rem;margin:1.4rem 0}
.research-program{border:1px solid var(--global-divider-color);border-left:3px solid var(--global-theme-color);border-radius:9px;padding:1.05rem 1.25rem}
.research-program h3{font-size:1.08rem;margin:.25rem 0 .5rem}
.research-program .research-period{font-size:.82rem;color:var(--global-text-color-light);font-weight:600;letter-spacing:.025em}
.research-program .program-meta{font-size:.87rem;margin-bottom:.55rem}
.research-program p{font-size:.94rem;margin:0 0 .5rem}
.research-program .related-work{font-size:.85rem;margin:0}
@media (prefers-reduced-motion:reduce){.portfolio-project{transition:none}.portfolio-project:hover{transform:none}}
</style>

<div class="research-intro">
My research spans AI for histopathology, multimodal modeling, visual recognition, and applied machine learning. The portfolio below highlights specific methods and outputs. The funded-project summary further down explains the broader programs, collaborators, responsibilities, and research settings behind this work.
</div>

## Selected research & technical contributions

<div class="portfolio-project-grid">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <article class="portfolio-project">
    {% if project.img %}
      <a href="{{ project.url | relative_url }}">
        <img class="research-figure" src="{{ project.img | relative_url }}" alt="Research figure for {{ project.title }}" loading="lazy">
      </a>
    {% endif %}
    <div class="project-tag">{{ project.category | replace: '-', ' ' }}</div>
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.description }}</p>
    <a href="{{ project.url | relative_url }}" aria-label="Read project details for {{ project.title }}">Explore project →</a>
  </article>
{% endfor %}
</div>

## Funded research projects

The following programs summarize my funded research experience, including work that spans multiple individual papers and engineering deliverables.

<div class="research-programs">
  <section class="research-program">
    <div class="research-period">07/2024 – Present · United States</div>
    <h3>Multimodal Analysis in Digital Pathology</h3>
    <div class="program-meta"><strong>Funder:</strong> National Institutes of Health (NIH) · <strong>Role:</strong> Postdoctoral Researcher</div>
    <p>Developing end-to-end computational pathology workflows for whole-slide image (WSI) preprocessing, tile-level classification and segmentation, morphology-aware dataset curation, QuPath-guided annotation, and pathology foundation-model-based image–text analysis.</p>
    <p class="related-work"><strong>Explore:</strong> <a href="{{ '/projects/2_digital_pathology_pipeline/' | relative_url }}">Digital Pathology AI Pipeline</a> · <a href="{{ '/projects/3_mufasa/' | relative_url }}">MUFASA</a> · <a href="{{ '/projects/4_triage_mil/' | relative_url }}">TRIAGE-MIL</a> · <a href="{{ '/projects/1_starc9/' | relative_url }}">STARC-9</a></p>
  </section>
  <section class="research-program">
    <div class="research-period">09/2022 – 02/2024 · South Korea</div>
    <h3>Abnormal Image Detection and Localization for Fabric Products</h3>
    <div class="program-meta"><strong>Funder:</strong> National Research Foundation (NRF), South Korea · <strong>Role:</strong> Project Lead</div>
    <p>Developed image-based fabric quality-control methods using spectral clustering for defect/non-defect grouping and transfer learning with convolutional neural networks for defect localization.</p>
    <p class="related-work"><a href="{{ '/projects/7_industrial_anomaly_detection/' | relative_url }}">Explore the industrial anomaly detection project →</a></p>
  </section>
  <section class="research-program">
    <div class="research-period">02/2022 – 05/2023 · South Korea</div>
    <h3>Gesture Recognition and Interactive Music Generation</h3>
    <div class="program-meta"><strong>Funder:</strong> School of Computer Science and Engineering, Kyungpook National University · <strong>Role:</strong> Project Lead</div>
    <p>Built landmark-driven gesture-recognition pipelines for Indian Sign Language (ISL) and interactive music, combining MediaPipe face/hand pose sequences with GRU-based temporal modeling and real-time output generation.</p>
    <p class="related-work"><strong>Explore:</strong> <a href="{{ '/projects/6_gesture_recognition_isl/' | relative_url }}">Gesture Recognition and ISL</a> · <a href="{{ '/projects/5_gesture2music/' | relative_url }}">Gesture2Music</a></p>
  </section>
  <section class="research-program">
    <div class="research-period">07/2021 – 12/2021 · South Korea</div>
    <h3>Lightweight Disabled Parking Sign Detection</h3>
    <div class="program-meta"><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea · <strong>Role:</strong> Project Developer and Lead</div>
    <p>Explored lightweight YOLOv5-based detection for small disabled-parking signs, integrating multi-scale feature fusion with PANet and weighted BiFPN, and evaluating on augmented sign imagery.</p>
    <p class="related-work"><a href="{{ '/projects/8_disabled_sign_detection/' | relative_url }}">Explore the object detection project →</a></p>
  </section>
  <section class="research-program">
    <div class="research-period">12/2021 – 02/2022 · South Korea</div>
    <h3>Korean Handwritten Text Recognition</h3>
    <div class="program-meta"><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea · <strong>Role:</strong> Project Lead</div>
    <p>Developed a two-stage approach for historical Korean handwriting, using CNN-based text-region detection and bidirectional LSTM sequence recognition for transcription.</p>
    <p class="related-work"><a href="{{ '/projects/9_korean_handwriting/' | relative_url }}">Explore the document AI project →</a></p>
  </section>
  <section class="research-program">
    <div class="research-period">03/2021 – 02/2022 · South Korea</div>
    <h3>Real-Time Emotion Recognition System</h3>
    <div class="program-meta"><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea · <strong>Role:</strong> Project Developer</div>
    <p>Created a webcam-based emotion analysis pipeline with MediaPipe landmark extraction, model benchmarking, and integration into a prototype digital-twin-based decision-support workflow.</p>
    <p class="related-work"><a href="{{ '/projects/10_emotion_recognition/' | relative_url }}">Explore the affective computing project →</a></p>
  </section>
</div>

## Research engineering

Across these programs, I work on data preparation and quality control, annotation, model training, reproducible evaluation, and the integration of research models into usable software. For publication-specific results, see [Publications]({{ '/publications/' | relative_url }}); for a broader professional timeline, see [Experience]({{ '/experience/' | relative_url }}).
