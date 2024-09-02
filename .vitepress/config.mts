import { defineConfig } from 'vitepress';
import publicity from './sidebar/publicity.mts';
import xmyy from './sidebar/xmyy.mts';

export default defineConfig({
  title: '香漫雅园 社区发布',
  description: '香漫雅园业委会筹备组',
  themeConfig: {
    nav: [
      { text: '🏠香漫雅园', link: '/xmyy/', activeMatch: '^/xmyy/' },
      { text: '🎬物业服务公示', link: '/publicity/', activeMatch: '^/publicity/' },
    ],

    sidebar: {
      '/xmyy/': xmyy,
      '/publicity/': publicity,
    },

    socialLinks: [{ icon: 'linkedin', link: 'https://www.istr.cn' }],
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 4],
    },
    lastUpdated: {
      text: '最后一次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    returnToTopLabel: '返回顶部',
    footer: {
      message: '香漫雅园 社区发布',
      copyright: 'Copyright © 2019-present 香漫雅园业委会筹备组',
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  sitemap: {
    hostname: 'http://xmyy.istr.cn',
  },
});
