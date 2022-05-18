module.exports = {
    base: '/learning/',
    title: '自我学习的文档',
    description: '学习笔记',
    theme: 'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/susanliy' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "js", path: "/handbook/ConditionalTypes" },
                { title: "html", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}