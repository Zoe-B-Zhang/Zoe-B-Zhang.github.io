---
layout: home
title: Welcome to Creative Universe
lang: en
permalink: /en/  # Match header_pages in _config
---

{% include header.html %}

<main class="home-container">
  <!-- Illustration Gallery Section -->
  <section class="gallery-section">
    <a href="/en/gallery" class="card-link">
      <div class="card-content">
        <h2>Illustration Gallery</h2>
        <p>Handmade & Digital Artworks</p>
        <div class="preview-grid">
          <img src="/assets/previews/art1-thumb.jpg" alt="Art Preview 1">
        </div>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </section>

  <!-- Tech Projects Section -->
  <section class="tech-section">
    <a href="/en/projects" class="card-link">
      <div class="card-content">
        <h2>💻 Tech Projects</h2>
        <p>Art-Tech Experiments</p>
        <div class="tech-tags">
        </div>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </section>

  <!-- Latest News -->
  <section class="news-section">
    <h3>Latest Updates</h3>
    <ul>
    </ul>
  </section>
</main>

<!-- Language Switcher -->
<div class="lang-switcher-container">
  <button onclick="switchLanguage('zh')" class="lang-switcher">
    中文版
  </button>
</div>

{% include footer.html %}

<script src="/assets/js/main.js"></script>