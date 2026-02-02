import NavBar from "../NavBar";
import { useScrolled } from "../../../hooks/useScroll";

const Header = () => {
  const scrolled = useScrolled();

  return (
    <header
      className={`bg-azulBg w-full ${
        scrolled ? "fixed top-0 shadow-md z-[999]" : "relative"
      }`}
    >
      <div
        className={`mx-auto py-4 px-6 md:p-0 lg:flex lg:w-full ${scrolled && "py-1 flex justify-between items-center md:flex-col lg:flex-row lg:h-20 ultra:h-20"}`}
      >
        {/* Logo */}{" "}
        <div className={`lg:w-[45vw]`}>
          <a href="/" className={`${scrolled && "flex justify-start"}`}>
            <img
              src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
              alt="Logotipo Minutos Telecom"
              className={`lg:m-0 lg:pl-[22%] transition-all duration-300 ${scrolled ? "p-0 scale-50 origin-left md:origin-center" : "m-auto  pt-5 pb-4 md:pt-8 md:pb-6 scale-100"}`}
            />
          </a>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

//! ----------------------------------------------------------------------------- SECUTIRY BACKUP

// export default Header;

// import NavBar from "../NavBar";

// const Header = () => {

//   return (
//     <header className="bg-azulBg">
//       <div className="mx-auto flex-row items-center py-4 px-6 md:p-0 lg:flex lg:w-full">
//         {/* Logo */}
//         <div className="lg:w-[45vw]">
//           <a href="/">
//             <img
//               src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
//               alt="Logotipo Minutos Telecom"
//               className="m-auto pt-5 pb-4 md:pt-8 md:pb-6 lg:m-0 lg:pl-[22%]"
//             />
//           </a>
//         </div>
//         <NavBar />
//       </div>
//     </header>
//   );
// };

// export default Header;
