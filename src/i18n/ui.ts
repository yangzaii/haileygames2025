import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  toc: string
}

export const ui: Record<'en' | 'zh', Translation> = {
  'en': {
    title: 'Hailey Yang',
    subtitle: 'Games: where the world meets.',
    description: '个人博客',
    posts: 'Posts',
    tags: 'Tags',
    about: 'About',
    toc: 'Table of Contents',
  },
  'zh': {
    title: 'Hailey Yang',
    subtitle: '电子游戏是世界的十字路口',
    description: '个人博客',
    posts: '文章',
    tags: '标签',
    about: '关于',
    toc: '目录',
  },
}
