---
layout: page
title: Research
permalink: /projects/
description: Funded research projects spanning medical AI, computer vision, multimodal learning, and intelligent systems.
nav: true
nav_order: 2
---

<style>
.research-lede{max-width:780px;margin:0 0 1.75rem;font-size:1.03rem;line-height:1.7}
.research-summary{display:flex;flex-wrap:wrap;gap:.55rem;margin:0 0 2rem}
.research-filter{appearance:none;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--global-divider-color);border-radius:99px;padding:.46rem .85rem;min-height:40px;font-size:.84rem;color:var(--global-text-color);background:var(--global-bg-color);cursor:pointer;transition:background .15s ease,color .15s ease,border-color .15s ease}
.research-filter[aria-pressed="true"]{background:var(--global-theme-color);border-color:var(--global-theme-color);color:#fff}
.research-filter:hover:not([aria-pressed="true"]){color:var(--global-theme-color);border-color:var(--global-theme-color)}
.research-filter:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:2px}
.research-filter-count{font-size:.84rem;color:var(--global-text-color-light);margin:-1.45rem 0 1.5rem}
.research-programs{display:grid;grid-template-columns:minmax(0,1fr);gap:1.45rem;max-width:1100px;margin:1.5rem auto 2rem}
.research-program{border:1px solid var(--global-divider-color);border-radius:14px;padding:clamp(1.15rem,2.8vw,1.8rem);background:var(--global-bg-color);display:flex;flex-direction:column;min-width:0;box-shadow:0 6px 26px rgba(40,48,87,.045)}
.research-program:first-child{grid-column:auto}
.research-program[hidden]{display:none!important}
.research-program .research-area{font-size:.73rem;letter-spacing:.08em;text-transform:uppercase;color:var(--global-theme-color);font-weight:700;margin-bottom:.5rem}
.research-program h2{font-size:1.2rem;line-height:1.35;margin:.2rem 0 .75rem}
.research-program .research-meta{font-size:.85rem;line-height:1.7;color:var(--global-text-color);margin:0 0 .85rem}
.research-program .research-period{font-weight:600}
.research-program .research-overview{font-size:.94rem;line-height:1.6;margin:0 0 .85rem}
.research-program details{margin-top:auto;border-top:1px solid var(--global-divider-color);padding-top:.85rem}
.research-program summary{color:var(--global-theme-color);font-weight:600;cursor:pointer;font-size:.91rem}
.research-program details[open] summary{margin-bottom:.65rem}
.research-program ul{padding-left:1.25rem;margin:.5rem 0 .75rem;font-size:.9rem;line-height:1.58}
.research-program li{margin-bottom:.45rem}
.research-program .research-detail-link{font-size:.87rem}
.research-note{font-size:.87rem;color:var(--global-text-color);border-top:1px solid var(--global-divider-color);padding-top:1rem}
.research-visual{margin:.35rem 0 1.15rem;padding:.35rem;background:var(--global-bg-color);border:1px solid var(--global-divider-color);border-radius:11px;overflow:hidden}
.research-visual img{display:block;width:100%;height:auto;aspect-ratio:1200/350;object-fit:contain;border-radius:7px}
.research-visual figcaption{text-align:center;font-size:.76rem;color:var(--global-text-color-light);padding:.48rem .35rem .3rem}
.research-program .research-meta{margin-bottom:.6rem}
.research-program .research-overview{font-size:1rem}
@media(prefers-reduced-motion:reduce){.research-filter{transition:none}}
@media(max-width:650px){.research-program h2{font-size:1.12rem}.research-visual{margin:.3rem -.25rem .9rem}.research-visual img{min-height:110px}.research-visual figcaption{font-size:.7rem}}
</style>

<div class="research-lede">
My research focuses on developing reliable, end-to-end AI systems, from data collection and annotation through model development, evaluation, and deployment. The projects below summarize the broader research programs I have worked on, rather than repeating individual papers or method names already listed under <a href="{{ '/publications/' | relative_url }}">Publications</a>.
</div>

<div class="research-summary" role="group" aria-label="Filter research projects by area">
  <button type="button" class="research-filter" data-research-filter="all" aria-controls="research-programs" aria-pressed="true">All</button>
  <button type="button" class="research-filter" data-research-filter="medical-ai" aria-controls="research-programs" aria-pressed="false">Medical &amp; Multimodal AI</button>
  <button type="button" class="research-filter" data-research-filter="computer-vision" aria-controls="research-programs" aria-pressed="false">Computer Vision</button>
  <button type="button" class="research-filter" data-research-filter="human-computer-interaction" aria-controls="research-programs" aria-pressed="false">Human-Computer Interaction</button>
  <button type="button" class="research-filter" data-research-filter="efficient-deep-learning" aria-controls="research-programs" aria-pressed="false">Efficient Deep Learning</button>
  <button type="button" class="research-filter" data-research-filter="document-intelligence" aria-controls="research-programs" aria-pressed="false">Document Intelligence</button>
</div>
<p class="research-filter-count" id="research-filter-count" role="status" aria-live="polite">Showing all 6 research projects</p>

<div class="research-programs" id="research-programs">
  <article class="research-program" data-research-tags="medical-ai computer-vision">
    <div class="research-area">Medical AI · Computational Pathology</div>
    <h2>Multimodal Analysis in Digital Pathology</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/digital-pathology-workflow.svg' | relative_url }}" alt="Whole-slide images progressing through tissue tiles, tissue interpretation, and a report" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Jul 2024 to Present</div><div><strong>Funder:</strong> National Institutes of Health (NIH), USA</div><div><strong>Role:</strong> Postdoctoral Researcher</div></div>
    <p class="research-overview">Developing end-to-end whole-slide image (WSI) and multimodal histopathology pipelines, with an emphasis on scalable image processing, trustworthy data quality, pathology foundation models, and reproducible downstream analysis.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Build workflows for WSI and tile-level tissue classification, tumor segmentation, and image-text analysis.</li>
        <li>Design artifact filtering, tile extraction, and image-quality checks for consistent model inputs.</li>
        <li>Use QuPath for tumor-region annotations and reference-label quality assurance.</li>
        <li>Curate large-scale, tile-level histopathology datasets for benchmarking and reproducible evaluation.</li>
        <li>Train and integrate image and multimodal foundation models for biomedical analysis and reporting.</li>
        <li>In related clinical laboratory AI work, develop automated analysis of serum protein electrophoresis and immunofixation electrophoresis, including monoclonal peak quantification and abnormal-band detection.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/2_digital_pathology_pipeline/' | relative_url }}">Read the digital pathology project overview →</a></p>
    </details>
  </article>

  <article class="research-program" data-research-tags="computer-vision">
    <div class="research-area">Industrial Computer Vision</div>
    <h2>Abnormal Image Detection and Localization of Fabric Products</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/fabric-defect-workflow.svg' | relative_url }}" alt="Fabric image inspection followed by anomaly detection and defect localization" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Sep 2022 to Feb 2024</div><div><strong>Funder:</strong> National Research Foundation (NRF), South Korea</div><div><strong>Role:</strong> Project Lead</div></div>
    <p class="research-overview">Developed image-analysis methods to distinguish defective from non-defective fabric products and localize irregularities for automated quality-control inspection.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Apply spectral clustering to separate defect and non-defect image groups.</li>
        <li>Use transfer learning with deep convolutional neural networks for defect detection and localization.</li>
        <li>Develop repeatable vision-based workflows for industrial anomaly inspection.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/7_industrial_anomaly_detection/' | relative_url }}">Read the industrial vision project overview →</a></p>
    </details>
  </article>

  <article class="research-program" data-research-tags="human-computer-interaction computer-vision">
    <div class="research-area">Gesture Recognition · Human-Computer Interaction</div>
    <h2>Gesture Recognition and Interactive Systems</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/gesture-recognition-workflow.svg' | relative_url }}" alt="Gesture video progressing through landmark tracking, temporal modeling, and interactive output" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Feb 2022 to May 2023</div><div><strong>Funder:</strong> School of Computer Science and Engineering, Kyungpook National University, South Korea</div><div><strong>Role:</strong> Project Lead</div></div>
    <p class="research-overview">Investigated real-time gesture understanding for Indian Sign Language and interactive applications through visual landmark tracking and temporal sequence learning.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Curate multi-label datasets for sign-language recognition and gesture-driven music interaction.</li>
        <li>Extract timestamped face, hand, and pose landmark sequences using MediaPipe.</li>
        <li>Train GRU-based models to learn the temporal dynamics of human gestures.</li>
        <li>Map recognized gestures into language or musical representations for interactive output.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/6_gesture_recognition_isl/' | relative_url }}">Read the gesture recognition project overview →</a></p>
    </details>
  </article>

  <article class="research-program" data-research-tags="efficient-deep-learning computer-vision">
    <div class="research-area">Efficient Object Detection</div>
    <h2>Lightweight Model for Disabled Parking Sign Detection</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/parking-sign-workflow.svg' | relative_url }}" alt="Small parking sign detection from input to multi-scale feature fusion and localization" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Jul 2021 to Dec 2021</div><div><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea</div><div><strong>Role:</strong> Project Developer and Lead</div></div>
    <p class="research-overview">Developed a lightweight, feature-fusion-based object detector to improve small disabled-parking-sign localization while controlling model size and computational cost.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Enhance YOLOv5 for small-object detection through PANet and weighted BiFPN feature fusion.</li>
        <li>Explore architectural simplifications to reduce parameters and floating-point operations.</li>
        <li>Evaluate on 1,025 original sign images expanded through augmentation to approximately 15,000 samples.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/8_disabled_sign_detection/' | relative_url }}">Read the object detection project overview →</a></p>
    </details>
  </article>

  <article class="research-program" data-research-tags="document-intelligence computer-vision">
    <div class="research-area">Document AI · Sequence Modeling</div>
    <h2>Korean Handwritten Text Recognition</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/korean-handwriting-workflow.svg' | relative_url }}" alt="Historical handwritten documents progressing through text detection and transcription" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Dec 2021 to Feb 2022</div><div><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea</div><div><strong>Role:</strong> Project Lead</div></div>
    <p class="research-overview">Built a document understanding pipeline for locating historical Korean handwritten text and converting detected regions into machine-readable transcription.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Prepare handwritten text annotations and bounding-box labels.</li>
        <li>Detect text regions using CNN-based localization methods.</li>
        <li>Transcribe handwritten sequences using bidirectional LSTM models.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/9_korean_handwriting/' | relative_url }}">Read the handwriting recognition project overview →</a></p>
    </details>
  </article>

  <article class="research-program" data-research-tags="medical-ai human-computer-interaction">
    <div class="research-area">Affective Computing · Intelligent Systems</div>
    <h2>Real-Time Emotion Recognition System</h2>
    <figure class="research-visual">
      <img src="{{ '/assets/img/research/emotion-recognition-workflow.svg' | relative_url }}" alt="Webcam input progressing through face landmark analysis and emotion modeling" loading="lazy" width="1200" height="350">
      <figcaption>Conceptual overview of the workflow</figcaption>
    </figure>
    <div class="research-meta"><div class="research-period">Mar 2021 to Feb 2022</div><div><strong>Funder:</strong> Small and Medium Business Technology Information Promotion Agency, South Korea</div><div><strong>Role:</strong> Project Developer</div></div>
    <p class="research-overview">Investigated webcam-based expression analysis and an emotion-aware decision-support prototype using multi-region landmark extraction and machine-learning models.</p>
    <details><summary>Research objectives &amp; contributions</summary>
      <ul>
        <li>Curate a custom webcam dataset with diverse facial expressions and recording conditions.</li>
        <li>Extract face, hand, and body landmarks with MediaPipe.</li>
        <li>Train and benchmark multiple machine-learning approaches for real-time emotion recognition.</li>
        <li>Explore integration with a digital-twin prototype; this research is not presented as a clinically validated diagnostic system.</li>
      </ul>
      <p class="research-detail-link"><a href="{{ '/projects/10_emotion_recognition/' | relative_url }}">Read the emotion recognition project overview →</a></p>
    </details>
  </article>
</div>

<p class="research-note">Research projects summarize the broader work and responsibilities. Manuscript titles, acceptance status, and publication links are presented separately under <a href="{{ '/publications/' | relative_url }}">Publications</a>.</p>

<script src="{{ '/assets/js/research-filters.js' | relative_url | bust_file_cache }}" defer></script>
