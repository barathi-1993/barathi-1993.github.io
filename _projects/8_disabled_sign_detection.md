---
layout: page
title: Lightweight Disabled Parking Sign Detection
description: Efficient small-object recognition using an enhanced YOLOv5 detection architecture
importance: 8
category: computer-vision
---

<figure style="margin:1.35rem 0;">
  <img src="{{ '/assets/img/research/parking-sign-workflow.svg' | relative_url }}" alt="Small parking sign recognition from object detection through localization" class="img-fluid rounded" width="1200" height="350" loading="lazy" style="width:100%;height:auto;">
  <figcaption style="font-size:.8rem;text-align:center;color:var(--global-text-color-light);margin-top:.4rem;">Conceptual research workflow</figcaption>
</figure>


This project studied how to recognize small disabled-parking signs in complex imagery while reducing the computational cost of the detection model. It explored feature fusion and architectural simplification for practical object detection.

**Research period:** July 2021 to December 2021  
**Funder:** Small and Medium Business Technology Information Promotion Agency, South Korea  
**Role:** Project Developer and Lead

## Research objectives

- Improve small-object detection in YOLOv5 for disabled-parking sign recognition.
- Develop a lightweight fused-architecture variant (LF-YOLOv5) that balances detection effectiveness and computational efficiency.

## Contributions

- Studied limitations of small-object localization in conventional object detectors.
- Integrated Path Aggregation Network (PANet) and weighted Bidirectional Feature Pyramid Network (BiFPN) components for multi-scale feature fusion.
- Explored reducing feature-map computation to lower model complexity.
- Conducted experiments using 1,025 original disabled-sign images, augmented to approximately 15,000 training and evaluation samples.

## Methods

YOLOv5, object detection, PANet, weighted BiFPN, feature fusion, data augmentation, efficient deep learning.

*Note: The figures above describe the project scope and dataset preparation; no independent benchmark score is claimed here.*
