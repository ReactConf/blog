const config = require('./config/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-slug',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
        icons: [{
          src: "assets/icon-48x48.png",
          sizes: "48x48",
          type: "image/png"
        }, {
          src: "assets/icon-72x72.png",
          sizes: "72x72",
          type: "image/png"
        }, {
          src: "assets/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        }, {
          src: "assets/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        }, {
          src: "assets/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        }, {
          src: "assets/icon-256x256.png",
          sizes: "256x256",
          type: "image/png"
        }, {
          src: "assets/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        }, {
          src: "assets/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }]
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
