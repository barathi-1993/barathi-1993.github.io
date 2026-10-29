---
layout: page
title: Research
permalink: /projects/
description: Selected research and engineering work in medical AI, computer vision, and applied machine learning.
nav: true
nav_order: 2
---
<style>
.portfolio-project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin:1.5rem 0}
.portfolio-project{border:1px solid var(--global-divider-color);border-radius:12px;padding:1.3rem;display:flex;flex-direction:column}
.portfolio-project h3{font-size:1.17rem;margin:0 0 .5rem}
.portfolio-project p{flex-grow:1;font-size:.95rem}
.portfolio-project .project-tag{font-size:.72rem;letter-spacing:.09em;text-transform:uppercase;color:var(--global-theme-color);font-weight:700;margin-bottom:.7rem}
</style>

My work ranges from research prototypes and datasets to systems-oriented computer vision. Each project page describes the problem, approaches, and my role; publication status is tracked separately under [Publications]({{ '/publications/' | relative_url }}).

<div class="portfolio-project-grid">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <article class="portfolio-project">
    <div class="project-tag">{{ project.category | replace: '-', ' ' }}</div>
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.description }}</p>
    <a href="{{ project.url | relative_url }}" aria-label="Read project details for {{ project.title }}">Project details →</a>
  </article>
{% endfor %}
</div>

## Engineering focus

Across projects I work with model training, experiment tracking, image annotation, reproducible evaluation, and the integration of research methods into usable workflows. See [Experience]({{ '/experience/' | relative_url }}) for technical competencies and roles.
