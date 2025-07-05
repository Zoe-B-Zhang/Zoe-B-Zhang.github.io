---
layout: home
title: 欢迎来到创意世界
lang: zh
permalink: /zh/
---

{% include header.html %}

<main class="home-container">
  <!-- 插画作品集区域 -->
  <section class="gallery-section">
    <a href="/zh/gallery" class="card-link">
      <div class="card-content">
        <h2>插画作品集</h2>
        <p>手绘与数字创作精选</p>
        <div class="preview-grid">
          <img src="/assets/previews/art1-thumb.jpg" alt="插画预览1">
        </div>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </section>

  <!-- 技术项目区域 -->
  <section class="tech-section">
    <a href="/zh/projects" class="card-link">
      <div class="card-content">
        <h2>💻 技术项目</h2>
        <p>科技实验</p>
        <div class="tech-tags">
          <span>Three.js</span>
          <span>AI生成</span>
        </div>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </section>

  <!-- 最新动态 -->
  <section class="news-section">
    <h3>最新动态</h3>
    <ul>
    </ul>
  </section>
</main>

<!-- 语言切换按钮 -->
<div class="lang-switcher-container">
  <a href="/en/" class="lang-switcher">
    English Version
  </a>
</div>

{% include footer.html %}

<!-- 引入JS -->
<script src="/assets/js/main.js"></script>
