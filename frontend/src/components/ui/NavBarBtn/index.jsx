import { TiArrowSortedDown } from "react-icons/ti";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarBtn() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setDrop(false)}>
      <button
        className={`flex gap-2 items-center bg-azulBg py-3 px-5 ${
          drop ? "rounded-t-md" : "rounded-md"
        }`}
        onMouseEnter={() => setDrop(true)}
        onClick={() => setDrop(!drop)}
      >
        <p className="text-xl text-white">Cliente</p>
        <TiArrowSortedDown
          className={`text-white text-2xl transition-transform ${
            drop ? "rotate-180" : ""
          }`}
        />
      </button>

      <nav
        className={`absolute z-50 left-0 p-2 bg-azulBg shadow-md transition-all duration-300
          ${drop ? "opacity-100 visible rounded-b-md" : "opacity-0 invisible"}
        `}
      >
        {navBarPaths
          .filter((path) => path.color === "secundaria")
          .map((path) => {
            const isExternal = path.path.startsWith("http");

            return isExternal ? (
              <a
                key={path.title}
                href={path.path}
                target={path.target || "_self"}
                rel={
                  path.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="block px-4 py-2 text-white hover:text-azulAgua"
              >
                {path.title}
              </a>
            ) : (
              <Link
                key={path.title}
                to={path.path}
                className="block px-4 py-2 text-white hover:text-azulAgua"
              >
                {path.title}
              </Link>
            );
          })}
      </nav>
    </div>
  );
}

export default NavBarBtn;

//! A VER SE NÃO TEM ERRO AQUI EM CIMA

// import { TiArrowSortedDown } from "react-icons/ti";
// import { navBarPaths } from "../../../data/NavBarPaths.jsx";
// import { useState } from "react";

// function NavBarBtn() {
//   const [drop, setDrop] = useState(false);

//   return (
//     <div className="relative" onMouseLeave={() => setDrop(false)}>
//       <button
//         className={`flex gap-2 items-center bg-azulBg py-3 px-5 ${
//           drop ? "rounded-t-md" : "rounded-md"
//         }`}
//         onMouseEnter={() => setDrop(!drop)}
//         onClick={() => setDrop(!drop)}
//       >
//         <p className="text-xl text-white">Cliente</p>
//         <TiArrowSortedDown
//           className={`text-white text-2xl transition-transform duration-300 ${
//             drop ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>

//       {/* Dropdown */}
//       <nav
//         className={`absolute z-50 left-0 p-2
//           bg-azulBg shadow-md overflow-hidden transition-all duration-300 ease-in-out  ${
//             drop
//               ? "max-h-70 opacity-100 visible rounded-b-md overflow-visible"
//               : "max-h-0 opacity-0 invisible rounded-md "
//           }`}
//       >
//         {/* This menu in not for mobile. Search NavBar for others. */}
//         {navBarPaths
//           .filter((path) => path.color === "secundaria")
//           .map((path) => (
//             <a
//               key={path.title}
//               href={path.path}
//               target={path.target ? path.target : "_self"}
//               rel={path.target === "_blank" ? "noopener noreferrer" : undefined}
//               className="block px-4 py-2 text-white hover:text-azulAgua duration-300"
//             >
//               {path.title}
//             </a>
//           ))}
//       </nav>
//     </div>
//   );
// }

// export default NavBarBtn;
