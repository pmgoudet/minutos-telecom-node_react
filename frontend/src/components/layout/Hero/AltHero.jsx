import useResponsivity from "../../../hooks/useResponsivity";
import imgMobile from "../../../assets/img/mobile/home-mobile-minutos-telecom.webp";
import imgTablet from "../../../assets/img/tablet/home-tablet-minutos-telecom.webp";
import imgDesk from "../../../assets/img/desktop/home-desktop-minutos-telecom.webp";
import StandardButton from "../../ui/StandardBtn";
import { useLocation } from "react-router-dom";
import { HeroTexts } from "../../../data/HeroTexts";

//? =============================================
//? Hero section made for every page but the Home
//? =============================================

function AltHero() {
  const { isMobile, isTablet, isDesk } = useResponsivity();
  const location = useLocation();
  const currentHero = HeroTexts.find((hero) => hero.path === location.pathname);

  const handleAssineJa = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos, estou interessado(a) nos serviços residenciais.",
      "_blank",
    );
  };

  return (
    <div className="lg:flex">
      {/* Hero section image */}
      {isMobile && (
        <img
          className="h-48 w-full lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover"
          src={imgMobile}
          alt="Imagem decorativa da home page"
        />
      )}
      {isTablet && (
        <img
          className="h-52 w-full mt-[-84px] z-0 lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover"
          src={imgTablet}
          alt="Imagem decorativa da home page"
        />
      )}
      {isDesk && (
        <img
          className="lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover lg:min-h-full lg:max-h-screen lg:mt-[-152px]"
          src={imgDesk}
          alt="Imagem decorativa da home page"
        />
      )}

      {/* Hero section text */}
      <div className="bg-azulBg border-0 px-6 py-10 lg:h-[calc(100vh-152px)] lg:order-1 lg:w-[45vw] text-white">
        <div className="md:mx-14 lg:ml-0 lg:mr-10 lg:my-12 lg:pl-[20%] xl:mt-6 2xl:mt-20 ultra:mt-32 ultra:mr-32">
          <div className="flex items-baseline justify-between md:justify-normal">
            <h1 className="text-2xl my-4 md:text-3xl xl:text-4xl xl:my-8 ultra:text-5xl ultra:leading-snug">
              {currentHero.title}
            </h1>
            <img
              src={currentHero.icon}
              alt={`Ícone da página ${currentHero.title} Minutos Telecom`}
              className={`w-8 ${currentHero.distancePixels} ultra:ml-[-350px]`}
            />
          </div>
          <div className="md:flex md:justify-between items-center">
            {currentHero.content}
            {(location.pathname === "/residencial" ||
              location.pathname === "/corporativo") && (
              <div className="mt-4">
                <StandardButton variant="azulAgua" onClick={handleAssineJa}>
                  Assine já!
                </StandardButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltHero;
