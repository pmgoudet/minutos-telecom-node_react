import RestanteCorporativos from "../../ui/Servicos/RestanteCorporativos";
import InternetBandaLargaBusiness from "../../ui/Servicos/InternetBandaLargaBusiness";
import OutsourcingHelpDesk from "../../ui/Servicos/OutsourcingHelpDesk";

function SectionServicosCorporativos() {
  return (
    <section className="p-6 mb-10">
      <InternetBandaLargaBusiness />
      <RestanteCorporativos />
      <OutsourcingHelpDesk />
    </section>
  );
}

export default SectionServicosCorporativos;
