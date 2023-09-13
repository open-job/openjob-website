// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


// TODO: Wait for docusaurus typescript support
/** @type {import('@docusaurus/types').PluginConfig} */
const searchLocalPlugin = [
  require.resolve('@easyops-cn/docusaurus-search-local'),
  /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  // @ts-ignore
  ({
    hashed: true,
    language: ['en', 'zh']
  }),
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openjob',
  tagline: 'A distributed person scheduling, high-performance delayed tasks and lightweight computing framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openjob.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'open-job', // Usually your GitHub org/user name.
  projectName: 'openjob-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Scripts
  scripts: [
    {src: 'https://hm.baidu.com/hm.js?9d45fde4a12836b67df0974a26df1e6d',  async: true}
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      'en': {
        htmlLang: 'en',
        label: 'English'
      },
      'zh-Hans': {
        htmlLang: 'zh-Hans',
        label: '简体中文'
      }
    }

  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/open-job/openjob-website/edit/main/',
          remarkPlugins: [
            [require('remark-kroki-plugin'), { krokiBase: 'https://kroki.io', lang: "kroki", imgRefDir: "/img/kroki", imgDir: "static/img/kroki" }]
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/open-job/openjob-website/edit/main/',
          remarkPlugins: [
            [require('remark-kroki-plugin'), { krokiBase: 'https://kroki.io', lang: "kroki", imgRefDir: "/img/kroki", imgDir: "static/img/kroki" }]
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [searchLocalPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Openjob',
        logo: {
          alt: 'Openjob Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/open-job/openjob',
            className: 'header-github-link',
            position: 'right',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitter',
                href: 'https://gitter.im/openjob/openjob',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ZUmX57fKa5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/open-job/openjob',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'php', 'go', 'properties'],
      },
    }),
};

module.exports = config;


