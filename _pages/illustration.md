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
      </div>
      <ul style="margin-top:10px; font-size:15px;">
        <li><a href="/2025/07/11/projects-gallery.html">Projects Gallery Demo</a></li>
        <li><a href="/2025/07/11/projects-lightbox-pb-2025-6-1.html">postcard for picture book, "the tree of last year"</a></li>
        <li><a href="/2025/07/11/projects-lightbox-pb-2025-6-2.html">postcard for picture book, "one year in China Academy of Art"</a></li>
      </ul>
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
      </div>
      <ul style="margin-top:10px; font-size:15px;">
        <li><a href="/2025/07/11/personal-gallery.html">Personal Works Gallery temp</a></li>
        <li><a href="/2025/07/11/personal-lightbox.html">Personal Works Lightbox temp</a></li>
      </ul>
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
      </div>
      <ul style="margin-top:10px; font-size:15px;">
        <li><a href="/2025/07/11/sketch-gallery.html">Sketch & Process Gallery temp</a></li>
        <li><a href="/2025/07/11/sketch-lightbox-22122305.html">sketchbook of 2022-12~2023-05</a></li>
      </ul>
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
      </div>
      <ul style="margin-top:10px; font-size:15px;">
        <li><a href="/2025/07/11/misc-gallery.html">Miscellaneous Gallery under build</a></li>
        <li><a href="/2025/07/11/misc-lightbox.html">Miscellaneous Lightbox temp</a></li>
      </ul>
    </div>
  </div>
</section>