import imgBg from "../../../assets/img/mobile/canal-de-vendas-bg-mobile-minutos-telecom.png";
import imgAreaVendasMobile from "../../../assets/img/mobile/canal-de-vendas-mobile-minutos-telecom.webp";
import imgAreaVendasTablet from "../../../assets/img/tablet/canal-de-vendas-tablet-minutos-telecom.webp";
import imgAreaVendasDesk from "../../../assets/img/desktop/canal-de-vendas-desktop-minutos-telecom.webp";
import useResponsivity from "../../../hooks/useResponsivity";
import StandardButton from "../../ui/StandardBtn";

function SectionAreaVendas() {
  const { isMobile, isTablet, isDesk } = useResponsivity();
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos!",
      "_blank",
    );
  };

  return (
    <section>
      {isMobile && <img src={imgAreaVendasMobile} alt="Área de Vendas" />}
      <div
        className="text-center text-white bg-cover bg-center h-64 md:h-72 lg:h-96"
        style={{
          backgroundImage: `url(${
            isMobile
              ? imgBg
              : isTablet
                ? imgAreaVendasTablet
                : isDesk
                  ? imgAreaVendasDesk
                  : imgBg
          })`,
        }}
      >
        <div className="md:w-1/2 md:ml-auto md:text-left md:p-6 md:pl-10 md:bg-black md:opacity-90 h-full lg:pt-20">
          <h2 className="text-2xl font-semibold p-8 md:px-0 md:pt-2 md:pb-6">
            Canal de Vendas
          </h2>
          <p className="pb-6 px-8 md:w-4/5 md:px-0 lg:w-1/2 ">
            Precisa de mais{" "}
            <strong className="text-azulAgua">informações</strong>, tirar{" "}
            <strong className="text-azulAgua">dúvidas</strong> ou contratar
            nossos <strong className="text-azulAgua">serviços</strong>?
          </p>
          <StandardButton variant="azulAgua" onClick={handleClick}>
            19 3081.0000
          </StandardButton>
        </div>
      </div>
    </section>
  );
}

export default SectionAreaVendas;
