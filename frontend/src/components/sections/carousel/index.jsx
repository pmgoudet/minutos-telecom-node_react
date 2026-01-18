import ResponsiveCarousel from "../../ui/Carousel";
import StandardButton from "../../ui/StandardBtn";
import useResponsivity from "../../../hooks/useResponsivity";
import { useNavigate } from "react-router-dom";

function SectionCarousel() {
  const navigate = useNavigate();
  const { isTablet } = useResponsivity();

  return (
    <section className="py-8 lg:flex lg:justify-center lg:gap-40 lg:items-center lg:h-[100vh]">
      <div className="lg:order-1 lg:w-1/3 ">
        <ResponsiveCarousel />
      </div>
      <div className="px-6 pt-2 lg:order-0 lg:w-1/3 lg:p-0">
        <div className="md:flex gap-10 items-center lg:flex-col lg:items-start">
          <h2 className="text-2xl/7 font-semibold text-azulMarinho md:w-1/2 md:text-right md:text-3xl lg:text-left lg:w-full">
            Desempenho de <br />
            <strong className="font-semibold text-azulBg">ponta a ponta</strong>
          </h2>
          <p className="py-4 md:w-1/2 pr-20 lg:w-2/3 lg:p-0">
            Oferecemos serviços de alta capacidade e disponibilidade por meio de
            uma rede robusta e monitoramento 24/7.
          </p>
        </div>
        <div className="text-white flex gap-6 pt-2 md:justify-center md:gap-10 lg:justify-start lg:pt-10">
          <StandardButton onClick={() => navigate("/residencial")}>
            Planos {isTablet ? null : <br />} Residenciais
          </StandardButton>
          <StandardButton onClick={() => navigate("/corporativo")}>
            Planos {isTablet ? null : <br />} Corporativos
          </StandardButton>
        </div>
      </div>
    </section>
  );
}

export default SectionCarousel;
