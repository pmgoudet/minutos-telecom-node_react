import Plano300M from "../../ui/Servicos/Plano300m.jsx";
import Plano500M from "../../ui/Servicos/Plano500m.jsx";
import RestanteResidenciais from "../../ui/Servicos/RestanteResidenciais.jsx";

function SectionServicosResidenciais() {
  return (
    <section className="px-6 my-10 md:mx-12 md:my-16 lg:mb-20 lg:max-w-[1000px] lg:mx-auto">
      <Plano300M />
      <Plano500M />
      <RestanteResidenciais />
    </section>
  );
}

export default SectionServicosResidenciais;
