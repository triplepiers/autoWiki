# autoWiki
> 一个基于 Vue 的 iGEM 默认 WIKI 模版

## Tip

记得修改：

- ZJU-China 2023 的相关信息

  - Footer (`@/src/components/Footer.vue`) 中有关代码仓库的信息

    具体指超链接的 link 地址 && 文本本身

  - Menu (`@/src/components/Menu.vue`) 中的 Team Name

  - APP (`@/src/App.vue`) `onUpdatePageTitle()` 函数中的队伍信息

- 删掉 TestView，相关操作包括：

    - 删去 Menu 中的超链接
    - 删去 Router 中的相关路径

## Set Up

请确保您的电脑上已经安装了 Node 和 Vue3

1. Clone 此项目到本地（你也可以用 SSH）

    ```bash
    git clone https://github.com/triplepiers/autoWiki.git
    ```

2. 进入项目根目录

    ```bash
    cd /path/to/autoWiki
    ```

3. 安装基本依赖

    ```bash
    npm install 
    # 噫，多出了 node_modules 文件夹！
    ```

4. 好的，运行吧！

    ```bash
    npm run dev
    # 把 Local: http://localhost:xxxx/ 中提示的网址丢进浏览器就好了
    ```

## 项目结构
此处只列出了一些比较重要的文件

```
.
├── index.html         # 不重要，但你可以在这里改 icon
└── src
    ├── App.vue        # 页面基本框架
    ├── assets
    │   └── base.css   # 通用样式表
    ├── components
    │   ├── Footer.vue # 底栏组件
    │   ├── Header.vue # Poster？反正是那坨绿色的
    │   ├── Menu.vue   # 顶栏组件
    │   └── MkDown.vue # 渲染 MarkDown 文本的组件
    ├── main.js        # 不重要，但你可以在这里改代码高亮样式
    ├── notes          
    │   └── test.md    # 反正 markdown 文件都扔这个下面
    ├── router
    │   └── index.js   # 路由（除非要加页面，否则不用动）
    └── views
        └── HomeView.vue  # 一个 View 对应一个页面
```
## 支持功能

- Bootstrap：没啥好说的，反正是官方模版自带的

    个人感觉自适应不是很好用？有空的话可以缝一个 TailWindCSS

- Markdown-it + HighlightJS + Katex

    支持从 MarkDown 文本渲染到 Wiki 页面

    支持自动生成可跳转的文章目录

    支持 Katex 公式渲染，对应的样式表引用在 `index.html`

    > ⚠️ 并非本地资源，搞 iGEM 的时候需要和附加字体一起下载

    - 需要改 HighlightJS 样式的话，请去 `main.js` 里修改导入的样式表
   

    - Wiki 本身的版式请在 `MkDown.vue` 组件里撰写，CSS 选择器前面记得加 `/deep/`

## Todo List
- 自动生成目录高亮

    https://blog.csdn.net/weixin_47554687/article/details/127101051

- 自动生成滚动条
- 增加自动打包脚本
- 增加 Table 支持
- 缝合 igem uploader 实现自动上传
- 基于 transition 组件的页面切换逻辑

    Ref: https://blog.csdn.net/m0_55119483/article/details/130289370

- 图片轮播展示组件（比如 EleUI/AntUI）

## Error
- Katex 无法解析 markdown HTML 标签内的 inline