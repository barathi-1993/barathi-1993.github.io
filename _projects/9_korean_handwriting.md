---
layout: page
title: Korean Handwritten Text Recognition
description: Historical handwriting transcription using CNN-based text detection and Bi-LSTM sequence recognition
importance: 9
category: computer-vision
---

<figure style="margin:1.35rem 0;">
  <img src="{{ '/assets/img/research/korean-handwriting-workflow.svg' | relative_url }}" alt="Document analysis from handwritten Korean text to recognized sequence" class="img-fluid rounded" width="1200" height="350" loading="lazy" style="width:100%;height:auto;">
  <figcaption style="font-size:.8rem;text-align:center;color:var(--global-text-color-light);margin-top:.4rem;">Conceptual research workflow</figcaption>
</figure>


This project focused on extracting and transcribing historical Korean handwriting from document images. It employed a two-stage workflow: first localizing text regions and then recognizing the character sequences in the detected regions.

**Research period:** December 2021 to February 2022  
**Funder:** Small and Medium Business Technology Information Promotion Agency, South Korea  
**Role:** Project Lead

## Research objectives

- Detect handwritten text regions in scanned Korean documents.
- Transcribe detected historical handwriting into modern Korean text.

## Contributions

- Annotated text regions and prepared bounding-box labels for detector training.
- Used a CNN-based approach for text localization.
- Applied bidirectional long short-term memory (Bi-LSTM) sequence modeling to recognize detected text.
- Developed an integrated detection-to-transcription workflow.

## Methods

Document image analysis, text detection, convolutional neural networks, Bi-LSTM, optical character recognition (OCR), sequence modeling.
