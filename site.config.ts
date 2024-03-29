import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Trend-weekly-853344eb5e544864b3bd89bb4710f66a',
//78fc5a4b88d74b0e824e29407e9f1ec1
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ovalois',
  domain: 'ovaloism.info',
  author: 'Oscar Valois',

  // open graph metadata (optional)
  description: 'I am passionate about exploring the latest developments and trends in the field of technology.',

  // social usernames (optional)
  twitter: 'ovaloism',
  github: 'osvalois',
  linkedin: 'osvalois',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/projects-and-services': 'Projects-and-services-ae1ae745c82547b0b479bf61efc46f17',
     '/contact': 'Contact-us-a046246695cd4261997bac00b40c2c1a',
     '/prevencin-de-fraude-crediticio': 'Prevencin-de-fraude-crediticio-a5dac45f30264cc4bf43421481324d42'
   },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
    {
      title: 'Home',
      pageId: 'Oscar-Valois-853344eb5e544864b3bd89bb4710f66a'
    },
     {
       title: 'Projects',
       pageId: 'Projects-and-services-ae1ae745c82547b0b479bf61efc46f17'
     },
     {
       title: 'Contact',
       pageId: 'Contact-us-a046246695cd4261997bac00b40c2c1a'
     }
   ]
})
