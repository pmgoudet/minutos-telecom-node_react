import residenciaisIcon from "../assets/icons/residencial-icon-minutos-telecom.svg";
import corporativosIcon from "../assets/icons/corporativo-icon-minutos-telecom.svg";
import contatoIcon from "../assets/icons/contato-pagina-icon-minutos-telecom.svg";
import contratosIcon from "../assets/icons/contratos-icon-minutos-telecom.svg";
import softPhoneIcon from "../assets/icons/download-softphone-icon-minutos-telecom.svg";

export const HeroTexts = [
  {
    path: "/residencial",
    title: "Serviços Residenciais",
    icon: residenciaisIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 ">
        Conexão rápida para toda a família.{" "}
        <strong className="text-azulAgua font-semibold">Navegue</strong>,{" "}
        <strong className="text-azulAgua font-semibold">assista</strong> e{" "}
        <strong className="text-azulAgua font-semibold">jogue</strong> sem
        interrupções.
      </p>
    ),
    distancePixels: "md:ml-[-330px]",
  },
  {
    path: "/corporativo",
    title: "Serviços Corporativos",
    icon: corporativosIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 ">
        Tecnologia que se adapta ao seu negócio. Benefícios que atendem{" "}
        <strong className="text-azulAgua font-semibold">
          empresas de todos os tamanhos
        </strong>
        .
      </p>
    ),
    distancePixels: "md:ml-[-333px]",
  },
  {
    path: "/contato",
    title: "Contato",
    icon: contatoIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 ">
        Precisa de mais{" "}
        <strong className="text-azulAgua font-semibold">informações</strong>,{" "}
        <strong className="text-azulAgua font-semibold">tirar dúvidas</strong> e{" "}
        <strong className="text-azulAgua font-semibold">contratar </strong>{" "}
        nossos serviços?{" "}
      </p>
    ),
    distancePixels: "md:ml-[-150px]",
  },
  {
    path: "/contratos",
    title: "Contratos",
    icon: contratosIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 ">
        <strong className="text-azulAgua font-semibold">Transparência </strong>{" "}
        e <strong className="text-azulAgua font-semibold">clareza </strong>{" "}
        sobre nossos compromissos. Confira nossos modelos de contrato para cada
        serviço oferecido.
      </p>
    ),
    distancePixels: "md:ml-[-170px]",
  },
  {
    path: "/softphone",
    title: "Download Softphone",
    icon: softPhoneIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 ">
        Ideal para clientes corporativos, condomínios ou residenciais.
        Transforme seu computador ou smartphone em um{" "}
        <strong className="text-azulAgua font-semibold">Telefone IP </strong> ,{" "}
        <strong className="text-azulAgua font-semibold">Ramal </strong> ou{" "}
        <strong className="text-azulAgua font-semibold">Interfone </strong>.
      </p>
    ),
    distancePixels: "md:ml-[-322px]",
  },
];
