// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
                id: "getting-started",
                path: "getting-started",
                routeBasePath: "/getting-started",
                sidebarPath: require.resolve("./sidebarsGettingStarted.js"),
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "faq",
                path: "faq",
                routeBasePath: "/faq",
                sidebarPath: require.resolve("./sidebarsFAQ.js"),
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "testnet",
                path: "testnet",
                routeBasePath: "/testnet",
                sidebarPath: require.resolve("./sidebarsTestnet.js"),
            },
        ],
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: "whitepaper",
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebarsWhitepaper.js"),
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
                        position: "left",
                        label: "Getting Started",
                        docsPluginId: "getting-started",
                    },
                    {
                        type: "doc",
                        docId: "index",
                        position: "left",
                        label: "Whitepaper",
                    },
                    {
                        type: "doc",
                        docId: "index",
                        position: "left",
                        label: "FAQ",
                        docsPluginId: "faq",
                    },
                    {
                        type: "doc",
                        docId: "index",
                        position: "left",
                        label: "Testnet",
                        docsPluginId: "testnet",
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
