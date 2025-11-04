import Hamburger from "hamburger-react";
import NavBarBtn from "../../ui/NavBarBtn/index.jsx";
import { navBarPaths } from "../../../data/NavBarPaths.jsx";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-0 justify-items-center">
      {/* Mobile Layout */}
      <Hamburger color="#FFF" size={28} toggled={open} toggle={setOpen} />
      <div
        className={`
        w-full bg-azulMarinho rounded-md 
        transition-all duration-500 ease-in-out
        overflow-hidden
        ${open ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
      `}
      >
        <ul className="md:flex">
          {navBarPaths.map((page, index) =>
            page.color === "primaria" ? (
              <li className=" text-lg p-1 text-center text-white" key={index}>
                {page.title}
              </li>
            ) : (
              <li
                className="font-semibold text-lg p-1 text-center text-azulAgua"
                key={index}
              >
                {page.title}
              </li>
            )
          )}
        </ul>
      </div>
      <NavBarBtn />
    </div>
  );
}

export default NavBar;
