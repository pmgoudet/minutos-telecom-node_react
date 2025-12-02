import telefoneIcon from "../assets/icons/telefone-icon-minutos-telecom.png";
import whatsAppIcon from "../assets/icons/whatsapp-icon-branco-minutos-telecom.png";
import sacIcon from "../assets/icons/sac-icon-minutos-telecom.png";
import contatoIcon from "../assets/icons/contato-icon-minutos-telecom.png";
import suporteIcon from "../assets/icons/suporte-icon-minutos-telecom.png";
import enderecoIcon from "../assets/icons/endereco-icon-minutos-telecom.png";

export const contactInfos = [
  {
    title: "Telefone",
    icon: telefoneIcon,
    contact: "+55 19 3081-0000",
    path: "tel:+551930810000",
  },
  {
    title: "WhatsApp",
    icon: whatsAppIcon,
    contact: "+55 19 3081-0000",
    path: "https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos!",
    target: "target='_blank'",
  },
  {
    title: "SAC",
    icon: sacIcon,
    contact: "0800 602 7300",
    path: "tel:+08006027300",
  },
  {
    title: "",
    icon: contatoIcon,
    contact: "contato@minutostelecom.com.br",
    path: "mailto:contato@minutostelecom.com.br",
  },
  {
    title: "",
    icon: suporteIcon,
    contact: "suporte@minutostelecom.com.br",
    path: "mailto:suporte@minutostelecom.com.br",
  },
  {
    icon: enderecoIcon,
    contact: "Av. Marechal Rondon, 700 – Sala 310\nCampinas/SP – Brasil",
    path: "/",
  },
];
