import Hamburger from "hamburger-react";
import NavBarBtn from "../../ui/NavBarBtn/index.jsx";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useResponsivity from "../../../hooks/useResponsivity.jsx";

function NavBar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { isMobile, width } = useResponsivity();

  useEffect(() => {
    setOpenBurgerMenu(!isMobile);
  }, [isMobile]);

  return (
    <div className="p-0 justify-items-center lg:w-[55vw]">
      {/* Burger Menu - Mobile */}
      {isMobile && (
        <Hamburger
          color="#FFF"
          size={28}
          toggled={openBurgerMenu}
          toggle={setOpenBurgerMenu}
          label="menu"
        />
      )}

      {/* Navigation Bar */}
      <div
        className={`
        w-full bg-azulMarinho rounded-md md:bg-black/80 md:rounded-none md:relative md:z-40 lg:h-[152px] lg:pt-12
        transition-all duration-500 ease-in-out md:px-12
        overflow-visible
        ${openBurgerMenu ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
      `}
      >
        <nav className="flex flex-col md:flex-row items-center md:justify-between md:px-10 lg:p-0 lg:pr-[12%] md:relative md:z-50 ">
          {navBarPaths.map((path, index) =>
            path.color === "primaria" ? (
              <a
                href={path.path}
                className="text-lg p-1 text-center text-white hover:text-azulAgua duration-300"
                key={index}
              >
                {path.title}
              </a>
            ) : // This secondary menu works only for mobile. Search NavBarBtn for others.
            path.color === "secundaria" && width < 640 ? (
              <a
                href={path.path}
                target={path.target ? path.target : "_self"}
                rel={
                  path.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="font-semibold text-lg p-1 text-center text-azulAgua"
                key={index}
              >
                {path.title}
              </a>
            ) : null
          )}
          {!isMobile && <NavBarBtn />}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
