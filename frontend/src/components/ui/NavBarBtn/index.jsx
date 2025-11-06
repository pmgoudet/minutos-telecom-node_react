import { TiArrowSortedDown } from "react-icons/ti";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useState } from "react";

function NavBarBtn() {
  const [drop, setDrop] = useState(false);

  //! TRAVEI NO ONCLICK ONMOUSE ENTER PARA TABLET, TEM QUE CRIAR UMA CONSTANTE COM O INNERWIDTH PRA COMPARAR

  return (
    <div className="relative" onMouseLeave={() => setDrop(false)}>
      <button
        className={`flex gap-2 items-center bg-azulBg p-4 px-8 ${
          drop ? "rounded-t-md" : "rounded-md"
        }`}
        onMouseEnter={() => setDrop(!drop)}
        onClick={() => setDrop(!drop)}
      >
        <p className="text-xl font-bold text-white">Cliente</p>
        <TiArrowSortedDown
          className={`text-white text-2xl transition-transform duration-300 ${
            drop ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      <nav
        className={`absolute left-0 p-2 
          x-7 bg-azulBg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            drop
              ? "max-h-60 opacity-100 visible rounded-b-md"
              : "max-h-0 opacity-0 invisible rounded-md "
          }`}
      >
        {navBarPaths
          .filter((path) => path.color === "secundaria")
          .map((path) => (
            <a
              key={path.title}
              href="#"
              className="block px-4 py-2 text-white font-bold hover:text-azulAgua "
            >
              {path.title}
            </a>
          ))}
      </nav>
    </div>
  );
}

export default NavBarBtn;
