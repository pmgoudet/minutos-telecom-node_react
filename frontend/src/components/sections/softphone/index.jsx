import iconWindows from "../../../assets/icons/windows-minutos-telecom.png";
import iconAndroid from "../../../assets/icons/android-minutos-telecom.png";
import StandardButton from "../../ui/StandardBtn";

function SectionSoftPhone() {
  return (
    <section className="px-6 py-10 mb-10 md:max-w-[400px] mx-auto md:pt-16">
      <p className="pb-4">
        Clique no botão abaixo e baixe o software de instalação do Softphone.
      </p>
      <p className="pb-6">
        A configuração é realizada pela nossa equipe, basta{" "}
        <a
          href="https://api.whatsapp.com/send?phone=551930810000&text=Ol%C3%A1,%20Minutos! Gostaria de configurar meu SoftPhone."
          target="_blank"
          className="text-whatsapp font-semibold"
        >
          entrar em contato com o suporte
        </a>
        .
      </p>
      <div className="flex flex-col gap-4">
        <StandardButton>
          <a
            href="/downloads/softphone-windows-minutos-telecom.exe"
            className="flex items-center justify-between"
          >
            <p className="text-left">Baixar o SoftPhone para Windows</p>
            <img src={iconWindows} alt="Ícone do Windows" className="h-8" />
          </a>
        </StandardButton>
        <StandardButton>
          <a
            href="/downloads/softphone-android-minutos-telecom.rar"
            className="flex items-center justify-between"
          >
            <p className="text-left">Baixar o SoftPhone para Android</p>
            <img src={iconAndroid} alt="Ícone do Android" className="h-8" />
          </a>
        </StandardButton>
      </div>
    </section>
  );
}

export default SectionSoftPhone;
