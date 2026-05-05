# Billy Chen's Technical Blog - 项目文档

## 项目概述

这是 Billy Chen（陈剑）的个人技术博客，基于 GitHub Pages 托管的静态网站。主要分享 AI 编程、软件架构、技术哲学、播客笔记等内容。

- **作者**: Billy Chen - IBM 资深架构师
- **专业领域**: 混合云与 AI 解决方案、企业级软件架构
- **技术栈**: HTML5 + CSS3 + Vanilla JavaScript
- **部署**: GitHub Pages
- **分支**: master（直接部署）

## 技术栈

### 前端技术
- **HTML5**: 语义化标签，无障碍访问
- **CSS3**: 
  - CSS 自定义属性（CSS Variables）
  - Flexbox & Grid 布局
  - 响应式设计（移动优先）
  - 暗色/亮色主题切换
- **JavaScript**: 
  - 原生 ES6+（无框架依赖）
  - 模块化代码组织
  - 本地存储（LocalStorage）

### 字体系统
- **主标题**: Space Grotesk（Google Fonts）
- **等宽字体**: JetBrains Mono（代码、标签、技术术语）
- **中文优化**: 系统默认中文字体栈

### 设计系统
项目使用两种设计风格：

1. **主页风格**（Cyber/Tech Theme）
   - 深色主题默认，支持亮色切换
   - 霓虹绿色强调（#00ff9f）
   - 网格背景 + 扫描线动画
   - 卡片悬停效果

2. **Nate Herk V2 风格**
   - 标签页导航系统
   - 明暗主题切换（默认浅色）
   - Fraunces 可变字体（标题）
   - JetBrains Mono（标签）
   - 可展开卡片组件

3. **HBR 2026 风格**
   - GT America 字体系统
   - 720px 居中容器
   - 海军蓝主色调（#1C3F6E）
   - Drop Cap 首字母下沉

## 项目结构

```
jchenibm.github.io/
├── index.html                      # 主页（文章列表）
├── CLAUDE.md                       # 本文件
├── [文章页面].html                  # 各篇文章页面
│   ├── dijkstra-*.html             # Dijkstra 专题系列
│   ├── demis-hassabis-agi-gaps.html # 播客笔记（Nate Herk V2）
│   ├── ai-coding-dictionary-*.html  # AI 编程词典
│   ├── morse-code-*.html           # 摩尔斯码工具页面
│   └── [其他文章].html
└── README.md                       # GitHub 说明
```

## 内容分类

### 当前文章分类（按标签）

1. **AI 编程**（AI_CODING）
   - AI 编程词典（中英文版）
   - Dijkstra 与自然语言编程
   - 我那些质疑 AI 的朋友都疯了

2. **Dijkstra 系列**（DIJKSTRA_SERIES）
   - 一个 48 年前的「预言」
   - Hacker News 讨论总结
   - 论「自然语言编程」的愚蠢（EWD667 译文）

3. **播客笔记**（PODCAST_NOTES）
   - Demis Hassabis 谈 AGI 的三个鸿沟

4. **技术趋势**（TECH_TRENDS）
   - 2026 年数据流技术六大趋势

5. **教育工具**（EDUCATION）
   - 五一假期特别制作：摩尔斯码学习神器

6. **参考工具**（REFERENCE）
   - 摩尔斯码表

7. **书评**（BOOK_REVIEW）
   - 吃辣！辣椒的中国史

## 工作流程

### 创建新文章

#### 1. 选择设计风格
根据内容类型选择合适的设计模板：
- **技术分析/深度文章**: 使用 Nate Herk V2（标签页导航）
- **商业/专业内容**: 使用 HBR 2026 风格
- **简短笔记/工具页面**: 使用主页风格

#### 2. 创建文章文件
```bash
# 在项目根目录创建新的 HTML 文件
# 命名规范：使用英文、连字符分隔、描述性名称
# 例如：ai-agents-2026-trends.html
```

#### 3. 文章模板

##### Nate Herk V2 模板（标签页风格）
适用场景：播客笔记、技术深度分析、多主题内容

关键要素：
- 标签页导航（3-5 个标签）
- 可展开卡片组件
- 明暗主题切换
- Fraunces 字体标题

##### HBR 2026 模板
适用场景：商业分析、专业文章、翻译内容

关键要素：
- 720px 居中容器
- GT America 字体
- 海军蓝主题色
- Drop Cap 首字母

##### 主页风格模板
适用场景：工具页面、简短笔记

关键要素：
- 暗色主题
- 霓虹绿强调色
- 动画效果

#### 4. 更新首页

添加新文章到 `index.html` 的文章列表：

```html
<article class="article-card">
    <div class="article-number">[序号]</div>
    <div class="article-meta-top">
        <span>[日期]</span>
        <span>[分类]</span>
    </div>
    <h2 class="article-title">
        <a href="[文章文件名]">[文章标题]</a>
    </h2>
    <p class="article-excerpt">
        [文章摘要，2-3 句话]
    </p>
    <div class="article-meta-bottom">
        <span class="meta-item">
            <span class="meta-tag">[标签1]</span>
        </span>
        <span class="meta-item">
            <span class="meta-tag">[标签2]</span>
        </span>
        <span class="meta-item">
            <span>[简短标识]</span>
        </span>
    </div>
</article>
```

**注意事项**：
- 新文章放在列表顶部（编号 01）
- 所有现有文章编号依次后移
- 更新侧边栏统计（文章总数）
- 使用特殊样式标记新文章：`style="border-left: 3px solid var(--accent);"`

#### 5. 提交到 GitHub

```bash
# 添加新文件和更新的首页
git add [新文章].html index.html

# 提交（使用中文提交信息）
git commit -m "新增文章：[文章标题]

- [设计风格/特色]
- [主要内容概述]
- 更新首页文章列表"

# 推送到 GitHub
git push origin master
```

### 文章发布检查清单

发布前确认：
- [ ] HTML 结构完整，标签正确闭合
- [ ] 响应式设计正常（移动端测试）
- [ ] 主题切换功能正常
- [ ] 链接正确（相对路径）
- [ ] 中文显示正常（UTF-8 编码）
- [ ] 元数据完整（标题、描述）
- [ ] 首页文章信息正确
- [ ] 文章编号连续无遗漏

## 设计规范

### 颜色使用

#### 主页主题
- **强调色**: `#00ff9f`（霓虹绿）
- **次强调**: `#00d4ff`（青色）
- **文本主色**: `#e8e8e8`（暗色）/ `#1a1a1a`（亮色）
- **文本次色**: `#888888`（暗色）/ `#666666`（亮色）

#### Nate Herk V2
- **浅色主题**: 
  - 背景: `#F8F7F4`
  - 主文本: `#2A2825`
  - 强调: `#2563EB`
- **深色主题**:
  - 背景: `#0A1628`
  - 主文本: `#E8EEF7`
  - 强调: `#4A9EFF`

#### HBR 2026
- **海军蓝**: `#1C3F6E`
- **深灰**: `#1A1A1A`
- **中灰**: `#666666`
- **浅灰背景**: `#F8F8F8`

### 字体使用

#### 标题层级
- **H1**（主标题）: 32-48px，加粗
- **H2**（章节标题）: 24-32px，加粗
- **H3**（卡片标题）: 18-20px，加粗
- **Body**: 14-18px，常规字重

#### 特殊用途
- **标签/元数据**: JetBrains Mono，9-11px，大写字母间距
- **引用/强调**: 斜体或加粗
- **代码/术语**: JetBrains Mono，等宽字体

### 间距规范

- **卡片间距**: 24-32px
- **段落间距**: 16-20px
- **章节间距**: 48-64px
- **内边距**: 16-24px（移动端）/ 24-32px（桌面端）

## 响应式设计

### 断点
- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

### 移动端优化
- 单列布局
- 触摸友好的交互区域（最小 44px）
- 简化导航
- 优化字体大小

## 性能优化

### 最佳实践
1. **字体加载**: 使用 `preconnect` 提示
2. **CSS**: 内联关键 CSS，避免额外请求
3. **JavaScript**: 原生代码，无框架开销
4. **图片**: 使用 WebP 格式，响应式图片
5. **缓存**: GitHub Pages 自动处理静态资源缓存

### 文件大小
- 单个 HTML 文件: < 50KB
- 总页面大小（包含字体）: < 200KB

## 可访问性

### 遵循标准
- **WCAG 2.1**: AA 级别
- **语义化 HTML**: 正确使用 HTML5 标签
- **键盘导航**: 所有交互功能可通过键盘访问
- **屏幕阅读器**: 适当的 ARIA 标签
- **颜色对比**: 至少 4.5:1 的对比度

### 实践
- 使用语义化标签（`<article>`, `<section>`, `<nav>`）
- 图片添加 `alt` 属性
- 链接添加描述性文本
- 表单元素添加标签
- 适当的焦点状态

## 常见任务

### 修复 HTML 错误
```bash
# 检查 HTML 结构
# 常见问题：
# - 未闭合的标签
# - 属性引号缺失
# - 嵌套错误

# 修复后
git add [文件].html
git commit -m "修复HTML结构错误"
git push origin master
```

### 更新现有文章
```bash
# 编辑文章文件
# 重新审视内容、更新链接、修正错误

git add [文章].html
git commit -m "更新文章：[简要说明更新内容]"
git push origin master
```

### 批量操作
```bash
# 添加多个新文章
git add *.html

# 更新首页
git add index.html

# 一次性提交
git commit -m "批量新增X篇文章：[标题列表]"
git push origin master
```

## 主题切换

### 实现原理
- 使用 CSS 自定义属性
- JavaScript 切换 `data-theme` 属性
- LocalStorage 保存用户偏好

### 添加主题支持
```css
/* 定义主题变量 */
:root {
    --bg-primary: #0a0a0a;
    /* ... */
}

[data-theme="light"] {
    --bg-primary: #f5f5f5;
    /* ... */
}
```

```javascript
// 切换主题
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}
```

## 标签系统

### 现有标签
- AI 编程、LLM、AGENT
- 技术哲学、编程哲学
- Dijkstra、EWD667
- 播客笔记、PODCAST
- AGI、DeepMind
- 数据流、Kafka
- 通信、编码、历史
- 文化、饮食
- 教育、编程教育

### 添加新标签
1. 确保标签描述性（2-4 个字）
2. 使用中文（主要读者群）
3. 保持一致性（已有标签优先）
4. 避免过于细分

## Git 工作流

### 分支策略
- **master**: 主分支，直接部署到 GitHub Pages
- 无其他分支（简化流程）

### 提交规范
```
类型: 简短描述

详细说明（可选）

- 变更点 1
- 变更点 2
```

**类型**：
- 新增: 新增文章/功能
- 更新: 更新现有内容
- 修复: 修复错误/问题
- 优化: 性能/体验优化

### 示例
```
新增文章：Demis Hassabis 谈 AGI 的三个鸿沟

- 新增播客笔记页面
- 使用 Nate Herk V2 设计风格
- 包含三个标签页：AGI鸿沟、创造力测试、小模型价值
- 支持明暗主题切换
- 更新首页文章列表
```

## 故障排查

### 常见问题

#### 1. 页面显示异常
- 检查 HTML 标签是否正确闭合
- 验证 CSS 语法
- 检查 JavaScript 控制台错误

#### 2. 主题切换不工作
- 确认 JavaScript 已加载
- 检查 LocalStorage 是否被禁用
- 验证 CSS 变量定义

#### 3. 响应式问题
- 测试不同屏幕尺寸
- 检查媒体查询语法
- 验证 viewport 设置

#### 4. GitHub Pages 部署失败
- 确认文件在 master 分支
- 检查文件名（index.html 必须在根目录）
- 查看 GitHub Pages 设置

### 调试技巧
```bash
# 本地测试
# 使用 Live Server 或类似工具
# 在浏览器中打开开发者工具

# 检查 GitHub Pages 部署状态
# 访问：https://github.com/jchenibm/jchenibm.github.io/deployments
```

## 扩展计划

### 短期
- [ ] 添加搜索功能
- [ ] RSS 订阅支持
- [ ] 文章归档页面
- [ ] 标签聚合页面

### 长期
- [ ] 评论系统集成
- [ ] 文章系列导航
- [ ] 相关文章推荐
- [ ] 阅读进度追踪

## 参考资源

### 设计灵感
- Nate Herk V2 Design System
- Harvard Business Review 2026
- Cyber/Tech UI Trends

### 技术文档
- MDN Web Docs
- CSS Tricks
- A11y Project

### 字体资源
- Google Fonts
- JetBrains Mono
- Fraunces Variable Font

## 联系方式

- **GitHub**: https://github.com/jchenibm
- **Email**: jchenibm@qq.com
- **博客**: https://jchenibm.github.io

---

**最后更新**: 2026.05.05
**文档版本**: 1.0.0
