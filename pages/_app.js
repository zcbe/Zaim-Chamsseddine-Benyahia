import "../styles/globals.css";

// Importation du ThemeProvider depuis le module next-themes
import { ThemeProvider } from "next-themes";

// Déclaration du composant App, une fonction fléchée prenant des props : Component et pageProps
const App = ({ Component, pageProps }) => {
  return (
    // Utilisation du ThemeProvider pour encapsuler l'application
    <ThemeProvider>
      {/* Rendu du composant de la page avec ses props */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// Exportation par défaut du composant App
export default App;
