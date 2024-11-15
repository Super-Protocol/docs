// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Super Protocol",
  url: "https://docs.superprotocol.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "Super Protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "marketplace",
        path: "./docs/marketplace",
        routeBasePath: "/marketplace",
        //sidebarPath: "./sidebars.js",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "fundamentals",
        path: "./docs/fundamentals",
        routeBasePath: "/fundamentals",
        //sidebarPath: "./sidebars.js",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/",
            to: "/marketplace",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "whitepaper",
        path: "./docs/whitepaper",
        routeBasePath: "/whitepaper",
        //sidebarPath: "./sidebars.js",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "./docs/developers",
          routeBasePath: "/developers",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Super Protocol",
        logo: {
          alt: "Super Protocol Logo",
          src: "navbar/images/logo.svg",
          href: '/marketplace'
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Marketplace",
            docsPluginId: "marketplace",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Fundamentals",
            docsPluginId: "fundamentals",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Developers",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Whitepaper",
            docsPluginId: "whitepaper",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  themes: [[
    "@easyops-cn/docusaurus-search-local",
    ({
      hashed: true,
      docsRouteBasePath: ["developers", "marketplace", "whitepaper", "fundamentals"],
      language: ["en"],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    }),
  ]]
};

export default config;