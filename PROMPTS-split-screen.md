# Split Screen 主页改造 — Prompt 清单

按顺序将下面 prompt 发给 Cursor，逐步完成改造。

---

## Prompt 1：创建 Split 布局骨架

```
按照 .cursorrules 中的 Split Screen 设计规范，修改主页首屏：

1. 修改 index.html：移除或替换现有 hero 和下方 section 的首屏内容，改为一个全屏的 split 容器，左右各 50% 宽度，高度 100vh。

2. 左半屏：包含一个 div.split-left，用于插画区；右半屏：包含一个 div.split-right，用于 Tech 项目区。暂时只写 HTML 结构，内容可以先用占位文字。

3. 新建或修改 _sass 文件，添加 .split-screen 基础样式（display: flex, 左右各 50%, 100vh, overflow hidden）。保持响应式，在 $tablet 断点以下改为上下堆叠。
```

---

## Prompt 2：左侧插画区内容与样式

```
实现 split 左半屏的插画展示区：

1. 在 split-left 内用 Liquid 遍历 site.posts，筛选 categories 包含 illustration 或 projects 或 personal-works 或 sketch-process 或 miscellaneous 的 post，且 post.image 存在的，取最新 4–6 条。

2. 每个 post 显示缩略图（使用 post.image，路径 {{ site.baseurl }}/images/{{ post.image }}）和 post.title，点击可跳转 post.url。

3. 布局：flex 或 grid，让图片形成流动/网格效果。左半屏背景色偏暖（如浅米色 #f8f4ef），文字深色。

4. 添加 hover 效果：鼠标悬停左侧整体时，背景微变色（如叠加一层 rgba 暖色），或当前聚焦的图片略微放大/浮起。实现方式用 CSS transition，不用 JS。
```

---

## Prompt 3：右侧 Tech 项目区内容与样式

```
实现 split 右半屏的 Tech 项目区：

1. 在 split-right 内用 Liquid 遍历 site.posts，筛选 categories 包含 tech-project 的 post，按 date 倒序，取全部或最近 6 条。

2. 每个 post 显示：post.title 作为标题，post.description 作为简短描述，链接到 post.url。布局为网格或紧凑列表，呈现「项目矩阵」感。

3. 右半屏背景色偏冷/科技感（如浅灰 #f0f2f5 或深色 #1a1a2e），与左侧形成对比。字体保持与站点一致。

4. 添加 hover 效果：鼠标悬停右侧整体时，用 ::before 或 ::after 在背景显示半透明代码片段（如 "def model():" 或简单公式）或几何图案，opacity 0.05–0.1，营造技术氛围。纯 CSS 实现。
```

---

## Prompt 4：统一分屏交界与 header/footer

```
1. 在 split 左右交界处加一条细线或轻微阴影，使分屏更清晰。

2. 确认 header 在 split 之上正常显示，footer 在 split 之下。如 split 是 100vh，需确保整体布局不破坏 header/footer。

3. 检查响应式：在 $tablet 及以下，split 改为上下堆叠，上为插画区，下为 Tech 区，高度可改为 auto 或 min-height。
```

---

## Prompt 5：微调与收尾

```
1. 检查 split 左右两边的字体大小、间距是否统一协调。

2. 确保所有链接可点击、样式一致，符合 .cursorrules 中的品牌色和 link-color。

3. 如 hero 原有 greeting 与 bio 需要保留，可考虑：放在 split 上方作为简短 intro，或融入到 split-left 顶部一行小字。不要重复堆砌，保持简洁。
```

---

## 备用：一次性完整 Prompt（若分步遇到问题可用）

```
将主页首屏改造成 Split Screen 布局，严格遵循 .cursorrules：

- 全屏 50/50 左右分屏，左：插画作品（从 illustration 相关 categories 取有图的 post），右：tech-project 列表
- 左 hover：背景微变或图片浮起；右 hover：半透明代码/公式背景
- 使用现有 Jekyll 结构和 _sass，响应式堆叠
- 不破坏 header、footer、导航
```
