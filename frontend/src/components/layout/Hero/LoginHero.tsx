import useResponsivity from "../../../hooks/useResponsivity";
import imgMobile from "../../../assets/img/mobile/home-mobile-minutos-telecom.webp";
import imgTablet from "../../../assets/img/tablet/home-tablet-minutos-telecom.webp";
import imgDesk from "../../../assets/img/desktop/home-desktop-minutos-telecom.webp";
import { useScrolled } from "../../../hooks/useScroll";

//? =============================================
//? Hero section made specifically for Área do Cliente (login)
//? =============================================

function LoginHero() {
  const { isMobile, isTablet, isDesk } = useResponsivity();
  const scrolled = useScrolled();

  return (
    <div className={`lg:flex bg-azulBg ${scrolled && isDesk && "pt-24"} `}>
      {/* Hero section image */}
      {isMobile && (
        <div className={`${scrolled && "pt-40"}`}>
          <img
            className={`h-48 w-full lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover opacity-50`}
            src={imgMobile}
            alt="Imagem decorativa da área do cliente"
          />
        </div>
      )}
      {isTablet && (
        <div className={`${scrolled && "pt-40"}`}>
          <img
            className={`h-40 w-full mt-[-64px] z-0 lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover opacity-50`}
            src={imgTablet}
            alt="Imagem decorativa da área do cliente"
          />
        </div>
      )}
      {isDesk && (
        <img
          className="lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover lg:h-[32vh] lg:mt-[-80px] opacity-50"
          src={imgDesk}
          alt="Imagem decorativa da área do cliente"
        />
      )}

      {/* Hero section text */}
      <div className="bg-azulBg border-0 px-6 py-6 lg:h-[calc(32vh-80px)] lg:order-1 lg:w-[45vw] text-white">
        <div className="md:mx-14 lg:ml-0 lg:mr-6 lg:my-4 lg:pl-[20%] ultra:mt-6 ultra:mr-32">
          <h1 className="text-azulAgua font-semibold text-2xl my-4 md:text-3xl lg:text-3xl lg:my-0 lg:pb-2 ultra:text-4xl ultra:leading-snug">
            Bem-vindo(a)!
          </h1>
          <p className="mt-2 lg:mt-2">Conecte-se para acessar sua área do cliente.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginHero;