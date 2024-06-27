import React from "react";
import { useTheme } from "next-themes"; // Hook de next-themes pour gérer les thèmes sombres et clairs
import data from "../../data/portfolio.json"; 

// Définition du composant Button
const Button = ({ children, onClick }) => {
  const { theme } = useTheme(); // Utilisation du hook useTheme pour obtenir le thème actuel

  return (
    <button
      onClick={onClick} // Gestionnaire d'événements pour le clic sur le bouton
      type="button" // Définition du type de bouton
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark" 
          ? "hover:bg-slate-600 text-white" // Styles pour le thème sombre
          : "hover:bg-slate-100" // Styles pour le thème clair
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        data.showCursor && "cursor-none" // Application de la classe cursor-none si showCursor est vrai
      } link`}
    >
      {children} {/* Rendu des enfants passés au composant Button */}
    </button>
  );
};

export default Button;