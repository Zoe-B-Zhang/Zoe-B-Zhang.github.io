/**
 * 多语言切换系统 v1.0
 * 功能：1. 语言切换 2. 保存偏好 3. 自动重定向
 */

// ================= 语言切换函数 =================
function switchLanguage(targetLang) {
  // 获取当前路径和语言
  const currentPath = window.location.pathname;
  const currentLang = document.documentElement.lang || 'zh';
  
  // 构建新路径
  let newPath;
  if (currentPath.startsWith(`/${currentLang}/`) || 
      currentPath === `/${currentLang}`) {
    // 替换语言路径
    newPath = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`)
                         .replace(`/${currentLang}`, `/${targetLang}`);
  } else if (currentPath === '/') {
    // 从首页跳转
    newPath = `/${targetLang}/`;
  } else {
    // 其他路径直接切换
    newPath = `/${targetLang}${currentPath}`;
  }
  
  // 保存语言偏好
  localStorage.setItem('preferredLang', targetLang);
  
  // 跳转页面
  window.location.href = newPath;
}

// ================= 自动语言处理 =================
document.addEventListener('DOMContentLoaded', function() {
  // 获取存储的语言偏好
  const savedLang = localStorage.getItem('preferredLang');
  
  // 获取当前页面语言
  const htmlLang = document.documentElement.lang;
  const pageLang = htmlLang ? htmlLang : 'zh';
  
  // 自动重定向逻辑
  if (savedLang && savedLang !== pageLang) {
    // 排除语言选择页
    if (!window.location.pathname === '/') {
      switchLanguage(savedLang);
    }
  }
  
  // 设置导航栏活动状态
  highlightCurrentPage();
});

// ================= 导航栏高亮当前页 =================
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = 
