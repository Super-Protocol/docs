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
    favicon: "img/favicon.ico",
    organizationName: "Super Protocol", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.
    plugins: [
        [
            "docusaurus-plugin-typedoc",

            // Plugin / TypeDoc options
            {
                entryPoints: ["sp-sdk-js/src/index.ts"],
                tsconfig: "sp-sdk-js/tsconfig.json",
            },
        ],
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {},
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
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "api/index",
                        position: "left",
                        label: "API Reference",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "API Reference",
                                to: "/docs/api/index",
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
