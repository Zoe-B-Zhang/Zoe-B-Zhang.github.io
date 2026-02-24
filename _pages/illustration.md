---
layout: page
title: Illustrations
permalink: /illustration/
---

<section class="category-list-section">
  <div class="illustration-category-grid">
    <!-- Projects -->
    <div class="illustration-category-card">
      {% assign posts = site.posts | where_exp:'p','p.categories contains "projects"' | sort: 'date' | reverse %}
      {% assign thumb_post = nil %}
      {% for p in posts %}
        {% if p.image or p.images and p.images.size > 0 %}
          {% assign thumb_post = p %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if thumb_post %}
        <a href="{{ thumb_post.url | relative_url }}" class="illustration-category__thumb" style="background-image: url({% if thumb_post.image %}{{ site.baseurl }}/images/{{ thumb_post.image }}{% else %}{{ thumb_post.images[0].url | relative_url }}{% endif %})"></a>
      {% endif %}
      <h2>Projects</h2>
      <div class="illustration-category__desc">Graduate projects, official</div>
      <ul class="illustration-category__list">
        {% for post in posts %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <!-- Personal Works -->
    <div class="illustration-category-card">
      {% assign posts = site.posts | where_exp:'p','p.categories contains "personal-works"' | sort: 'date' | reverse %}
      {% assign thumb_post = nil %}
      {% for p in posts %}
        {% if p.image or p.images and p.images.size > 0 %}
          {% assign thumb_post = p %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if thumb_post %}
        <a href="{{ thumb_post.url | relative_url }}" class="illustration-category__thumb" style="background-image: url({% if thumb_post.image %}{{ site.baseurl }}/images/{{ thumb_post.image }}{% else %}{{ thumb_post.images[0].url | relative_url }}{% endif %})"></a>
      {% endif %}
      <h2>Personal Works</h2>
      <div class="illustration-category__desc">Create a series of illustrations based on a personal project or theme.</div>
      <ul class="illustration-category__list">
        {% for post in posts %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <!-- Sketch & Process Work -->
    <div class="illustration-category-card">
      {% assign posts = site.posts | where_exp:'p','p.categories contains "sketch-process"' | sort: 'date' | reverse %}
      {% assign thumb_post = nil %}
      {% for p in posts %}
        {% if p.image or p.images and p.images.size > 0 %}
          {% assign thumb_post = p %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if thumb_post %}
        <a href="{{ thumb_post.url | relative_url }}" class="illustration-category__thumb" style="background-image: url({% if thumb_post.image %}{{ site.baseurl }}/images/{{ thumb_post.image }}{% else %}{{ thumb_post.images[0].url | relative_url }}{% endif %})"></a>
      {% endif %}
      <h2>Sketch & Process Work</h2>
      <div class="illustration-category__desc">Sketchbook, rough drafts, and works-in-progress.</div>
      <ul class="illustration-category__list">
        {% for post in posts %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <!-- Miscellaneous -->
    <div class="illustration-category-card">
      {% assign posts = site.posts | where_exp:'p','p.categories contains "miscellaneous"' | sort: 'date' | reverse %}
      {% assign thumb_post = nil %}
      {% for p in posts %}
        {% if p.image or p.images and p.images.size > 0 %}
          {% assign thumb_post = p %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if thumb_post %}
        <a href="{{ thumb_post.url | relative_url }}" class="illustration-category__thumb" style="background-image: url({% if thumb_post.image %}{{ site.baseurl }}/images/{{ thumb_post.image }}{% else %}{{ thumb_post.images[0].url | relative_url }}{% endif %})"></a>
      {% endif %}
      <h2>Miscellaneous</h2>
      <div class="illustration-category__desc">Other works and experiments.</div>
      <ul class="illustration-category__list">
        {% for post in posts %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
