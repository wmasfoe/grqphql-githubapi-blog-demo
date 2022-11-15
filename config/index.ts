type BaseConfigType = {
  siteUrl: string
  title: string
  pageInfo: Object
  githubConfig: {
    name: string
    repo: string
  }
}
type PConfigType = {
  friendLink: string[]
  [key: string]: string | Object | number | boolean
}

export type ConfigType = BaseConfigType & Partial<PConfigType>

const config: ConfigType = {
  siteUrl: 'http://localhost:3000',
  title: 'default-title',
  pageInfo: {
    'home': {
      title: 'home-title',
    },
    'about': {
      title: 'about-title'
    }
  },
  githubConfig: {
    name: 'wmasfoe',
    repo: 'blog'
  }
}

export default config;
