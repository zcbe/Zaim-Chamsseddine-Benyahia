import { remark } from "remark";
import html from "remark-html";

const addHeadElements = `
  <meta charset="UTF-8">
  <link rel="canonical" href="https://projet-12-mon-portfolio.vercel.app/">
  <meta name="description" content="Zaïm Chamsseddine Benyahia, développeur web à Lille, utilisant html, css, js, react, swagger, api">
  <meta name="keywords" content="developpeur web, react, site web">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zaïm Chamsseddine Benyahia</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap"></noscript>
`;

const addStyle = `
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap");
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @import "./markdown.css";

    * {
      font-family: "Hind";
    }
  </style>
`;

const addScripts = `
  <script defer src="https://example.com/some-non-critical-script.js"></script>
`;

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return `
    <html lang="en">
      <head>
        ${addHeadElements}
        ${addStyle}
      </head>
      <body>
        ${result.toString()}
        ${addScripts}
      </body>
    </html>
  `;
}
