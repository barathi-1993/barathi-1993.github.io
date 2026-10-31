---
layout: page
title: Digital Pathology AI Pipeline
description: Whole-slide image preprocessing, annotation, multimodal modeling and clinical laboratory AI workflows
importance: 2
category: medical-ai
---

<figure style="margin:1.35rem 0;">
  <img src="{{ '/assets/img/research/digital-pathology-workflow.svg' | relative_url }}" alt="Whole-slide image analysis from tissue scanning to automated reporting" class="img-fluid rounded" width="1200" height="350" loading="lazy" style="width:100%;height:auto;">
  <figcaption style="font-size:.8rem;text-align:center;color:var(--global-text-color-light);margin-top:.4rem;">Conceptual research workflow</figcaption>
</figure>


This research brings together the major stages of building reproducible AI systems for histopathology, from whole-slide image (WSI) preparation and quality control to model development, region-level annotation, and downstream analysis.

**Research program:** Multimodal Analysis in Digital Pathology  
**Period:** July 2024 to Present  
**Funder:** National Institutes of Health (NIH), USA  
**Role:** Postdoctoral Researcher

## Whole-slide image workflow

- Developed end-to-end WSI pipelines for tissue classification, tumor-region segmentation, and multimodal pathology analysis.
- Built scalable preprocessing procedures for artifact filtering, tissue/tile extraction, and image quality checks.
- Applied pathology foundation models and image-text representations for downstream analysis and reporting workflows.
- Used QuPath for tumor-region annotation and quality assurance of reference labels.
- Curated large-scale tissue-tile datasets to support robust experimentation and reproducible model evaluation.

## Related clinical laboratory automation

In related collaborative work, developed AI-assisted workflows for serum protein electrophoresis (SPE) and immunofixation electrophoresis (IFE), including:

- Detecting and quantifying candidate monoclonal (M-protein) peaks in electrophoretic profiles.
- Detecting abnormal monoclonal bands in electrophoresis gel images.
- Integrating quantitative and image-derived signals into report-oriented analysis workflows.

This clinical chemistry work is described separately from the NIH-funded histopathology pipeline; the funding listed above is not intended as a claim about its specific funding source.

## Research methods and capabilities

The broader research program also covers robust WSI preprocessing, information-aware image selection, tissue-level dataset development, foundation-model representation learning, and patient-level predictive modeling.

For manuscript titles, results, and publication status, see [Publications]({{ '/publications/' | relative_url }}).
