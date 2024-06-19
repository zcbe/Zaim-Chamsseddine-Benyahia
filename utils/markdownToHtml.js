import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  // Définir une meta description pour le contenu HTML généré
  const metaDescription = "Zaïm Chamsseddine Benyahia, développeur web à Lille, utilisant html,css,js, react,swagger,api";
  
  // Utiliser remark et remark-html pour convertir le Markdown en HTML
  const result = await remark().use(html).process(markdown);
  
  // Construire le contenu HTML complet avec la balise meta description
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="canonical" href="https://zcbe.github.io/ninacarducci.github.io/">
      <title>Nina Carducci - Photographe professionnelle à Bordeaux</title>
      <meta name="description" content="${metaDescription}">
      <meta name="keywords" content="photographe, services photo, retouche photo,albums photo">
    </head>
    <body>
      ${result.toString()}
    </body>
    </html>
  `;
  
  return htmlContent;
}
