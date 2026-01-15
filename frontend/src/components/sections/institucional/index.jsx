import useResponsivity from "../../../hooks/useResponsivity";
import gif from "../../../assets/gifs/gif-tech.gif";

function SectionInstitucional() {
  const { isDesk } = useResponsivity();

  return (
    <section>
      {isDesk && (
        <div>
          <img src="#" alt="Planos Corporativos" />
          <img src="#" alt="Planos Residenciais" />
        </div>
      )}
      <div className="bg-azulMarinho text-white p-6">
        <h2 className="text-2xl font-semibold">
          Serviços de Tecnologia Personalizados
        </h2>
        {/* !!!! Pensar nos negritos */}
        <p className="pt-4 pb-2 font-light">
          Especialista em telecomunicações e tecnologia da informação desde
          2007, com soluções para empresas de todos os portes.
        </p>
        <p className="font-light">
          Internet dedicada, banda larga, telefonia, consultoria em TI e suporte
          técnico, com <strong>tecnologia de ponta</strong>,{" "}
          <strong>preços competitivos</strong> e atendimento diferenciado.
        </p>
      </div>
      <div className="flex items-center p-6">
        <h3 className="text-xl text-azulMarinho">
          Suas reuniões em alta definição, <strong>sem travar</strong>.
        </h3>
        <img src={gif} alt="Animação Telecom" />
      </div>
    </section>
  );
}

export default SectionInstitucional;

//todo => versão mobile do texto

// <p>
//   Atuando no mercado desde 2007, a empresa é especializada em soluções
//   em telecomunicações e tecnologia da informação, atendendo empresas de
//   diversos portes e segmentos.
// </p>
// <p>
//   Com forte expertise em consultoria em TI, suporte técnico
//   especializado, internet dedicada, banda larga corporativa e telefonia,
//   desenvolve projetos personalizados que garantem conectividade,
//   desempenho e segurança para os negócios.
// </p>
// <p>
//   O compromisso está em contribuir para o crescimento das empresas por
//   meio de serviços de alta qualidade, tecnologia de última geração,
//   preços competitivos e suporte técnico diferenciado, assegurando
//   eficiência e confiabilidade em todas as operações.
// </p>
// <p>
//   Soluções completas em telecomunicações para empresas que buscam
//   performance, estabilidade e evolução constante.
// </p>
