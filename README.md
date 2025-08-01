# 个人网站项目

这是一个现代化的个人网站模板，包含主页、个人简介、工作内容、学习库和联系方式等功能。

## 🚀 功能特点

- **响应式设计** - 适配各种设备（桌面、平板、手机）
- **现代化UI** - 使用渐变背景、卡片设计和动画效果
- **平滑滚动** - 页面内导航平滑滚动
- **交互效果** - 悬停动画、滚动动画、打字机效果
- **移动端友好** - 汉堡菜单和触摸优化
- **表单验证** - 联系表单的客户端验证

## 📁 项目结构

```
CODE_Website/
├── index.html          # 主页面
├── styles/
│   └── main.css        # 样式文件
├── scripts/
│   └── main.js         # JavaScript功能
└── README.md           # 说明文档
```

## 🛠️ 如何使用

### 1. 本地预览
直接在浏览器中打开 `index.html` 文件即可预览网站。

### 2. 部署到服务器
将整个 `CODE_Website` 文件夹上传到你的Web服务器即可。

### 3. 使用GitHub Pages（推荐）
1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 访问生成的URL即可

## ✏️ 自定义指南

### 1. 修改个人信息

#### 个人简介部分
在 `index.html` 中找到以下部分并修改：

```html
<!-- 个人简介 -->
<div class="about-text">
    <h3>关于我</h3>
    <p>你好！我是一名热爱学习和技术的开发者...</p>
    <!-- 修改这里的描述 -->
</div>

<!-- 技能条 -->
<div class="skill-item">
    <span class="skill-name">C/C++</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

#### 联系信息
修改联系部分的邮箱和社交媒体链接：

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>  <!-- 修改邮箱 -->
</div>
<div class="contact-item">
    <i class="fab fa-github"></i>
    <span>github.com/yourusername</span>  <!-- 修改GitHub链接 -->
</div>
```

### 2. 修改颜色主题

在 `styles/main.css` 中修改主要颜色：

```css
/* 主色调 */
:root {
    --primary-color: #3498db;      /* 主蓝色 */
    --secondary-color: #2c3e50;    /* 深灰色 */
    --accent-color: #667eea;       /* 渐变开始色 */
    --accent-color-2: #764ba2;     /* 渐变结束色 */
}
```

### 3. 添加新的工作内容

在 `index.html` 的工作内容部分添加新的卡片：

```html
<div class="work-card">
    <div class="work-icon">
        <i class="fas fa-your-icon"></i>  <!-- 选择FontAwesome图标 -->
    </div>
    <h3>你的工作标题</h3>
    <p>工作描述内容...</p>
</div>
```

### 4. 添加学习内容

在学习库部分添加新的分类：

```html
<div class="category-card">
    <h3><i class="fas fa-icon"></i> 分类标题</h3>
    <ul>
        <li>学习项目1</li>
        <li>学习项目2</li>
        <li>学习项目3</li>
    </ul>
</div>
```

### 5. 更换头像

1. 将你的头像图片放在项目文件夹中
2. 在HTML中替换图标：

```html
<!-- 替换这个图标 -->
<div class="profile-avatar">
    <img src="path/to/your/avatar.jpg" alt="头像" style="width: 100px; height: 100px; border-radius: 50%;">
</div>
```

## 🎨 可用的图标

网站使用FontAwesome图标库，你可以在这里找到更多图标：
https://fontawesome.com/icons

常用图标类名：
- `fas fa-code` - 代码
- `fas fa-brain` - 大脑/AI
- `fas fa-robot` - 机器人
- `fas fa-chart-line` - 图表
- `fas fa-graduation-cap` - 毕业帽
- `fas fa-book` - 书本
- `fas fa-envelope` - 邮箱
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn

## 📱 响应式断点

- **桌面**: > 768px
- **平板**: 768px - 480px
- **手机**: < 480px

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **FontAwesome** - 图标库

## 🚀 性能优化建议

1. **图片优化** - 使用WebP格式和适当的尺寸
2. **CSS压缩** - 生产环境压缩CSS文件
3. **JavaScript压缩** - 压缩JS文件
4. **CDN使用** - 使用CDN加载外部资源

## 📞 联系表单配置

当前表单使用前端验证，如需后端处理：

1. 修改 `scripts/main.js` 中的表单处理逻辑
2. 添加AJAX请求到你的后端API
3. 或使用第三方服务如Formspree、Netlify Forms等

## 🐛 常见问题

### Q: 网站加载很慢？
A: 检查网络连接，确保FontAwesome CDN可以访问。

### Q: 移动端菜单不工作？
A: 确保JavaScript文件正确加载，检查控制台是否有错误。

### Q: 样式显示异常？
A: 确保CSS文件路径正确，清除浏览器缓存。

## 📄 许可证

这个项目是开源的，你可以自由使用和修改。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**开始使用你的个人网站吧！** 🎉 