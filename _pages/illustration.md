---
layout: page
title: Illustrations
permalink: /illustration/
---

<section class="category-list-section">
  <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
    <!-- Projects -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Projects</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Graduate projects, official</div>
      {% assign posts = site.posts | where_exp:'p','p.categories contains "projects"' | sort: 'date' | reverse %}
      <ul style="margin-top:10px; font-size:15px;">
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.images and post.images.size > 0 and post.images[0].url %}
              {% assign first_image = post.images[0].url %}
              <img src="{{ first_image }}" style="width:100%; max-height:160px; object-fit: cover; display: block; border-radius: 4px; margin-bottom: 6px;">
            {% endif %}
          </li>
        {% endfor %}
      </ul>
      </div>
    <!-- Personal Works -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Personal Works</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Create a series of illustrations based on a personal project or theme that excites you.</div>
      {% assign posts = site.posts | where_exp:'p','p.categories contains "personal-works"' | sort: 'date' | reverse %}
      <ul style="margin-top:10px; font-size:15px;">
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.images and post.images.size > 0 and post.images[0].url %}
              {% assign first_image = post.images[0].url %}
              <img src="{{ first_image }}" style="width:100%; max-height:160px; object-fit: cover; display: block; border-radius: 4px; margin-bottom: 6px;">
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>
    <!-- Sketch & Process Work -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Sketch & Process Work</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Showcase your sketchbook, rough drafts, and works-in-progress.</div>
      {% assign posts = site.posts | where_exp:'p','p.categories contains "sketch-process"' | sort: 'date' | reverse %}
      <ul style="margin-top:10px; font-size:15px;">
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.images and post.images.size > 0 and post.images[0].url %}
              {% assign first_image = post.images[0].url %}
              <img src="{{ first_image }}" style="width:100%; max-height:160px; object-fit: cover; display: block; border-radius: 4px; margin-bottom: 6px;">
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>
    <!-- Miscellaneous -->
    <div style="flex:1 1 300px; min-width:260px; max-width:350px; border:1px solid #eee; border-radius:8px; padding:20px;">
      <h2>Miscellaneous</h2>
      <div style="margin-bottom:10px; color:#888; font-size:15px;">Other works and experiments.</div>
      {% assign posts = site.posts | where_exp:'p','p.categories contains "miscellaneous"' | sort: 'date' | reverse %}
      <ul style="margin-top:10px; font-size:15px;">
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.images and post.images.size > 0 and post.images[0].url %}
              {% assign first_image = post.images[0].url %}
              <img src="{{ first_image }}" style="width:100%; max-height:160px; object-fit: cover; display: block; border-radius: 4px; margin-bottom: 6px;">
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>