import iconAssine from "../../../assets/icons/assine-icon-minutos-telecom.svg";
import iconVOIP from "../../../assets/icons/voip-icon-minutos-telecom.svg";
import iconLinkDedicado from "../../../assets/icons/link-dedicado-icon-minutos-telecom.svg";
import iconCabeamento from "../../../assets/icons/cabeamento-estruturado-icon-minutos-telecom.svg";
import iconPABX from "../../../assets/icons/pabx-icon-minutos-telecom.svg";
import iconServidoresCloud from "../../../assets/icons/servidores-cloud-icon-minutos-telecom.svg";
import iconCFTV from "../../../assets/icons/cftv-icon-minutos-telecom.svg";
import iconHospedagemEmails from "../../../assets/icons/hospedagem-emails-icon-minutos-telecom.svg";
import iconHospedagemSites from "../../../assets/icons/hospedagem-sites-icon-minutos-telecom.svg";
import iconConsultoria from "../../../assets/icons/consultoria-ti-icon-minutos-telecom.svg";
import useResponsivity from "../../../hooks/useResponsivity";

const data = [
  {
    type: "service",
    title: <h3>VOIP</h3>,
    img: iconVOIP,
    text: (
      <p>
        Chamadas de alta qualidade para qualquer lugar do mundo por um{" "}
        <strong>preço muito mais acessível</strong>.
      </p>
    ),
    list: (
      <ul className="list-disc list-inside mt-2">
        <li>Economia</li>
        <li>Segurança</li>
        <li>Versatilidade</li>
        <li>Mobilidade</li>
      </ul>
    ),
    color: "bg-azulMarinho",
  },
  {
    type: "service",
    title: <h3>Internet com Link Dedicado</h3>,
    img: iconLinkDedicado,
    text: (
      <p>
        Velocidade estável e conexão dedicada para{" "}
        <strong>empresas que exigem o melhor</strong>.
      </p>
    ),
    list: (
      <ul className="list-disc list-inside mt-2">
        <li>Suporte Personalizado 24x7</li>
        <li>Fibra Óptica ou Rádio Enlace</li>
        <li>100% de Upload</li>
        <li>IP Público e Fixo</li>
        <li>Acesso ao Monitoramento 24x7</li>
      </ul>
    ),
    color: "bg-azulBg",
  },
  {
    type: "service",
    title: <h3>Cabeamento Estruturado</h3>,
    img: iconCabeamento,
    text: (
      <p>
        Infraestrutura sólida para uma{" "}
        <strong>rede mais rápida e confiável</strong>.
      </p>
    ),
    color: "bg-azulBg",
  },
  {
    type: "service",
    title: <h3>PABX Virtual</h3>,
    img: iconPABX,
    text: (
      <p>
        Central telefônica na nuvem: <strong>comunicação sem fronteiras</strong>{" "}
        para sua empresa.
      </p>
    ),
    color: "bg-azulMarinho",
  },
  {
    type: "service",
    title: <h3>Servidores em Cloud</h3>,
    img: iconServidoresCloud,
    text: (
      <p>
        <strong>Segurança, alta performance e flexibilidade</strong> para suas
        operações.
      </p>
    ),
    color: "bg-azulMarinho",
  },
  {
    type: "cta",
    title: (
      <h3>
        <a
          href="https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos, estou interessado(a) nos serviços corporativos."
          target="_blank"
          className="underline"
        >
          Assine já!
        </a>
      </h3>
    ),
    img: iconAssine,
    text: (
      <p>
        Precisa de mais <strong>informações</strong>,{" "}
        <strong>tirar dúvidas</strong> ou <strong>contratar</strong> nossos
        serviços?{" "}
        <a
          href="https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos, estou interessado(a) nos serviços corporativos."
          target="_blank"
          className="underline font-bold"
        >
          Clique aqui!
        </a>
      </p>
    ),
  },
  {
    type: "service",
    title: <h3>CFTV</h3>,
    img: iconCFTV,
    text: (
      <p>
        Vigilância eficaz para a <strong>tranquilidade da sua empresa</strong>.
      </p>
    ),
    color: "bg-azulBg",
  },
  {
    type: "service",
    title: <h3>Hospedagem de E-mails</h3>,
    img: iconHospedagemEmails,
    text: (
      <p>
        Hospedagem de e-mails <strong>segura</strong> para uma comunicação
        <strong>profissional</strong>.
      </p>
    ),
    color: "bg-azulMarinho",
  },
  {
    type: "service",
    title: <h3>Hospedagem de Sites</h3>,
    img: iconHospedagemSites,
    text: (
      <p>
        Hospedagem de sites com <strong>suporte</strong> e{" "}
        <strong>desempenho</strong> garantidos.
      </p>
    ),
    color: "bg-azulMarinho",
  },
  {
    type: "service",
    title: <h3>Consultoria de TI</h3>,
    img: iconConsultoria,
    text: (
      <p>
        <strong>Potencialize sua empresa</strong> com consultoria em tecnologia
        da informação.
      </p>
    ),
    color: "bg-azulBg",
  },
];

function RestanteCorporativos() {
  const { isMobile } = useResponsivity();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 lg:mb-10">
      {data.map((item, i) => (
        <div
          key={i}
          className={`mt-6 p-5 md:mt-0
            ${
              item.type === "cta"
                ? `bg-azulAgua text-azulMarinho ${isMobile ? "-mx-6 px-10" : ""}`
                : `${item.color} text-white`
            }`}
        >
          <div className="pb-4 flex gap-4 justify-between">
            <div className="font-bold text-2xl">{item.title}</div>
            <img src={item.img} alt={`${item.title} Icon`} />
          </div>
          <div>{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default RestanteCorporativos;
