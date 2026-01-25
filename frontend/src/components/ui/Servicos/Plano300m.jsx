import plano300mMobile from "../../../assets/img/mobile/planos-internet-banda-larga-mobile-minutos-telecom.jpg";
import plano300mTablet from "../../../assets/img/tablet/planos-internet-banda-larga-tablet-minutos-telecom.jpg";
import iconAntena from "../../../assets/icons/sinal-icon-minutos-telecom.svg";
import useResponsivity from "../../../hooks/useResponsivity";

function Plano300M() {
  const { isMobile } = useResponsivity();

  return (
    <div className="shadow-2xl mb-6 md:flex lg:max-h-[410px] lg:mt-6 m-auto">
      <img
        src={isMobile ? plano300mMobile : plano300mTablet}
        alt="Plano Internet Banda Larga 300 Mega"
        className="md:w-[60%] lg:w-[67%] object-cover"
      />
      <div className="bg-azulBg p-4 md:w-[40%] lg:w-[33%]">
        <div className="p-1 flex items-center gap-2">
          <img src={iconAntena} alt="Icone Plano 300M" className="h-8" />
          <p className="text-azulAgua font-bold text-xl">
            Internet - Plano 300M
          </p>
        </div>
        <div className="bg-azulMarinho text-white rounded-lg p-2">
          <div className="flex gap-4 md:block">
            <div className="font-bold md:text-center">
              <p className="text-6xl md:text-7xl">300</p>
              <p className="text-3xl">MEGA</p>
            </div>
            <p className="font-light md:mt-2 md:px-4">
              Navegue nas{" "}
              <strong className="text-azulAgua font-semibold">
                redes sociais
              </strong>{" "}
              e maratone suas{" "}
              <strong className="text-azulAgua font-semibold">séries</strong> na
              melhor qualidade!
            </p>
          </div>
          <div className="py-4 flex items-center justify-center text-2xl font-bold gap-2">
            <div>
              <p>por</p>
              <p>R$</p>
            </div>
            <p className=" text-azulAgua text-8xl md:text-7xl">99</p>
            <div>
              <p className="text-azulAgua text-4xl md:text-3xl">,90</p>
              <p>/mês</p>
            </div>
          </div>
          <p className="text-center">
            + WiFi e instalação <strong>gratuita</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plano300M;
