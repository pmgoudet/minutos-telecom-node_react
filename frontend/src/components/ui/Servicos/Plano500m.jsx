import plano500mMobile from "../../../assets/img/mobile/planos-internet-banda2-larga-mobile-minutos-telecom.jpg";
import plano500mTablet from "../../../assets/img/tablet/planos-internet-banda2-larga-tablet-minutos-telecom.jpg";
import iconAntena from "../../../assets/icons/sinal-icon-minutos-telecom.svg";
import useResponsivity from "../../../hooks/useResponsivity";

function Plano500M() {
  const { isMobile } = useResponsivity();

  return (
    <div className="shadow-2xl md:flex lg:max-w-[1000px] lg:max-h-[430px] lg:mt-10 m-auto">
      <img
        src={isMobile ? plano500mMobile : plano500mTablet}
        alt="Plano Internet Banda Larga 300 Mega"
        className="md:w-[60%] lg:w-[67%] object-cover md:order-1"
      />
      <div className="bg-azulBg p-4 md:w-[40%] lg:w-[33%] md:order-0">
        <div className="p-1 flex items-center gap-2 ">
          <img src={iconAntena} alt="Icone Plano 300M" className="h-8" />
          <p className="text-azulAgua font-bold text-xl">
            Internet - Plano 500M
          </p>
        </div>
        <div className="bg-azulMarinho text-white rounded-lg p-2">
          <div className="flex gap-4 md:block">
            <div className="font-bold md:text-center">
              <p className="text-6xl md:text-7xl">500</p>
              <p className="text-3xl">MEGA</p>
            </div>
            <p className="font-light md:mt-2 md:px-4">
              Plano turbinado:{" "}
              <strong className="text-azulAgua font-semibold">
                reuniões online
              </strong>
              , <strong className="text-azulAgua font-semibold">jogos</strong> e{" "}
              <strong className="text-azulAgua font-semibold">
                multi-telas
              </strong>{" "}
              sem travamento!
            </p>
          </div>
          <div className="py-4 flex items-center justify-center text-2xl font-bold gap-2">
            <div>
              <p>por</p>
              <p>R$</p>
            </div>
            <p className=" text-azulAgua text-8xl md:text-7xl">129</p>
            <div>
              <p className="text-azulAgua text-4xl md:text-3xl">,90</p>
              <p>/mês</p>
            </div>
          </div>
          <p className="text-center">
            + WiFi e instalação <strong>gratuita</strong>
          </p>
          <p className="text-center">
            + Fixo local <strong>ilimitado</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plano500M;
