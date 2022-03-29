// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Super Protocol",
    tagline: "Dinosaurs are cool",
    url: "https://docs.dev.superprotocol.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "static/favicon.ico",
    organizationName: "Super Protocol", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.
    plugins: [
        [
            "docusaurus-plugin-typedoc",
            {
                entryPoints: ["sp-sdk-js/src/index.ts"],
                tsconfig: "sp-sdk-js/tsconfig.json",
                out: "sdk",
                sidebar: {
                    categoryLabel: "SDK",
                }
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "whitepaper",
                path: "whitepaper",
                routeBasePath: "/",
                sidebarPath: require.resolve("./sidebarsWhitepaper.js"),
                editUrl: "https://github.com/Super-Protocol/docs/tree/main/whitepaper",
            },
        ],
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebarsDocs.js"),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css')],
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
                        label: "Whitepaper",
                        docsPluginId: "whitepaper",
                    },
                    {
                        type: "doc",
                        docId: "sdk/index",
                        position: "left",
                        label: "Documentation",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "About project",
                        items: [
                            {
                                label: "Whitepaper",
                                to: "/",
                            },
                            {
                                label: "Documentation",
                                to: "/docs/sdk/",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} SuperProtocol, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
