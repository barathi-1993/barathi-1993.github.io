---
layout: page
title: Gesture Recognition and Indian Sign Language
description: Landmark-based gesture understanding with MediaPipe and GRU sequence models
importance: 7
category: human-centered-ai
---

<figure style="margin:1.35rem 0;">
  <img src="{{ '/assets/img/research/gesture-recognition-workflow.svg' | relative_url }}" alt="Gesture recognition from video frames to landmark extraction and temporal sequence analysis" class="img-fluid rounded" width="1200" height="350" loading="lazy" style="width:100%;height:auto;">
  <figcaption style="font-size:.8rem;text-align:center;color:var(--global-text-color-light);margin-top:.4rem;">Conceptual research workflow</figcaption>
</figure>


This project investigated temporal gesture understanding for Indian Sign Language (ISL) and gesture-driven interaction. The focus was on converting tracked face, hand, and pose landmarks into time-aligned sequences that can be modeled for real-time recognition.

**Research period:** February 2022 to May 2023  
**Funder:** School of Computer Science and Engineering, Kyungpook National University, South Korea  
**Role:** Project Lead

## Research objectives

- Develop a gesture-recognition pipeline for ISL and other structured human gestures.
- Capture temporal movement patterns through face, hand, and pose landmarks.
- Explore low-latency interfaces linking recognized gestures with language and musical outputs.

## Contributions

- Curated multi-label datasets for sign-language and gesture-driven interaction tasks.
- Extracted timestamped landmark sequences using MediaPipe.
- Applied gated recurrent unit (GRU) models to learn temporal patterns in gesture sequences.
- Designed workflows for generating corresponding ISL text or musical representations from classified gestures.

## Methods

Computer vision, MediaPipe, landmark tracking, temporal sequence modeling, GRUs, gesture classification, human-computer interaction.

For manuscript titles and conference papers arising from this research area, see [Publications]({{ '/publications/' | relative_url }}).
