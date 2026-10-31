---
layout: page
title: Gesture Recognition and Indian Sign Language
description: Landmark-based gesture understanding with MediaPipe and GRU sequence models
importance: 7
category: human-centered-ai
---

This project investigated temporal gesture understanding for Indian Sign Language (ISL) and gesture-driven interaction. The focus was on converting tracked face, hand, and pose landmarks into time-aligned sequences that can be modeled for real-time recognition.

**Research period:** February 2022 – May 2023  
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

Computer vision, MediaPipe, landmark tracking, temporal sequence modeling, GRUs, gesture classification, human–computer interaction.

## Related work

See [Gesture2Music]({{ '/projects/5_gesture2music/' | relative_url }}) for the separately presented research on continuous gesture-driven music generation.
