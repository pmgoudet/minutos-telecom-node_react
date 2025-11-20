import Hamburger from "hamburger-react";
import NavBarBtn from "../../ui/NavBarBtn/index.jsx";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/InnerWidth/index.jsx";

function NavBar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  useEffect(() => {
    !isMobile ? setOpenBurgerMenu(true) : setOpenBurgerMenu(false);
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
      <div
        className={`
        w-full bg-azulMarinho rounded-md md:bg-black/80 md:rounded-none lg:h-[152px] lg:pt-12
        transition-all duration-500 ease-in-out md:px-12
        overflow-visible
        ${openBurgerMenu ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
      `}
      >
        <nav className="flex flex-col md:flex-row items-center md:justify-between md:px-10 lg:p-0 lg:pr-[12%]">
          {navBarPaths.map((page, index) =>
            page.color === "primaria" ? (
              <a
                href="#"
                className="text-lg p-1 text-center text-white hover:text-azulAgua duration-300"
                key={index}
              >
                {page.title}
              </a>
            ) : page.color === "secundaria" && width < 640 ? (
              <a
                href="#"
                className="font-semibold text-lg p-1 text-center text-azulAgua"
                key={index}
              >
                {page.title}
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
