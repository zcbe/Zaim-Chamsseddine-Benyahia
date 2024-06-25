// Importation des modules nécessaires depuis Node.js et des packages
import fs from "fs";  // Module fs pour manipuler le système de fichiers
import { join } from "path";  // Module path pour manipuler les chemins de fichiers

// Fonction de gestionnaire par défaut pour l'exportation
export default function handler(req, res) {
  // Définition du chemin absolu vers le fichier portfolio.json
  const portfolioData = join(process.cwd(), "/data/portfolio.json");
  
  // Vérification de l'environnement d'exécution
  if (process.env.NODE_ENV === "development") {
    // Si la requête est de type POST
    if (req.method === "POST") {
      // Écriture des données reçues dans le fichier portfolio.json
      fs.writeFileSync(
        portfolioData,
        JSON.stringify(req.body),  // Conversion des données du corps de la requête en chaîne JSON
        "utf-8"  // Encodage des données en UTF-8
      );
    } else {
      // Réponse pour les autres types de requêtes HTTP
      res
        .status(200)  // Statut de succès HTTP 200
        .json({ name: "This route works in development mode only" });  // Message JSON retourné
    }
  }
}
