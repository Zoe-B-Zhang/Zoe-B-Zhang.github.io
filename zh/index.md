---
layout: home  # 使用主页布局
title: 欢迎来到创意世界
lang: zh
permalink: /zh/  # 匹配_config中的header_pages配置
---

{% include header.html %}  <!-- 包含导航栏组件 -->

<main class="home-container">
  <!-- 插画作品集区域 -->
  <section class="gallery-section">
    <a href="/zh/gallery" class="card-link">
      <div class="card-content">
        <h2>{{ site.translations.gallery_title.zh }}</h2>
        <p>{{ site.translations.gallery_desc.zh }}</p>
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
        <h2>{{ site.translations.projects_title.zh }}</h2>
        <p>{{ site.translations.projects_desc.zh }}</p>
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
  <button onclick="switchLanguage('en')" class="lang-switcher">
    English Version
  </button>
</div>

{% include footer.html %}  <!-- 包含页脚组件 -->

<!-- 引入JS -->
<script src="/assets/js/main.js"></script>
