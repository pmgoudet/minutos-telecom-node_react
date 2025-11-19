import Hamburger from "hamburger-react";
import NavBarBtn from "../../ui/NavBarBtn/index.jsx";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../ui/Responsivity/InnerWidth/index.jsx";

function NavBar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  useEffect(() => {
    !isMobile ? setOpenBurgerMenu(true) : setOpenBurgerMenu(false);
  }, [isMobile]);

  return (
    <div className="p-0 justify-items-center">
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
        w-full bg-azulMarinho md:bg-black/80 rounded-md md:rounded-none
        transition-all duration-500 ease-in-out md:px-12
        overflow-hidden
        ${openBurgerMenu ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
      `}
      >
        <nav className="flex flex-col md:flex-row items-center md:justify-between">
          {navBarPaths.map((page, index) =>
            page.color === "primaria" ? (
              <a
                href="#"
                className=" text-lg p-1 text-center text-white"
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
