import imgMobile from "../../../assets/img/mobile/foto-contratos-mobile-minutos-telecom.png";
import imgTablet from "../../../assets/img/tablet/foto-contratos-tablet-minutos-telecom.png";
import iconPDF from "../../../assets/icons/pdf-icon-minutos-telecom.svg";
import contratoSCM from "../../../assets/docs/Minuta-de-Contrato-SCM-Minutos-Telecom.pdf";
import contratoSCMLinkDedicado from "../../../assets/docs/Minuta-de-Contrato-Link-Dedicado-Minutos-Telecom.pdf";
import contratoSVA from "../../../assets/docs/Minuta-de-Contrato-SVA-Minutos-Telecom.pdf";
import useResponsivity from "../../../hooks/useResponsivity";

const data = [
  {
    title: "Contrato SCM",
    content: contratoSCM,
  },
  {
    title: "Contrato SCM - Link Dedicado",
    content: contratoSCMLinkDedicado,
  },
  {
    title: "Contrato SVA",
    content: contratoSVA,
  },
];

function SectionContratos() {
  const { isMobile } = useResponsivity();

  return (
    <section className="mb-10 md:mx-12 md:my-16 md:flex md:justify-center md:gap-8 lg:max-w-[800px] lg:mx-auto">
      <img
        src={isMobile ? imgMobile : imgTablet}
        alt="Imagem decorativa da sessão contratos"
      />
      <div>
        <div className="m-6 text-azulMarinho md:m-0 md:mb-4">
          <h2 className="text-2xl font-semibold pb-4">
            Download dos Contratos:
          </h2>
          <p>
            Contratos registrados em cartório, vinculados ao termo de
            contratação de cada cliente, disponíveis para consulta, com foco
            especial nos clientes corporativos.
          </p>
        </div>
        <div>
          {data.map((item, i) => (
            <a
              key={i}
              href={item.content}
              target="_blank"
              className="text-white duration-300 bg-azulMarinho lg:hover:bg-azulMarinhoHover p-2 rounded-lg mx-6 mb-4 flex items-center justify-between md:mx-0"
            >
              {item.title}
              <img src={iconPDF} alt="Ícone de PDF" className="h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionContratos;
