import Plano300M from "../../ui/Servicos/Plano300m.jsx";
import Plano500M from "../../ui/Servicos/Plano500m.jsx";
import RestanteResidenciais from "../../ui/Servicos/RestanteResidenciais.jsx";

function SectionServicosResidenciais() {
  return (
    <section className="p-6 md:m-12 mb-6 lg:mb-10">
      <Plano300M />
      <Plano500M />
      <RestanteResidenciais />
    </section>
  );
}

export default SectionServicosResidenciais;
