import Plano300M from "../../ui/Servicos/Plano300m.jsx";
import Plano500M from "../../ui/Servicos/Plano500m.jsx";
import PlanosOutros from "../../ui/Servicos/PlanosOutros.jsx";
import RestanteResidenciais from "../../ui/Servicos/RestanteResidenciais.jsx";

function SectionServicosResidenciais() {
  return (
    <section className="px-6 my-10 md:mx-12 md:my-16 lg:mb-20 lg:max-w-[1000px] lg:mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-azulMarinho md:text-3xl md:mb-6 lg:text-4xl lg:m-0 ">
        Internet Fibra Óptica
      </h2>
      <Plano500M />
      <Plano300M />
      <PlanosOutros />
      <RestanteResidenciais />
    </section>
  );
}

export default SectionServicosResidenciais;
