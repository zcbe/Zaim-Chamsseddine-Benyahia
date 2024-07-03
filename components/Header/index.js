import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { name, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Attendre que le thème soit monté avant de modifier le style du header
    if (mounted) {
      const header = document.getElementById("main-header");
      if (header) {
        header.classList.remove("bg-white", "bg-gray-800");
        header.classList.add(theme === "light" ? "bg-white" : "bg-gray-800");
      }
    }
  }, [mounted, theme]);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className={`font-medium p-2 laptop:p-0 link ${
                  theme === "dark" ? "text-white" : ""
                }`}
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Changer de thème"
                  >
                    <img
                      className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Icône pour changer le thème"
                    />
                  </Button>
                )}
                <Popover.Button aria-label="Ouvrir le menu">
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Icône de menu"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleAboutScroll} aria-label="Voir la section About">About</Button>
                  <Button onClick={handleWorkScroll} aria-label="Voir la section Work">Work</Button>

                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      className="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:benyahia.zaim@gmail.com")}
                    aria-label="Contactez-moi"
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} className="first:ml-1">
                    Home
                  </Button>

                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      className="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:benyahia.zaim@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        id="main-header"
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        } ${theme === "dark" ? "text-white" : ""}`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleWorkScroll}>Work</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                className="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:benyahia.zaim@gmail.com")}>
              Contact
            </Button>
            {mounted && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Icône pour changer le thème"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>

            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                className="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:benyahia.zaim@gmail.com")}>
              Contact
            </Button>

            {mounted && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Changer de thème"
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Icône pour changer le thème"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
