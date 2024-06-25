// Importation de la bibliothèque gsap GreenSock Animation Platform et de l'animation Power3
import gsap, { Power3 } from "gsap";

// Exportation de la fonction stagger
export const stagger = (target, fromVars, toVars) => {
  // Utilisation de la méthode gsap.fromTo pour animer les éléments
  return gsap.fromTo(
    target,                // Les éléments cibles de l'animation
    { opacity: 0, ...fromVars },  // Les propriétés initiales des éléments (opacity: 0 les rend transparents au début)
    {
      opacity: 1,         // Les éléments deviennent opaques à la fin de l'animation
      ...toVars,          // Propriétés finales additionnelles provenant de toVars
      stagger: 0.2,       // Décalage de 0,2 seconde entre les animations des éléments
      ease: Power3.easeOut // Utilisation de la courbe d'animation Power3.easeOut pour un effet naturel
    }
  );
};