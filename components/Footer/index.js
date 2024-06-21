import React from "react";
import Socials from "../Socials";

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">       
            <Socials />
          </div>
        </div>
        <footer className="mt-10 text-center">
          <p>&copy; 2024 Zaïm Chamsseddine Benyahia. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
