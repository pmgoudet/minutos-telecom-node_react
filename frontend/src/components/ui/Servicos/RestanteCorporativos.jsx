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

//! trocar tudo por tag HTML
const data = [
  {
    Type: "service",
    Title: <h3>VOIP</h3>,
    Img: iconVOIP,
    Texte: (
      <p>
        Chamadas de alta qualidade para qualquer lugar do mundo por um preço
        muito mais acessível.
      </p>
    ),
    List: (
      <ul className="list-disc list-inside mt-2">
        <li>Economia</li>
        <li>Segurança</li>
        <li>Versatilidade</li>
        <li>Mobilidade</li>
      </ul>
    ),
  },
  {
    Type: "service",
    Title: <h3>Internet com Link Dedicado</h3>,
    Img: iconLinkDedicado,
    Texte: (
      <p>
        Velocidade estável e conexão dedicada para empresas que exigem o melhor.
      </p>
    ),
    List: (
      <ul className="list-disc list-inside mt-2">
        <li>Suporte Personalizado 24x7</li>
        <li>Fibra Óptica ou Rádio Enlace</li>
        <li>100% de Upload</li>
        <li>IP Público e Fixo</li>
        <li>Acesso ao Monitoramento 24x7</li>
      </ul>
    ),
  },
  {
    Type: "service",
    Title: <h3>Cabeamento Estruturado</h3>,
    Img: iconCabeamento,
    Texte: <p>Infraestrutura sólida para uma rede mais rápida e confiável.</p>,
  },
  {
    Type: "service",
    Title: <h3>PABX Virtual</h3>,
    Img: iconPABX,
    Texte: (
      <p>
        Central telefônica na nuvem: comunicação sem fronteiras para sua
        empresa.
      </p>
    ),
  },
  {
    Type: "service",
    Title: <h3>Servidores em Cloud</h3>,
    Img: iconServidoresCloud,
    Texte: (
      <p>Segurança, alta performance e flexibilidade para suas operações.</p>
    ),
  },
  {
    Type: "cta",
    Title: (
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
    Img: iconAssine,
    Texte: (
      <p>
        Precisa de mais informações, tirar dúvidas ou contratar nossos serviços?
        Clique aqui!
      </p>
    ),
  },
  {
    Type: "service",
    Title: <h3>CFTV</h3>,
    Img: iconCFTV,
    Texte: <p>Vigilância eficaz para a tranquilidade da sua empresa.</p>,
  },
  {
    Type: "service",
    Title: <h3>Hospedagem de E-mails</h3>,
    Img: iconHospedagemEmails,
    Texte: (
      <p>Hospedagem de e-mails segura para uma comunicação profissional.</p>
    ),
  },
  {
    Type: "service",
    Title: <h3>Hospedagem de Sites</h3>,
    Img: iconHospedagemSites,
    Texte: <p>Hospedagem de sites com suporte e desempenho garantidos.</p>,
  },
  {
    Type: "service",
    Title: <h3>Consultoria de TI</h3>,
    Img: iconConsultoria,
    Texte: (
      <p>
        Potencialize sua empresa com consultoria em tecnologia da informação.
      </p>
    ),
  },
];

function RestanteCorporativos() {
  return (
    <>
      {data.map((item, i) => (
        <div
          key={i}
          className={`  ${item.Type === "cta" ? "bg-azulAgua -mx-6 px-10 text-azulMarinho" : i % 2 === 1 ? "bg-azulMarinho text-white" : "bg-azulBg text-white"} mt-6 p-5`}
        >
          <div className="pb-4 flex gap-4 justify-between">
            <div className="font-bold text-2xl">{item.Title}</div>
            <img src={item.Img} alt={`${item.Title} Icon`} />
          </div>
          <div>{item.Texte}</div>
        </div>
      ))}
    </>
  );
}

export default RestanteCorporativos;
