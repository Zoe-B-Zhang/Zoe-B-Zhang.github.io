---
layout: page
title: "Tech Projects"
permalink: /tech-project/
image: 08.jpg
---

<section class="category-list-section">
  <h1 class="category-list-title">All Tech Projects</h1>
  {% assign tech_posts = site.posts | where_exp: "post", "post.categories contains 'tech-project'" | sort: 'date' | reverse %}
  {% for post in tech_posts %}
    {% include article-content.html post=post %}
  {% endfor %}
</section>
