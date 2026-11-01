---
layout: page
title: CV
permalink: /cv/
description: Education, research experience, technical capabilities and professional service.
nav: true
nav_order: 6
---

<style>
.cv-intro{margin:0 0 1.5rem}
.cv-intro h2{font-size:clamp(1.5rem,3.5vw,2rem);margin:0 0 .35rem}
.cv-intro p{margin:.2rem 0 .65rem;line-height:1.6}
.cv-accordion{display:grid;grid-template-columns:minmax(0,1fr);gap:.85rem}
.cv-panel{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-bg-color);overflow:hidden}
.cv-panel>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:.8rem;padding:1.1rem 1.25rem;min-height:59px;font-weight:700;color:var(--global-text-color)}
.cv-panel>summary::-webkit-details-marker{display:none}
.cv-panel>summary::after{content:"+";font-size:1.45rem;line-height:1;margin-left:auto;color:var(--global-theme-color);font-weight:400}
.cv-panel[open]>summary::after{content:"−"}
.cv-panel>summary:hover{color:var(--global-theme-color)}
.cv-panel>summary:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:-4px}
.cv-panel-icon{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;flex:none;color:var(--global-theme-color);background:var(--global-divider-color);border-radius:9px}
.cv-panel-content{padding:0 1.2rem 1.25rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem}
.cv-slot{border:1px solid var(--global-divider-color);border-radius:10px;padding:1.05rem;min-width:0}
.cv-slot h3{font-size:1.02rem;line-height:1.4;margin:0 0 .4rem}
.cv-slot p{font-size:.92rem;line-height:1.6;margin:0 0 .5rem}
.cv-slot p:last-child{margin-bottom:0}
.cv-slot ul{padding-left:1.2rem;font-size:.92rem;line-height:1.6;margin:.5rem 0 0}
.cv-slot li{margin:.2rem 0}
.cv-slot .cv-period{display:block;color:var(--global-text-color-light);font-size:.84rem;margin:0 0 .55rem}
.cv-slot--wide{grid-column:1 / -1}
.cv-links{display:flex;gap:.75rem;flex-wrap:wrap}
.cv-links a{font-size:.93rem}
@media(max-width:700px){.cv-panel-content{grid-template-columns:1fr;padding:0 .85rem 1rem}.cv-slot--wide{grid-column:auto}.cv-panel>summary{padding:1rem}.cv-slot{padding:.9rem}}
</style>

<div class="cv-intro">
  <h2>Barathi Subramanian</h2>
  <p>Computer Vision · Medical AI · Applied Machine Learning</p>
  <p><strong>Contact:</strong> <a href="mailto:barathi1@stanford.edu">barathi1@stanford.edu</a> · <a href="https://github.com/barathi-1993">GitHub</a></p>
</div>

<div class="cv-accordion">
  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-briefcase"></i></span>Appointments and Experience</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Postdoctoral Scholar</h3>
        <span class="cv-period">Stanford University, Department of Pathology · July 2024 to Present</span>
        <ul>
          <li>Developed end-to-end pipelines for whole-slide histopathology preprocessing, quality control, tissue classification and segmentation.</li>
          <li>Worked with image and text foundation models for multimodal pathology research.</li>
          <li>Created QuPath annotation and quality-assurance workflows, and curated tile-level datasets.</li>
          <li>Built Python and PyTorch workflows for model evaluation and visual analytics.</li>
        </ul>
      </div>
      <div class="cv-slot">
        <h3>Research Assistant</h3>
        <span class="cv-period">Kyungpook National University, South Korea · September 2020 to February 2024</span>
        <ul>
          <li>Researched gesture recognition, industrial defect analysis, small-object detection and handwriting recognition.</li>
          <li>Developed MediaPipe-based temporal gesture recognition pipelines.</li>
          <li>Investigated spectral clustering and transfer learning for defect localization.</li>
        </ul>
      </div>
    </div>
  </details>

  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-graduation-cap"></i></span>Education</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Ph.D. in Computer Vision</h3>
        <span class="cv-period">Kyungpook National University, South Korea · 2024</span>
        <p>Research included gesture recognition, anomaly detection and small-object detection. Best Thesis Award, 2024.</p>
      </div>
      <div class="cv-slot">
        <h3>M.Sc. in Applied Mathematics with Computer Applications</h3>
        <span class="cv-period">Bharathiar University, India · 2015</span>
      </div>
      <div class="cv-slot">
        <h3>B.Sc. in Applied Mathematics with Computer Applications</h3>
        <span class="cv-period">Nirmala College for Women, India · 2013</span>
      </div>
    </div>
  </details>

  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-flask"></i></span>Research Projects</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Multimodal Analysis in Digital Pathology</h3>
        <span class="cv-period">NIH, USA · July 2024 to Present</span>
        <p>Whole-slide image preprocessing, tissue classification and segmentation, multimodal foundation models, and dataset curation.</p>
      </div>
      <div class="cv-slot">
        <h3>Fabric Defect Detection and Localization</h3>
        <span class="cv-period">NRF, South Korea · September 2022 to February 2024</span>
        <p>Spectral clustering, binary defect detection and transfer-learning-based localization.</p>
      </div>
      <div class="cv-slot">
        <h3>Gesture Recognition</h3>
        <span class="cv-period">February 2022 to May 2023</span>
        <p>Indian Sign Language and interactive applications using MediaPipe landmarks and GRU sequence models.</p>
      </div>
      <div class="cv-slot">
        <h3>Lightweight Disabled Parking Sign Detection</h3>
        <span class="cv-period">July 2021 to December 2021</span>
        <p>Enhanced YOLOv5 with PANet and weighted BiFPN for efficient small-object detection.</p>
      </div>
      <div class="cv-slot">
        <h3>Korean Handwritten Text Recognition</h3>
        <span class="cv-period">December 2021 to February 2022</span>
        <p>CNN-based text localization with Bi-LSTM-based transcription.</p>
      </div>
      <div class="cv-slot">
        <h3>Real-Time Emotion Recognition System</h3>
        <span class="cv-period">March 2021 to February 2022</span>
        <p>MediaPipe-based facial and body landmark analysis with emotion classification and a digital-twin prototype.</p>
      </div>
      <div class="cv-slot cv-slot--wide"><p>Detailed objectives, funding and technical contributions are available on the <a href="{{ '/projects/' | relative_url }}">Research page</a>.</p></div>
    </div>
  </details>

  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-code"></i></span>Technical Skills</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Computer Vision and Deep Learning</h3>
        <p>Vision Transformers, transfer learning, YOLO, DETR, U-Net, SegFormer, SAM, anomaly detection and temporal modeling.</p>
      </div>
      <div class="cv-slot">
        <h3>Multimodal and Generative AI</h3>
        <p>Vision-language models, transformer architectures, attention mechanisms and knowledge distillation.</p>
      </div>
      <div class="cv-slot">
        <h3>Research Engineering</h3>
        <p>Python, PyTorch, TensorFlow, QuPath, MLflow, reproducible evaluation and multi-GPU training.</p>
      </div>
      <div class="cv-slot">
        <h3>MLOps and Infrastructure</h3>
        <p>Docker, Streamlit, Git, GitHub Actions, AWS and GCP.</p>
      </div>
    </div>
  </details>

  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-book-open"></i></span>Publications and Professional Service</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Publications</h3>
        <p>Browse peer-reviewed journal papers, conference publications and other research outputs.</p>
        <div class="cv-links"><a href="{{ '/publications/' | relative_url }}">View publications</a></div>
      </div>
      <div class="cv-slot">
        <h3>Academic and Editorial Service</h3>
        <p>Associate Editor, IEEE Journal of Biomedical and Health Informatics; conference and journal reviewing; co-organizer and track chair for research events.</p>
        <div class="cv-links"><a href="{{ '/service/' | relative_url }}">Service and awards</a></div>
      </div>
    </div>
  </details>

  <details class="cv-panel">
    <summary><span class="cv-panel-icon" aria-hidden="true"><i class="fa-solid fa-award"></i></span>Awards and Honors</summary>
    <div class="cv-panel-content">
      <div class="cv-slot">
        <h3>Selected Honors</h3>
        <ul>
          <li>Best Oral Presentation Runner-Up, Women in MICCAI, 2026.</li>
          <li>Charles B. Carrington Memorial Award for Outstanding Poster Presentation, Stanford University, 2026.</li>
          <li>Best Thesis Award, Kyungpook National University, 2024.</li>
          <li>Best Paper Awards at multiple conferences, 2021 to 2022.</li>
        </ul>
      </div>
      <div class="cv-slot">
        <h3>Memberships</h3>
        <p>IEEE and ACM.</p>
      </div>
    </div>
  </details>
</div>
