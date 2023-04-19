import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "GoblinAlchemist",
  description: "A docs site of @goblinalchemist/components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../public/GoblinAlchemist.png",
    nav: [
      { text: 'Design', link: '/design/introduce' },
      { text: 'Development', link: '/development/getting-started' },
      { text: 'Components', link: '/components/overview' }
    ],
    sidebar: [
      {
        text: 'Design',
        items: [
          { text: 'Introduce', link: '/design/introduce' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Getting Started', link: '/development/getting-started' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoblinAlchemist/light' }
    ],
    search: {
      provider: 'local'
    }
  }
})
