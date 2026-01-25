import RestanteCorporativos from "../../ui/Servicos/RestanteCorporativos";
import InternetBandaLargaBusiness from "../../ui/Servicos/InternetBandaLargaBusiness";
import OutsourcingHelpDesk from "../../ui/Servicos/OutsourcingHelpDesk";

function SectionServicosCorporativos() {
  return (
    <section className="px-6 my-10 md:mx-12 md:my-16 lg:max-w-[1000px] lg:mx-auto ">
      <InternetBandaLargaBusiness />
      <RestanteCorporativos />
      <OutsourcingHelpDesk />
    </section>
  );
}

export default SectionServicosCorporativos;
