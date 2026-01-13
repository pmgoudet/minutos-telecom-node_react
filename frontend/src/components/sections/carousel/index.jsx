import ResponsiveCarousel from "../../ui/Carousel";
import StandardButton from "../../ui/StandardBtn";

function SectionCarousel() {
  return (
    <section className="py-8">
      <ResponsiveCarousel />
      <div className="px-6 pt-2">
        <h2 className="text-2xl/7 font-semibold text-azulMarinho">
          Desempenho de <br />
          <strong className="font-semibold text-azulBg">ponta a ponta</strong>
        </h2>
        <p className="py-4">
          Oferecemos serviços de alta capacidade e disponibilidade por meio de
          uma rede robusta e monitoramento 24/7.
        </p>
        <div className="text-white flex gap-6 pt-2">
          <StandardButton>
            Planos <br /> Residenciais
          </StandardButton>
          <StandardButton>
            Planos <br /> Corporativos
          </StandardButton>
        </div>
      </div>
    </section>
  );
}

export default SectionCarousel;
