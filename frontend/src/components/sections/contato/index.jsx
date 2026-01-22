import { contactInfos } from "../../../data/ContactInfo";

function SectionContato() {
  return (
    <div className="p-6 mb-10 text-azulMarinho md:p-20 lg:max-w-[1000px] m-auto">
      <h4 className="font-bold text-xl mb-6 ">Fale Conosco!</h4>
      <div className="md:flex md:gap-20 justify-between">
        {/* Contatos */}
        <ul className="mb-6">
          {contactInfos.map((info, index) => (
            <li className="flex items-center gap-2 mb-2" key={index}>
              <img
                className="size-6"
                src={info.iconEscuro}
                alt="ícone de contatos"
              />
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
          className="w-full h-48 md:size-[30vw] lg:w-[30vw] lg:h-56 ultra:w-7xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.526133245993!2d-47.087102!3d-22.893957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c62f6e44687f%3A0x19f951138649d78b!2sR.%20Mal.%20Rondon%2C%20700%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-173%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sfr!4v1764699490401!5m2!1sfr!2sfr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default SectionContato;
