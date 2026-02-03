import useResponsivity from "../../../hooks/useResponsivity";
import gif from "../../../assets/gifs/gif-tech.gif";
import imgCorporativo from "../../../assets/img/desktop/corporativo-minutos-telecom.png";
import imgResidenciais from "../../../assets/img/desktop/residencial-minutos-telecom.png";
import { useNavigate } from "react-router-dom";

function SectionInstitucional() {
  const { isDesk, isMobile, isTablet } = useResponsivity();
  const navigate = useNavigate();

  return (
    <section className="md:flex md:gap-10 md:p-20 lg:h-[100vh] md:items-center lg:gap-8 lg:justify-center mega:h-auto">
      {/* Desktop Left Images */}
      {isDesk && (
        <div className="flex flex-col gap-8">
          <img
            src={imgCorporativo}
            alt="Planos Corporativos"
            className="h-56 w-full opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={() => {
              navigate("/corporativo");
              window.scrollTo(0, 0);
            }}
          />
          <img
            src={imgResidenciais}
            alt="Planos Residenciais"
            className="h-56 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={() => {
              navigate("/residencial");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}

      {/* Central blue block */}
      <div className="bg-azulMarinho text-white p-6 md:w-1/2 lg:w-1/3 ultra:w-96">
        <h2 className="text-2xl font-semibold">
          Serviços de Tecnologia Personalizados
        </h2>
        {isMobile || isTablet ? (
          <div className="font-light">
            <p className="pt-4 pb-2">
              Especialista em telecomunicações e tecnologia da informação desde
              2007, com{" "}
              <strong className="font-semibold">
                soluções para empresas de todos os portes
              </strong>
              .
            </p>
            <p>
              Internet dedicada, banda larga, telefonia, consultoria em TI e
              suporte técnico, com{" "}
              <strong className="font-semibold">tecnologia de ponta</strong>,{" "}
              <strong className="font-semibold">preços competitivos</strong> e
              atendimento diferenciado.
            </p>
          </div>
        ) : (
          <div className="pt-4 pb-2 font-light">
            <p className="pt-4 pb-2">
              Atuando no mercado desde 2007,{" "}
              <strong className="font-bold">Minutos Telecom</strong> é
              especializada em soluções em telecomunicações e tecnologia da
              informação , atendendo empresas de diversos portes e segmentos.
            </p>
            <p className="pb-2">
              Com forte expertise em consultoria em TI, suporte técnico
              especializado, internet dedicada, banda larga corporativa e
              telefonia, desenvolve projetos personalizados que garantem
              <strong className="font-semibold"> conectividade</strong>,{" "}
              <strong className="font-semibold">desempenho</strong> e{" "}
              <strong className="font-semibold">segurança</strong> para os
              negócios.
            </p>
            <p className="pb-2">
              O compromisso está em contribuir para o crescimento das empresas
              por meio de serviços de alta qualidade,{" "}
              <strong className="font-semibold">
                {" "}
                tecnologia de última geração
              </strong>
              , preços <strong className="font-semibold">
                competitivos
              </strong> e{" "}
              <strong className="font-semibold">
                suporte técnico diferenciado
              </strong>
              , assegurando eficiência e confiabilidade em todas as operações.
            </p>
            <p className="pb-2">
              Soluções completas em telecomunicações para empresas que buscam{" "}
              <strong className="font-semibold">performance</strong>,{" "}
              <strong className="font-semibold">estabilidade</strong> e{" "}
              <strong className="font-semibold">evolução constante</strong>.
            </p>
          </div>
        )}
      </div>
      {/* Gif + h2 */}
      <div className="flex items-center p-6 md:w-1/2 md:flex-col md:gap-6 lg:w-1/3">
        <h3 className="text-xl text-azulMarinho font-semibold md:order-1 md:text-3xl md:text-center ultra:w-2/3">
          Suas reuniões em alta definição,{" "}
          <strong className="text-azulBg">sem travar</strong>.
        </h3>
        <img src={gif} alt="Animação Telecom" className="md:order-0 md:h-44" />
      </div>
    </section>
  );
}

export default SectionInstitucional;
