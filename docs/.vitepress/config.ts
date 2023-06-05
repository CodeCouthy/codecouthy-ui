import { defineConfig } from "vitepress";
import sidebar from "./theme/sidebar";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "CodeCouthyUI";
const ogUrl = "https://vitejs.dev";
const ogDescription = "Next Generation Frontend Tooling";
export default defineConfig({
  title: "CodeCouthy-UI",
  description: "组件库",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@vite_js" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/CodeCouthy/codecouthy-ui" },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present CodeCouthy'
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/install", activeMatch: "/guide/" },
      { text: "组件", link: "/components/Button/index", activeMatch: "/components/Button/" },
    ],
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        cssPreprocessor: "sass",
      });
    },
  },
});
