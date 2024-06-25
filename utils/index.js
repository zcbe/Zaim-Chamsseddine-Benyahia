// Import des hooks `useLayoutEffect` et `useEffect` depuis la bibliothèque React
import { useLayoutEffect, useEffect } from "react";

// Définition du hook personnalisé `useIsomorphicLayoutEffect`
export const useIsomorphicLayoutEffect =
  // Vérifie si `window` est défini, indiquant que le code s'exécute dans un environnement de navigateur
  typeof window !== "undefined" 
    // Si `window` est défini, utilise `useLayoutEffect`
    ? useLayoutEffect 
    // Si `window` n'est pas défini (environnement de serveur), utilise `useEffect`
    : useEffect;
