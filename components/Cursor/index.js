import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => { // retourner une couleur du cursor
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "green";
    }
  };

  useEffect(() => { // hook useeffect est utilisté pour mettre à jour l'état mount à true. Le tableau vide signifie que cet effet s'exacutera qu'une seule fois lors du montage intial du composant
    setMount(true);
  }, []);
  // Rendu du composant
  return (
    <>
      {mount && ( // Affiche le curseur personnalisé seulement si le composant est monté
        <CustomCursor
          targets={[".link"]} // Éléments cibles ayant la classe link
          customClass="custom-cursor" // Classe CSS personnalisée pour le curseur
          dimensions={30} // Taille du curseur en pixels
          fill={getCusomColor()} // Couleur de remplissage du curseur déterminée par getCusomColor
          smoothness={{
            movement: 0.2, // Fluidité du mouvement
            scale: 0.1, // Fluidité des changements d'échelle
            opacity: 0.2, // Fluidité des variations d'opacité
          }}
          targetOpacity={0.5} // Opacité du curseur lorsqu'il est sur un élément cible
          targetScale={2} // Facteur de mise à l'échelle du curseur lorsqu'il est sur un élément cible
        />
      )}
    </>
  );
};

export default Cursor;
