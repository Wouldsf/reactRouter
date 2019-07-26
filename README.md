## 7.26 react路由
### 安装：
   - cnpm install react-router-dom -S
### 定义：
   - 路由是根据不同的url地址展示不同的内容和页面
### 介绍路由的基础使用：
   - react-router-dom当前版本：v5.0
   - Api：
      - BrowserRouter：是路由的容器，HTML5提供的history API
      - 相关属性如下：
         - 
### 项目中配置rem响应式开发
   - 1.在public里的index.html写js动态改变根字体大小
   - 2.安装：cnpm install -D postcss-pxtorem
   - 3.释放配置文件：npm run eject
   - 4.在webpack.config.js配置如下：
      - a.全局搜索：ident: 'postcss'
      - b.在public里写入：
         - require('postcss-pxtorem')({
            rootValue: 100,
            propWhiteList: [],
            minPixelValue: 2
         })