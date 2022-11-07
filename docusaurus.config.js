const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IaSQL',
  tagline: 'Infrastructure as data in PostgreSQL',
  url: 'https://docs.iasql.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.png',
  projectName: 'iasql-engine',
  organizationName: 'iasql',

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
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
            to: 'https://app.iasql.com',
            target: '_self',
            label: 'Dashboard',
          },
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
                label: 'Dashboard',
                href: 'https://app.iasql.com',
                target: '_self'
              },
              {
                label: 'Schema',
                href: 'https://dbdocs.io/iasql/iasql',
                target: '_self'
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
        additionalLanguages: [],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
