---
layout: page
title: Research & Projects
permalink: /projects/
description: Selected research and engineering projects.
nav: true
nav_order: 2
---


<p class="pj-intro">A selection of my research and engineering work. Explore a project for its goals and contributions, or visit <a href="{{ '/publications/' | relative_url }}">Publications</a> for publication records.</p>

<div class="pj-grid">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <article class="pj-card">
    <a href="{{ project.url | relative_url }}">
      {% if project.title == 'STARC-9' %}
        <img src="{{ '/assets/img/projects/STARC9_1.jpg' | relative_url }}" alt="STARC-9 histopathology project visual" loading="lazy">
      {% elsif project.title == 'Gesture2Music' %}
        <img src="{{ '/assets/img/projects/gesture-vision.svg' | relative_url }}" alt="Illustration of gesture recognition" loading="lazy">
      {% elsif project.title == 'Industrial Anomaly Detection' %}
        <img src="{{ '/assets/img/projects/anomaly-vision.svg' | relative_url }}" alt="Illustration of industrial image inspection" loading="lazy">
      {% elsif project.title == 'TRIAGE-MIL' %}
        <img src="{{ '/assets/img/projects/survival-vision.svg' | relative_url }}" alt="Illustration of whole-slide image instance selection" loading="lazy">
      {% else %}
        <img src="{{ '/assets/img/projects/pathology-workflow.svg' | relative_url }}" alt="Illustration of digital pathology workflow" loading="lazy">
      {% endif %}
      <div class="pj-content">
        <div class="pj-tag">{{ project.category | replace: '-', ' ' }}</div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </article>
{% endfor %}
</div>
