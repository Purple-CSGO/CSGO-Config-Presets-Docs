import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default {
  // APP 设置
  lang: 'zh-CN',
  title: 'CFG预设文档',
  description: '预设涵盖了CSGO几乎所有应用的场景，适用于对CSGO指令不太熟悉，想要到手即用，节省时间的玩家',
  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  // Markdown 解析
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
  },

  // 主题设置
  themeConfig: {
    // logo: '/logo.svg',

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Purple-CSGO/CSGO-Config-Presets-Docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 广告区域
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },

    // 文本
    lastUpdatedText: '更新日期',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    // 目录/摘要显示层级
    outline: [2, 3],
    outlineTitle: '目录',

    // 导航栏
    nav: [
      {
        text: '主页',
        link: '/',
        activeMatch: '^/$'
      },
      {
        text: 'V1',
        link: '/v1/',
        activeMatch: '/v1/'
      },
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      //   activeMatch: '/guide/'
      // },
      // { text: 'Repo', link: 'https://github.com/Purple-CSGO' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Purple-CSGO/CSGO-Config-Presets' },
    ],

    // 侧边栏
    sidebar: 
    {
      // 这种方式根据路径显示侧边导航栏
      '/v1/': [
        {
          text: 'V1版本',
          link: '/v1/',
          // collapsible: true,
          items: SidebarBuilder.get.filesAndOrder('./docs/v1', ['_partial']),
        }
      ],
      // '/guide/': [
      //   {
      //     text: 'Guide',
      //     // collapsible: true,
      //     items: SidebarBuilder.get.filesAndOrder('./docs/guide', ['_partial']),
      //   },
      // ],
    },

    // 脚注
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Purple-CSGO'
    },
  }
}