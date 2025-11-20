import { TiArrowSortedDown } from "react-icons/ti";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useState } from "react";

function NavBarBtn() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setDrop(false)}>
      <button
        className={`flex gap-2 items-center bg-azulBg py-3 px-5 ${
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
        className={`absolute z-50 left-0 p-2 
          bg-azulBg shadow-md overflow-hidden transition-all duration-300 ease-in-out  ${
            drop
              ? "max-h-70 opacity-100 visible rounded-b-md overflow-visible"
              : "max-h-0 opacity-0 invisible rounded-md "
          }`}
      >
        {navBarPaths
          .filter((path) => path.color === "secundaria")
          .map((path) => (
            <a
              key={path.title}
              href="#"
              className="block px-4 py-2 text-white font-bold hover:text-azulAgua duration-300"
            >
              {path.title}
            </a>
          ))}
      </nav>
    </div>
  );
}

export default NavBarBtn;
