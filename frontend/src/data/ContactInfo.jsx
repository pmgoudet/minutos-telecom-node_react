import telefoneIcon from "../assets/icons/telefone-icon-minutos-telecom.png";
import telefoneIconEscuro from "../assets/icons/telefone-icon-escuro-minutos-telecom.svg";
import whatsAppIcon from "../assets/icons/whatsapp-icon-branco-minutos-telecom.png";
import whatsAppIconEscuro from "../assets/icons/whatsapp-icon-minutos-telecom.png";
import sacIcon from "../assets/icons/sac-icon-minutos-telecom.png";
import sacIconEscuro from "../assets/icons/sac-icon-escuro-minutos-telecom.svg";
import contatoIcon from "../assets/icons/contato-icon-minutos-telecom.png";
import contatoIconEscuro from "../assets/icons/contato-icon-escuro-minutos-telecom.svg";
import suporteIcon from "../assets/icons/suporte-icon-minutos-telecom.png";
import suporteIconEscuro from "../assets/icons/suporte-icon-escuro-minutos-telecom.svg";
import enderecoIcon from "../assets/icons/endereco-icon-minutos-telecom.png";
import enderecoIconEscuro from "../assets/icons/endereco-icon-escuro-minutos-telecom.svg";

export const contactInfos = [
  {
    title: "Telefone",
    icon: telefoneIcon,
    iconEscuro: telefoneIconEscuro,
    contact: "+55 19 3081-0000",
    path: "tel:+551930810000",
  },
  {
    title: "WhatsApp",
    icon: whatsAppIcon,
    iconEscuro: whatsAppIconEscuro,
    contact: "+55 19 3081-0000",
    path: "https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos!",
    target: "target='_blank'",
  },
  {
    title: "SAC",
    icon: sacIcon,
    iconEscuro: sacIconEscuro,
    contact: "0800 602 7300",
    path: "tel:+08006027300",
  },
  {
    title: "",
    icon: contatoIcon,
    iconEscuro: contatoIconEscuro,
    contact: "contato@minutostelecom.com.br",
    path: "mailto:contato@minutostelecom.com.br",
  },
  {
    title: "",
    icon: suporteIcon,
    iconEscuro: suporteIconEscuro,
    contact: "suporte@minutostelecom.com.br",
    path: "mailto:suporte@minutostelecom.com.br",
  },
  {
    icon: enderecoIcon,
    iconEscuro: enderecoIconEscuro,
    contact: "Av. Marechal Rondon, 700 – Sala 310\nCampinas/SP – Brasil",
    path: "https://www.google.com/maps?ll=-22.893487,-47.088336&z=15&t=m&hl=fr&gl=FR&mapclient=embed&q=R.+Mal.+Rondon,+700+-+Jardim+Chapad%C3%A3o+Campinas+-+SP+13070-173+Br%C3%A9sil",
    target: "target='_blank'",
  },
];
