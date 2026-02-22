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
        { to: '/how-it-works', label: 'How it works', position: 'left' },
        { to: '/what-we-check', label: 'What we check', position: 'left' },
        { to: '/trust', label: 'Trust & Privacy', position: 'left' },
        { to: '/about', label: 'About', position: 'right' },
        { href: 'https://auth.betareader.app/', label: 'Log in', position: 'right' },
        { href: 'https://auth.betareader.app/register', label: 'Sign up', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'How it works', to: '/how-it-works' },
            { label: 'What we check', to: '/what-we-check' },
            { label: 'Trust & Privacy', to: '/trust' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
            { label: 'Pricing', to: '/pricing' },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'About the project', to: '/about' },
            { label: 'contact@betareader.app', href: 'mailto:contact@betareader.app' },
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
