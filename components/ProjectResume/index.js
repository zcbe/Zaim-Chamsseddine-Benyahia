import React from "react";

// Déclaration du composant ProjectResume
const ProjectResume = ({ dates, type, position, bullets }) => {
  // Déclaration d'une variable d'état bulletsLocal et de sa fonction setter setBulletsLocal
  const [bulletsLocal, setBulletsLocal] = React.useState([]);

  // Effet de côté pour gérer les changements dans la prop bullets
  React.useEffect(() => {
    // Vérifier si bullets est une chaîne de caractères
    if (typeof bullets === "string") {
      // Diviser la chaîne de bullets par les virgules et mettre à jour bulletsLocal
      setBulletsLocal(bullets.split(","));
    } else {
      // Réinitialiser bulletsLocal à un tableau vide si bullets n'est pas une chaîne de caractères
      setBulletsLocal([]);
    }
  }, [bullets]); // Déclenchement de cet effet à chaque changement de la prop bullets

  // Rendu du composant
  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      {/* Section des dates et du type */}
      <div className="text-lg w-2/5">
        {/* Affichage des dates */}
        <h2>{dates}</h2>
        {/* Affichage du type avec une opacité réduite */}
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      {/* Section de la position et des bullets */}
      <div className="w-3/5">
        {/* Affichage de la position en gras */}
        <h2 className="text-lg font-bold">{position}</h2>
        {/* Vérifier si bulletsLocal n'est pas vide avant d'afficher la liste */}
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {/* Boucle sur bulletsLocal pour afficher chaque élément dans une liste */}
            {bulletsLocal.map((bullet, index) => (
              // Chaque élément de liste avec une clé unique basée sur son index
              <li key={index} className="text-sm my-1 ml-5 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Exportation du composant ProjectResume pour pouvoir l'utiliser dans d'autres fichiers
export default ProjectResume;
