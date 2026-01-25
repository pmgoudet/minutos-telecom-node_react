import Header from "../../components/layout/Header/Index";
import Hero from "../../components/layout/Hero";
import Footer from "../../components/layout/Footer";
import SectionCarousel from "../../components/sections/carousel";
import SectionInstitucional from "../../components/sections/institucional";
import SectionAreaVendas from "../../components/sections/canal-de-vendas";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionCarousel />
      <SectionInstitucional />
      <SectionAreaVendas />
      <Footer />
    </div>
  );
}

export default Home;
