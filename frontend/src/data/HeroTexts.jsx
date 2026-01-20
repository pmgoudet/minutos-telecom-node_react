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
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 lg:w-full lg:pr-10">
        Conexão rápida para toda a família.{" "}
        <strong className="text-azulAgua font-semibold">Navegue</strong>,{" "}
        <strong className="text-azulAgua font-semibold">assista</strong> e{" "}
        <strong className="text-azulAgua font-semibold">jogue</strong> sem
        interrupções.
      </p>
    ),
    //! Not the best way to do it, for sure.
    distancePixelsTablet: "md:ml-[-330px]",
    distancePixelsDesk: "lg:ml-[-385px]",
    distancePixelsUltra: "ultra:ml-[-500px]",
  },
  {
    path: "/corporativo",
    title: "Serviços Corporativos",
    icon: corporativosIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 lg:w-full lg:pr-10">
        Tecnologia que se adapta ao seu negócio. Benefícios que atendem{" "}
        <strong className="text-azulAgua font-semibold">
          empresas de todos os tamanhos
        </strong>
        .
      </p>
    ),
    distancePixelsTablet: "md:ml-[-333px]",
    distancePixelsDesk: "md:ml-[-390px]",
    distancePixelsUltra: "ultra:ml-[-510px]",
  },
  {
    path: "/contato",
    title: "Contato",
    icon: contatoIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 lg:w-full lg:pr-10">
        Precisa de mais{" "}
        <strong className="text-azulAgua font-semibold">informações</strong>,{" "}
        <strong className="text-azulAgua font-semibold">tirar dúvidas</strong> e{" "}
        <strong className="text-azulAgua font-semibold">contratar </strong>{" "}
        nossos serviços?{" "}
      </p>
    ),
    distancePixelsTablet: "md:ml-[-150px]",
    distancePixelsDesk: "md:ml-[-170px]",
    distancePixelsUltra: "ultra:ml-[-220px]",
  },
  {
    path: "/contratos",
    title: "Contratos",
    icon: contratosIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 lg:w-full lg:pr-10">
        <strong className="text-azulAgua font-semibold">Transparência </strong>{" "}
        e <strong className="text-azulAgua font-semibold">clareza </strong>{" "}
        sobre nossos compromissos. Confira nossos modelos de contrato para cada
        serviço oferecido.
      </p>
    ),
    distancePixelsTablet: "md:ml-[-170px]",
    distancePixelsDesk: "md:ml-[-200px]",
    distancePixelsUltra: "ultra:ml-[-260px]",
  },
  {
    path: "/softphone",
    title: "Download Softphone",
    icon: softPhoneIcon,
    content: (
      <p className="font-light mb-2 md:text-xl xl:text-lg xl:leading-8 xl:mb-6 ultra:text-2xl ultra:leading-10 md:w-2/3 lg:w-full lg:pr-10">
        Ideal para clientes corporativos, condomínios ou residenciais.
        Transforme seu computador ou smartphone em um{" "}
        <strong className="text-azulAgua font-semibold">Telefone IP </strong> ,{" "}
        <strong className="text-azulAgua font-semibold">Ramal </strong> ou{" "}
        <strong className="text-azulAgua font-semibold">Interfone </strong>.
      </p>
    ),
    distancePixelsTablet: "md:ml-[-322px]",
    distancePixelsDesk: "md:ml-[-375px]",
    distancePixelsUltra: "ultra:ml-[-490px]",
  },
];
