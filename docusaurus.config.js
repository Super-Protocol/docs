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
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/icon.png",
  organizationName: "Super-Protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          /*{
            from: "/",
            to: "/marketplace",
          },*/
          {
            from: "/data-for-ai",
            to: "/data-for-ai/overview/about",
          },
          {
            from: "/hackathon",
            to: "/hackathon/about",
          },
          /*{
            from: "/colab",
            to: "/colab/jupyter",
          },*/
        ],
      },
    ],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "data-for-ai",
        path: "./docs/data-for-ai",
        routeBasePath: "/data-for-ai",
        sidebarPath: require.resolve("./sidebar.js"), // To make sections expanded by default
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "hackathon",
        path: "./docs/hackathon",
        routeBasePath: "/hackathon",
        //sidebarPath: require.resolve("./sidebar.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "colab",
        path: "./docs/colab",
        routeBasePath: "/colab",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "./docs/guides",
        routeBasePath: "/guides",
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
          srcDark: "navbar/images/logo-gray.svg",
          href: 'https://superprotocol.com/'
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
          /*{
            type: "doc",
            docId: "index",
            position: "right",
            label: "Developers",
          },*/
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
      metadata: [
        {name: 'description', content: 'Technical documentation for Super Protocol.'},
        {property: 'og:title', content: 'Super Protocol Docs'},
        {property: 'og:description', content: 'Technical documentation for Super Protocol.'},
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
      docsRouteBasePath: [/*"developers", */"marketplace", "whitepaper", "fundamentals", "cli"],
      language: ["en"],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    }),
  ]]
};

export default config;