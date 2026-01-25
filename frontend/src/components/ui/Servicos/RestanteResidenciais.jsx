import iconAssine from "../../../assets/icons/assine-icon-minutos-telecom.svg";
import iconCFTV from "../../../assets/icons/cftv-icon-minutos-telecom.svg";
import iconRedeInterna from "../../../assets/icons/rede-interna-minutos-telecom.svg";
import iconCasaInteligente from "../../../assets/icons/casa-inteligente-icon-minutos-telecom.svg";

const data = [
  {
    Type: "cta",
    Title: (
      <h3>
        <a
          href="https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos, estou interessado(a) nos serviços residenciais."
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
        Assine agora e tenha <strong>tudo funcionando</strong> para você e sua
        família!
      </p>
    ),
  },
  {
    Type: "service",
    Title: <h3>CFTV - Circuito fechado de câmeras</h3>,
    Img: iconCFTV,
    Texte: (
      <p>
        Tranquilidade em cada canto da sua casa, tudo{" "}
        <strong>instalado e funcionando</strong>
        para você.
      </p>
    ),
  },
  {
    Type: "service",
    Title: <h3>Instalação e configuração de rede interna</h3>,
    Img: iconRedeInterna,
    Texte: (
      <p>
        Deixe tudo por nossa conta: instalação e configuração da rede{" "}
        <strong>sem complicações</strong>!
      </p>
    ),
  },
  {
    Type: "service",
    Title: <h3>Instalação e configuração de casa inteligente</h3>,
    Img: iconCasaInteligente,
    Texte: (
      <p>
        Transforme seu lar em uma <strong>casa inteligente</strong>, com tudo
        pronto para usar.
      </p>
    ),
  },
];

function RestanteResidenciais() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 lg:mt-10 lg:gap-10 lg:m-auto">
      {data.map((item, i) => (
        <div
          key={i}
          className={`
      mt-6 lg:mt-0 p-5
      ${
        item.Type === "cta"
          ? "bg-azulAgua text-azulMarinho -mx-6 px-10 md:px-6 md:mx-0"
          : i % 2 === 1
            ? "bg-azulMarinho text-white"
            : "bg-azulBg text-white"
      }
    `}
        >
          <div className="pb-4 flex gap-4 justify-between">
            <div className="font-bold text-2xl">{item.Title}</div>
            <img src={item.Img} alt="" />
          </div>

          <div>{item.Texte}</div>
        </div>
      ))}
    </div>
  );
}

export default RestanteResidenciais;
