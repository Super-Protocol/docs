// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Super Protocol Docs",
  url: "https://docs.superprotocol.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "/img/icon.png",
  organizationName: "Super-Protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    }
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          /*{ // See src/pages/index.js
            from: "/",
            to: "/cli",
          },*/
          {
            from: "/archive/data-for-ai",
            to: "/archive/data-for-ai/overview/about",
          },
          {
            from: "/archive/hackathon",
            to: "/archive/hackathon/about",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cli",
        path: "./docs/cli",
        routeBasePath: "/cli",
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
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "./docs/archive",
          routeBasePath: "/archive",
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
          srcDark: "navbar/images/logo-gray.svg",
          href: 'https://superprotocol.com/'
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "CLI",
            docsPluginId: "cli",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Fundamentals",
            docsPluginId: "fundamentals",
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
      metadata: [
        {name: 'description', content: 'Super Protocol\'s technical documentation'},
        {property: 'og:title', content: 'Super Protocol Docs'},
        {property: 'og:description', content: 'Super Protocol\'s technical documentation'},
        {property: 'og:image', content: 'https://docs.superprotocol.com/img/icon.png'},
        {property: 'og:url', content: 'https://docs.superprotocol.com'},
      ]
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
      docsRouteBasePath: ["cli", "fundamentals"],
      language: ["en"],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    }),
  ],
  "@docusaurus/theme-mermaid",]
};

export default config;