// import { useState, useEffect } from "react";
// import NavBar from "../NavBar";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`bg-azulBg w-full transition-all duration-300 ${
//         scrolled ? "fixed top-0 shadow-md z-50" : "relative"
//       }`}
//     >
//       <div
//         className={`mx-auto flex items-center py-4 px-6 md:p-0 lg:w-full transition-all duration-300 ${
//           scrolled ? "flex-row justify-between" : "flex-col lg:flex-row"
//         }`}
//       >
//         {/* Logo */}
//         <div className={`${scrolled ? "w-24" : "lg:w-[45vw]"}`}>
//           <a href="/">
//             <img
//               src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
//               alt="Logotipo Minutos Telecom"
//               className={`m-auto transition-all duration-300 ${
//                 scrolled
//                   ? "h-10 pt-2 pb-2 lg:m-0 lg:pl-4"
//                   : "pt-5 pb-4 md:pt-8 md:pb-6 lg:m-0 lg:pl-[22%]"
//               }`}
//             />
//           </a>
//         </div>
//         <NavBar />
//       </div>
//     </header>
//   );
// };

// export default Header;

import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="bg-azulBg">
      <div className="mx-auto flex-row items-center py-4 px-6 md:p-0 lg:flex lg:w-full">
        {/* Logo */}
        <div className="lg:w-[45vw]">
          <a href="/">
            <img
              src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
              alt="Logotipo Minutos Telecom"
              className="m-auto pt-5 pb-4 md:pt-8 md:pb-6 lg:m-0 lg:pl-[22%]"
            />
          </a>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
