import { contactInfos } from "../../../data/ContactInfo";
import whatsAppIcon from "../../../assets/icons/whatsapp-icon-minutos-telecom.png";
import StandardButton from "../../ui/StandardBtn";

function MainRow() {
  return (
    <div className="bg-azulBg p-6 text-white md:px-10 lg:px-32 lg:py-10 ultra:px-64 ultra:py-16">
      <h4 className="font-bold text-xl mb-6">Fale Conosco</h4>
      <div className="md:flex md:gap-4 md:justify-between">
        {/* Contatos */}
        <ul className="mb-6">
          {contactInfos.map((info, index) => (
            <li className="flex items-center gap-2 mb-2" key={index}>
              <img className="size-4" src={info.icon} alt="ícone de contatos" />
              <p className="whitespace-pre-line">
                {info.title && `${info.title}:`}{" "}
                <a href={info.path} target={info.target && `${info.target}`}>
                  {info.contact}
                </a>
              </p>
            </li>
          ))}
        </ul>

        {/* Google Maps */}
        <iframe
          className="w-full h-48 md:size-44 lg:w-[30vw] lg:h-56 ultra:w-7xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.526133245993!2d-47.087102!3d-22.893957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c62f6e44687f%3A0x19f951138649d78b!2sR.%20Mal.%20Rondon%2C%20700%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-173%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sfr!4v1764699490401!5m2!1sfr!2sfr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Suporte Técnico */}
        <div className="flex items-center justify-between md:block">
          <div className="my-6 md:my-0">
            <div className="flex items-baseline gap-2">
              <h4 className="font-bold text-[5.4vw] md:text-xl">
                Precisando de{" "}
              </h4>
              <img
                src={whatsAppIcon}
                alt="WhatsApp Icon"
                className="size-[6vw] md:size-6"
              />
            </div>
            <h4 className="font-bold text-[5.4vw] md:text-xl">
              Suporte Técnico?
            </h4>
            <p className="hidden md:block md:my-2 md:w-44 lg:w-56 lg:my-4">
              Nosso suporte é dado via WhatsApp com maior agilidade e sem robôs.
            </p>
          </div>
          <StandardButton variant="whatsApp">(19) 3081-0000</StandardButton>
        </div>
      </div>
    </div>
  );
}

export default MainRow;
