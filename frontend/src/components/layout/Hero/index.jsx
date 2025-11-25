import useResponsivity from "../../../hooks/useResponsivity";
import imgMobile from "../../../assets/img/mobile/home-mobile-minutos-telecom.webp";
import imgTablet from "../../../assets/img/tablet/home-tablet-minutos-telecom.webp";
import imgDesk from "../../../assets/img/desktop/home-desktop-minutos-telecom.webp";
import antenaIcon from "../../../assets/img/icons/icon-antena-minutos-telecom.svg";
import StandardButton from "../../ui/StandardBtn";

function Hero() {
  const { isMobile, isTablet, isDesk } = useResponsivity();

  return (
    <div className="lg:flex">
      {/* Hero section image */}
      {isMobile && (
        <img
          className="w-full lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover"
          src={imgMobile}
          alt="Imagem decorativa da home page"
        />
      )}
      {isTablet && (
        <img
          className="w-full mt-[-84px] z-0 lg:order-2 lg:w-[55vw] lg:overflow-hidden object-cover"
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
        <div className="flex items-baseline gap-3">
          <h3 className="text-sm font-light">DESCUBRA NOVAS POSSIBILIDADES</h3>
          <img
            src={antenaIcon}
            alt="Ícone de antena de internet Minutos Telecom"
            className="w-5"
          />
        </div>
        <h1 className="text-2xl my-4">
          Projetos Referência em{" "}
          <strong className="text-azulAgua">Internet Empresarial</strong>
        </h1>
        <p className="font-light">
          Obtenha alto desempenho para sua empresa com qualidade e suporte
          técnico rápido. Conheça nossos projetos de internet empresarial de
          excelência com preço justo.
        </p>
        <StandardButton>Saiba Mais!</StandardButton>
      </div>
    </div>
  );
}

export default Hero;

// 40px 30px 50px 30px
