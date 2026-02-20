import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BetaReader',
  tagline: 'AI beta reader for authors',
  favicon: 'img/favicon.svg',

  url: 'https://betareader.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // OG image – replace with a real 1200×630 PNG before going live
    image: 'img/og-image.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BetaReader',
      logo: {
        alt: 'BetaReader Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: '/privacy',
          label: 'Privacy',
          position: 'right',
        },
        {
          to: '/terms',
          label: 'Terms',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Pricing',
              to: '/pricing',
            },
            {
              label: 'contact@betareader.app',
              href: 'mailto:contact@betareader.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BetaReader.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
