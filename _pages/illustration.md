---
layout: page
title: Illustrations
permalink: /illustration/
image: 08.jpg
---

<section class="category-list-section">
  <h1 class="category-list-title">Illustration Categories</h1>
  <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
    <!-- Projects -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Projects</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Graduate projects, official</div>
      {% assign latest_project = site.posts | where_exp:'p','p.categories contains "projects"' | sort: 'date' | reverse | first %}
      {% if latest_project %}
        <div style="margin-bottom:10px;">最新：<a href="{{ latest_project.url | relative_url }}">{{ latest_project.title }}</a></div>
      {% endif %}
      <div style="font-size:14px;">
        {% assign gallery_demo = site.posts | where_exp:'p', 'p.url contains "projects-gallery"' | first %}
        {% assign lightbox_demo = site.posts | where_exp:'p', 'p.url contains "projects-lightbox"' | first %}
        <a href="{{ gallery_demo.url | relative_url }}">Gallery Demo</a> |
        <a href="{{ lightbox_demo.url | relative_url }}">Lightbox Demo</a>
      </div>
    </div>
    <!-- Personal Works -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Personal Works</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Create a series of illustrations based on a personal project or theme that excites you.</div>
      {% assign latest_personal = site.posts | where_exp:'p','p.categories contains "personal-works"' | sort: 'date' | reverse | first %}
      {% if latest_personal %}
        <div style="margin-bottom:10px;">最新：<a href="{{ latest_personal.url | relative_url }}">{{ latest_personal.title }}</a></div>
      {% endif %}
      <div style="font-size:14px;">
        {% assign gallery_demo = site.posts | where_exp:'p', 'p.url contains "personal-gallery"' | first %}
        {% assign lightbox_demo = site.posts | where_exp:'p', 'p.url contains "personal-lightbox"' | first %}
        <a href="{{ gallery_demo.url | relative_url }}">Gallery Demo</a> |
        <a href="{{ lightbox_demo.url | relative_url }}">Lightbox Demo</a>
      </div>
    </div>
    <!-- Sketch & Process Work -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Sketch & Process Work</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Showcase your sketchbook, rough drafts, and works-in-progress.</div>
      {% assign latest_sketch = site.posts | where_exp:'p','p.categories contains "sketch-process"' | sort: 'date' | reverse | first %}
      {% if latest_sketch %}
        <div style="margin-bottom:10px;">最新：<a href="{{ latest_sketch.url | relative_url }}">{{ latest_sketch.title }}</a></div>
      {% endif %}
      <div style="font-size:14px;">
        {% assign gallery_demo = site.posts | where_exp:'p', 'p.url contains "sketch-gallery"' | first %}
        {% assign lightbox_demo = site.posts | where_exp:'p', 'p.url contains "sketch-lightbox"' | first %}
        <a href="{{ gallery_demo.url | relative_url }}">Gallery Demo</a> |
        <a href="{{ lightbox_demo.url | relative_url }}">Lightbox Demo</a>
      </div>
    </div>
    <!-- Miscellaneous -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Miscellaneous</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Other works and experiments.</div>
      {% assign latest_misc = site.posts | where_exp:'p','p.categories contains "miscellaneous"' | sort: 'date' | reverse | first %}
      {% if latest_misc %}
        <div style="margin-bottom:10px;">最新：<a href="{{ latest_misc.url | relative_url }}">{{ latest_misc.title }}</a></div>
      {% endif %}
      <div style="font-size:14px;">
        {% assign gallery_demo = site.posts | where_exp:'p', 'p.url contains "misc-gallery"' | first %}
        {% assign lightbox_demo = site.posts | where_exp:'p', 'p.url contains "misc-lightbox"' | first %}
        <a href="{{ gallery_demo.url | relative_url }}">Gallery Demo</a> |
        <a href="{{ lightbox_demo.url | relative_url }}">Lightbox Demo</a>
      </div>
    </div>
  </div>
</section>