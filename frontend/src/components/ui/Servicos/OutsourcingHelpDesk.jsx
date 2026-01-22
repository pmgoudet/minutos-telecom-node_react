import imgMobile from "../../../assets/img/mobile/outsourcing-img-mobile-minutos-telecom.jpg";
import imgTablet from "../../../assets/img/tablet/outsourcing-img-tablet-minutos-telecom.jpg";
import useResponsivity from "../../../hooks/useResponsivity";

function OutsourcingHelpDesk() {
  const { isMobile } = useResponsivity();

  return (
    <div className="my-6 md:flex lg:max-h-[490px] lg:mt-6">
      <img
        src={isMobile ? imgMobile : imgTablet}
        alt="Plano Internet Banda Larga 300 Mega"
        className="md:w-[50%] object-cover"
      />

      {/* text block */}
      <div className="bg-azulMarinho text-white p-4 md:w-[50%] md:p-8">
        <h3 className=" font-bold text-2xl">Outsourcing IT & Help Desk</h3>
        <p className="text-xl pb-4">(Serviço de Terceirização de TI)</p>
        <p className="pb-2">
          Soluções eficazes para uma{" "}
          <strong>gestão de tecnologia sem preocupações</strong>.
        </p>
        <ul className="list-disc list-inside my-3 font-light">
          <li>Manutenção de computadores</li>
          <li>Suporte técnico</li>
          <li>Data center</li>
          <li>Hospedagem e armazenamento</li>
          <li>Redes</li>
          <li>Manutenção de hardware</li>
          <li>Gestão e atualização de sistemas</li>
          <li>E-mail corporativo</li>
          <li>Telefonia</li>
          <li>Manutenção e programação de sistemas</li>
          <li>Segurança da informação</li>
        </ul>
      </div>
    </div>
  );
}

export default OutsourcingHelpDesk;
