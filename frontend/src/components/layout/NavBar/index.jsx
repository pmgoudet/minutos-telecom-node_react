import Hamburger from "hamburger-react";
import NavBarBtn from "../../ui/NavBarBtn/index.jsx";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useState } from "react";

function NavBar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  // const dropdownContent = <div></div>;

  return (
    <div className="p-0 justify-items-center">
      {/* Mobile Layout */}
      <Hamburger
        color="#FFF"
        size={28}
        toggled={openBurgerMenu}
        toggle={setOpenBurgerMenu}
      />
      <div
        className={`
        w-full bg-azulMarinho rounded-md 
        transition-all duration-500 ease-in-out
        overflow-hidden
        ${openBurgerMenu ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
      `}
      >
        <nav className="md:flex">
          {navBarPaths.map((page, index) =>
            page.color === "primaria" ? (
              <a
                href="#"
                className=" text-lg p-1 text-center text-white"
                key={index}
              >
                {page.title}
              </a>
            ) : (
              <a
                href="#"
                className="font-semibold text-lg p-1 text-center text-azulAgua"
                key={index}
              >
                {page.title}
              </a>
            )
          )}
        </nav>
      </div>
      <NavBarBtn />
    </div>
  );
}

export default NavBar;
