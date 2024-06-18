import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  // Définir une meta description pour le contenu HTML généré
  const metaDescription = "Portfolio de Zaïm Chamsseddine Benyahia";
  
  // Utiliser remark et remark-html pour convertir le Markdown en HTML
  const result = await remark().use(html).process(markdown);
  
  // Construire le contenu HTML complet avec la balise meta description
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="description" content="${metaDescription}">
    </head>
    <body>
      ${result.toString()}
    </body>
    </html>
  `;
  
  return htmlContent;
}
