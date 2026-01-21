import internetMobile from "../../../assets/img/mobile/img-mobile-planos-business-minutos-telecom.jpg";
import internetTablet from "../../../assets/img/tablet/img-tablet-planos-business-minutos-telecom.jpg";
import useResponsivity from "../../../hooks/useResponsivity";
import iconAntena from "../../../assets/icons/sinal-icon-minutos-telecom.svg";
import iconPlanoBusiness from "../../../assets/icons/plano-business-icon-minutos-telecom.svg";

const planosBusiness = [
  {
    title: "Business 300",
    mega: 300,
    reais: 299,
    centavos: 99,
    bonus: "no plano de 36 meses",
  },
  {
    title: "Business 500",
    mega: 500,
    reais: 399,
    centavos: 99,
    bonus: "no plano de 36 meses",
  },
];

function InternetBandaLargaBusiness() {
  const { isMobile } = useResponsivity();

  return (
    <div className="shadow-xl mb-6 md:m-12 lg:max-w-[1000px] lg:mt-10 lg:m-auto lg:mb-10">
      <div className="bg-azulBg p-4 md:flex md:gap-4 md:justify-between text-white">
        {/* Cards */}
        <div className="flex gap-2 justify-between mb-6 md:order-1 md:m-0">
          {planosBusiness.map((item, i) => (
            <div key={i} className="bg-azulMarinho text-white rounded-lg p-2">
              <div className="flex items-center gap-2 pb-2 justify-center ">
                <img
                  src={iconPlanoBusiness}
                  alt="Icone Internet"
                  className="h-4"
                />
                <p className="text-azulAgua font-bold text-[3.5vw] md:text-xl leading-none">
                  {item.title}
                </p>
              </div>
              <div className="flex gap-2 md:block justify-center">
                <div className="font-bold text-center">
                  <p className="text-[15vw] leading-none md:text-7xl">
                    {item.mega}
                  </p>
                  <p className="text-[30px] leading-none md:text-3xl">MEGA</p>
                </div>
              </div>
              <div className="py-4 flex items-center justify-center text-2xl font-bold gap-1">
                <div>
                  <p className="text-[3vw] leading-none md:text-base">por</p>
                  <p className="text-[3vw] leading-none md:text-base">R$</p>
                </div>
                <p className="text-azulAgua text-[9vw] leading-none md:text-5xl">
                  {item.reais}
                </p>
                <div>
                  <p className="text-azulAgua text-[4vw] leading-none text-base">
                    {`,${item.centavos}`}
                  </p>
                  <p className="text-[2vw] leading-none md:text-base">/mês</p>
                </div>
              </div>
              <p className="text-center text-[3vw] leading-none md:text-sm">
                {item.bonus}
              </p>
            </div>
          ))}
        </div>

        {/* Text block */}
        <div className="md:order-0">
          <div className="flex justify-between items-center pb-4 w-4/5">
            <h3 className="text-azulAgua font-bold text-2xl md:text-xl lg:text-3xl">
              Internet Banda Larga
            </h3>
            <img src={iconAntena} alt="Icone Internet" className="h-7" />
          </div>
          <p className="w-4/5">
            Para empresas que precisam de desempenho{" "}
            <strong className="text-azulAgua font-semibold">
              sem interrupções
            </strong>
            .
          </p>
          <ul className="list-disc list-inside my-3">
            <li>Fibra Óptica</li>
            <li>Ilimitada</li>
            <li>50% de Upload</li>
            <li>Sem uso de linha</li>
            <li>Suporte Personalizado</li>
          </ul>
        </div>
      </div>

      <img
        src={isMobile ? internetMobile : internetTablet}
        alt={`Plano Internet Banda Larga Business`}
        className="w-full"
      />
    </div>
  );
}

export default InternetBandaLargaBusiness;
