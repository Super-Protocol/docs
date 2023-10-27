// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
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
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "whitepaper",
        path: "whitepaper",
        routeBasePath: "/whitepaper",
        sidebarPath: require.resolve("./sidebarsWhitepaper.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faq",
        path: "faq",
        routeBasePath: "/faq",
        sidebarPath: require.resolve("./sidebarsFAQ.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "testnet",
        path: "testnet",
        routeBasePath: "/testnet",
        sidebarPath: require.resolve("./sidebarsTestnet.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/introduction",
            to: "/",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "developers",
        path: "developers",
        routeBasePath: "/developers",
        sidebarPath: require.resolve("./sidebarsDevelopers.js"),
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
          path: "introduction",
          routeBasePath: "/",
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
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Introduction",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Whitepaper",
            docsPluginId: "whitepaper",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "FAQ",
            docsPluginId: "faq",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Testnet",
            docsPluginId: "testnet",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Developers",
            docsPluginId: "developers",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  clientModules: ["/components/TocHighlighter.js"],
};

module.exports = config;
