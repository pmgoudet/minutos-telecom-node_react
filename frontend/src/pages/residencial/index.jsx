import Header from "../../components/layout/Header/Index";
import AltHero from "../../components/layout/Hero/AltHero.jsx";
import Footer from "../../components/layout/Footer";
import SectionServicosResidenciais from "../../components/sections/servicos-residenciais/index.jsx";

function Residencial() {
  return (
    <div>
      <Header />
      <AltHero />
      <SectionServicosResidenciais />
      <Footer />
    </div>
  );
}

export default Residencial;
