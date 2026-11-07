import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PVZH千叶重铸版',
  description: 'PVZH千叶重铸版介绍、改动说明、安装教程与相关问题解答。',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0a1210' }]
  ],

  themeConfig: {
    logo: { src: '/logo.svg', alt: 'PVZH千叶重铸版', width: 26, height: 26 },

    nav: [
      { text: '首页', link: '/' },
      { text: '内容介绍', link: '/content/' },
      { text: '安装方法', link: '/install/download' },
      { text: '相关问题解答', link: '/faq' },
      { text: '联系反馈', link: '/contact' }
    ],

    sidebar: [
      {
        text: '内容介绍',
        link: '/content/',
        items: [
          {
            text: '改动说明',
            collapsed: false,
            items: [
              { text: '卡牌改动', link: '/content/changes/cards' },
              { text: '其他改动', link: '/content/changes/other' }
            ]
          },
          { text: '对比原版', link: '/content/compare-original' }
        ]
      },
      {
        text: '安装方法',
        items: [
          { text: '下载游戏', link: '/install/download' },
          { text: '安装教程', link: '/install/tutorial' }
        ]
      },
      { text: '相关问题解答', link: '/faq' },
      { text: '联系反馈', link: '/contact' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium' }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchLabel: '主题',

    footer: {
      message: '千叶重铸版 · 非官方改版，与官方无关联',
      copyright: '仅供单机 / PvE 体验'
    }
  }
})
