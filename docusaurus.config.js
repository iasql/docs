const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const baseConfig = {
  url: 'https://docs.iasql.com',
};
const localConfig = {
  url: 'http://localhost:3000'
};
const config = process.env.IASQL_ENV === 'local' ? Object.assign(baseConfig, localConfig) : baseConfig;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IaSQL',
  tagline: 'Manage cloud infrastructure using a hosted PostgreSQL db',
  url: config.url,
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.png',
  projectName: 'iasql-engine',
  organizationName: 'iasql',

  customFields: config,

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          width: '70',
          alt: 'logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
          href: 'https://iasql.com',
          target: '_self',
        },
        items: [
          {
            to: 'https://dbdocs.io/iasql/iasql',
            target: '_self',
            label: 'Schema',
          },
          {
            to: 'https://discord.com/invite/machGGczea',
            target: '_self',
            label: 'Discord',
          },
          {
            to: 'https://blog.iasql.com',
            target: '_self',
            label: 'Blog',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/iasql/iasql-engine',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Schema',
                href: 'https://dbdocs.io/iasql/iasql',
                target: '_self'
              },
              {
                label: 'Blog',
                href: 'https://blog.iasql.com',
                target: '_self',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iasql/iasql-engine',
                target: '_self',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/yxNBQugGbH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/iasql',
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ['powershell'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '5D0XPJ20G6',
        // Public API key: it is safe to commit it
        apiKey: '3975e3fd292172a78a2092aecca9a2b5',
        indexName: 'docs-iasql',
        contextualSearch: true,
      },
    }),
});
