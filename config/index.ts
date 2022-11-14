export type ConfigType = {
  siteUrl: string
  title: string
  pageInfo: Object
  [key: string]: string | Object | number | boolean
}

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
  }
}

export default config;
