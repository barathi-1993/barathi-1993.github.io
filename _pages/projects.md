---
layout: page
title: Research & Projects
permalink: /projects/
description: Selected research and engineering projects.
nav: true
nav_order: 2
---
<style>
.pj-intro{max-width:42rem;line-height:1.7;color:var(--global-text-color-light);margin-bottom:2.1rem}
.pj-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.7rem}
.pj-card{border:1px solid var(--global-divider-color);border-radius:14px;overflow:hidden}
.pj-card a{display:block;text-decoration:none;color:inherit}
.pj-card img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#eaf0f6}
.pj-card .pj-content{padding:1.15rem 1.2rem 1.4rem}
.pj-card .pj-tag{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--global-theme-color);margin-bottom:.55rem}
.pj-card h2{font-size:1.18rem;margin:0 0 .5rem}
.pj-card p{font-size:.92rem;line-height:1.65;color:var(--global-text-color-light);margin:0}
@media(max-width:640px){.pj-grid{grid-template-columns:1fr;gap:1.2rem}}
</style>

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
