import whatsappIcon from "../../../assets/icons/whatsapp-icon-minutos-telecom.png";
import wazeIcon from "../../../assets/icons/waze-icon-minutos-telecom.svg";
import googleMapsIcon from "../../../assets/icons/google-maps-icon-minutos-telecom.svg";

const planosTelefoniaMovel = [
  {
    id: 1,
    dados: 1,
    portabilidade: null,
    preco: 27,
  },
  {
    id: 2,
    dados: 3,
    portabilidade: 2,
    preco: 37,
  },
  {
    id: 3,
    dados: 5,
    portabilidade: 3,
    preco: 47,
  },
  {
    id: 4,
    dados: 10,
    portabilidade: 5,
    preco: 57,
  },
  {
    id: 5,
    dados: 15,
    portabilidade: 5,
    preco: 67,
  },
  {
    id: 6,
    dados: 25,
    portabilidade: 5,
    preco: 97,
  },
];

const appsIlimitados = [
  {
    nome: "WhatsApp",
    icone: whatsappIcon,
  },
  {
    nome: "Waze",
    icone: wazeIcon,
  },
  {
    nome: "Google Maps",
    icone: googleMapsIcon,
  },
];

function AppsIlimitados() {
  return (
    <div className="mb-10">
      <h2 className="text-azulMarinho font-bold text-2xl mb-4">
        Apps ilimitados:
      </h2>

      <div className="flex gap-6 flex-wrap">
        {appsIlimitados.map((app) => (
          <div key={app.nome} className="flex items-center gap-2">
            <img
              className="w-8 h-8 text-azulMarinho"
              src={app.icone}
              alt={app.nome}
            />

            <p className="font-semibold text-azulMarinho">{app.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardPlanoMobile({ dados, portabilidade, preco }) {
  return (
    <article className="bg-azulMarinho p-6 flex flex-col justify-between">
      <h3 className="text-azulAgua font-bold text-2xl uppercase">Plano</h3>

      <div className="flex items-baseline mb-4">
        <p className="text-white font-bold text-7xl lg:text-6xl leading-none">
          {dados}
        </p>

        <p className="text-white font-bold text-5xl lg:text-5xl leading-none">
          GB
        </p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <p className="text-azulAgua font-semibold lg:text-sm">
            Portabilidade
          </p>

          <p className="text-azulAgua text-4xl lg:text-2xl font-bold">
            {portabilidade ? `+${portabilidade}GB` : "-"}
          </p>
        </div>

        <div className="flex items-baseline">
          <p className="text-white font-bold lg:text-md">R$</p>

          <p className="text-azulAgua text-6xl lg:text-4xl font-bold leading-none">
            {preco}
            <span className="text-3xl">,90</span>
          </p>

          <p className="text-white">/mês</p>
        </div>
      </div>
    </article>
  );
}

function SectionTelefoniaMovel() {
  return (
    <section className="px-6 my-10 md:mx-12 md:my-16 lg:mb-20 lg:max-w-[1000px] lg:mx-auto">
      <AppsIlimitados />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planosTelefoniaMovel.map((plano) => (
          <CardPlanoMobile key={plano.id} {...plano} />
        ))}
      </div>
    </section>
  );
}

export default SectionTelefoniaMovel;
