import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../utils/animations/index.js";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Données locales
import data from "../data/portfolio.json";

export default function Home() {
  // Références pour les éléments DOM
  const workRef = useRef();  // Référence pour la section "Project"
  const aboutRef = useRef();  // Référence pour la section "About"
  const textOne = useRef();  // Référence pour le texte animé
  const textTwo = useRef(); 
  const textThree = useRef(); 
  const textFour = useRef(); 

  // Gestion du défilement
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,  // Défilement vers le haut de la section "Project"
      left: 0,
      behavior: "smooth",  // Défilement fluide
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,  // Défilement vers le haut de la section "About"
      left: 0,
      behavior: "smooth",  // Défilement fluide
    });
  };

  // Effet pour les animations
  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],  // Tableau des éléments à animer
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },  // Propriétés de l'animation initiale
      { y: 0, x: 0, transform: "scale(1)" }  // Propriétés de l'animation finale
    );
  }, []);  // Déclenchement une seule fois après le montage du composant

  // Rendu JSX
  return (
    <div lang="en" className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}  {/* Affiche le curseur personnalisé si showCursor est vrai dans les données */}
      <Head>
        <title>{data.name}</title>  {/* Titre de la page depuis les données */}
        <meta name="description" content="Zaïm Chamsseddine Benyahia, développeur web à Lille, utilisant html, css, js, react, swagger, api"/>  {/* Description méta de la page */}
      </Head>

      <div className="gradient-circle"></div>  {/* Cercle de dégradé en fond */}
      <div className="gradient-circle-bottom"></div>  {/* Cercle de dégradé en bas de page */}

      <div className="container mx-auto mb-10">  {/* Conteneur principal avec une marge en bas */}
        <Header
          handleAboutScroll={handleAboutScroll}
          handleWorkScroll={handleWorkScroll}
        />  {/* Composant Header avec des gestionnaires de défilement passés en props */}
        
        <div className="laptop:mt-20 mt-10">  {/* Contenu principal avec une marge différente selon la taille de l'écran */}
          <div className="mt-5">  {/* Marge en haut */}
            {/* Titres dynamiques récupérés depuis les données */}
            <h1
              ref={textOne}  // Référence pour l'animation
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}  
            </h1>
            <h1
              ref={textTwo}  // Référence pour l'animation
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo} 
            </h1>
            <h1
              ref={textThree}  // Référence pour l'animation
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}  
            </h1>
            <h1
              ref={textFour}  // Référence pour l'animation
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}  
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />  {/* Composant Socials avec une marge différente selon la taille de l'écran */}

          {/* Section "About" avec une référence pour le défilement */}
          <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={aboutRef}>
            <h1 className="text-2xl text-bold">About</h1>  {/* Titre "About" */}
            <p className="tablet:m-10 mt-2 tablet:w-4/5 text-xl laptop:text-3xl w-full laptop:w-4/5 p-4 rounded-lg text-justify">
              {data.aboutpara}  {/* Paragraphe dynamique récupéré depuis les données */}
            </p>
          </div>
        </div>

        {/* Section "Project" avec une référence pour le défilement */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects</h1> 

          {/* Liste des cartes de projet générées dynamiquement */}
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                alt={project.alt}
                tech={project.tech}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* Bouton de développement (visible uniquement en mode développement) */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button>Edit Data</Button>
            </Link>
          </div>
        )}

        <Footer />  {/* Composant Footer */}
      </div>
    </div>
  );
}
