import React, { useEffect, useState } from "react"; // Importation des hooks React nécessaires
import { useRouter } from "next/router"; // Hook de navigation pour Next.js
import Cursor from "../components/Cursor"; // Composant Cursor pour le curseur personnalisé
import Header from "../components/Header"; // Composant Header pour l'en-tête du CV
import ProjectResume from "../components/ProjectResume"; // Composant ProjectResume pour les expériences
import Socials from "../components/Socials"; 
import Button from "../components/Button"; 
import { useTheme } from "next-themes"; // Hook pour gérer le thème de Next.js
import { name, showResume } from "../data/portfolio.json"; // Importation de données spécifiques depuis portfolio.json
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter(); // Initialisation du hook de routage Next.js
  const theme = useTheme(); // Initialisation du hook pour gérer le thème actuel
  const [mount, setMount] = useState(false); // État local pour suivre le montage du composant

  useEffect(() => {
    setMount(true); // Marque le composant comme monté une fois que le rendu initial est terminé
    if (!showResume) {
      router.push("/"); // Redirige vers la page d'accueil si showResume est faux
    }
  }, []); // Le tableau vide indique que ce useEffect s'exécute uniquement après le premier rendu

  return (
    <>
      {/* Bouton "Edit Resume" (visible uniquement en environnement de développement) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}

      {/* Affiche le curseur personnalisé si `showCursor` est vrai dans les données */}
      {data.showCursor && <Cursor />}

      {/* Contenu principal du CV */}
      <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog /> {/* Composant Header avec la prop isBlog */}
        
        {/* Affiche le contenu du CV après le montage */}
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            {/* Carte principale du CV */}
            <div className={`w-full ${mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"} max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}>
              <h1 className="text-3xl font-bold">{name}</h1> {/* Affiche le nom à partir des données importées */}
              <h2 className="text-xl mt-5">{resume.tagline}</h2> {/* Affiche le tagline à partir des données importées */}
              <h2 className="w-4/5 text-xl mt-5 opacity-50">{resume.description}</h2> {/* Affiche la description à partir des données importées */}
              <div className="mt-2">
                <Socials /> {/* Composant Socials pour les liens sociaux */}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Expérience</h1>
                {/* Affiche chaque expérience */}
                {resume.experiences.map(({ id, dates, type, position, bullets }) => (
                  <ProjectResume
                    key={id}
                    dates={dates}
                    type={type}
                    position={position}
                    bullets={bullets}
                  />
                ))}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Éducation</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2> {/* Affiche le nom de l'université à partir des données importées */}
                  <h3 className="text-sm opacity-75">{resume.education.universityDate}</h3> {/* Affiche la date de l'université à partir des données importées */}
                  <p className="text-sm mt-2 opacity-50">{resume.education.universityPara}</p> {/* Affiche le paragraphe sur l'université à partir des données importées */}
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Compétences</h1>
                {/* Affiche les compétences catégorisées */}
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.frontends && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Front-End</h2>
                      <ul className="list-disc">
                        {/* Affiche chaque langage dans une liste */}
                        {resume.frontends.map((frontend, index) => (
                          <li key={index} className="ml-5 py-2">{frontend}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Affiche les backends Back-End */}
                  {resume.backends && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Back-End</h2>
                      <ul className="list-disc">
                        {/* Affiche chaque backend dans une liste */}
                        {resume.backends.map((backend, index) => (
                          <li key={index} className="ml-5 py-2">{backend}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Affiche d'autres compétences */}
                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Autres</h2>
                      <ul className="list-disc">
                        {/* Affiche chaque autre compétence dans une liste */}
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">{other}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
