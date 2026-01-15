import Header from "../../components/layout/Header/Index";
import Hero from "../../components/layout/Hero";
import Footer from "../../components/layout/Footer";
import SectionCarousel from "../../components/sections/carousel";
import SectionInstitucional from "../../components/sections/institucional";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionCarousel />
      <SectionInstitucional />
      <Footer />
    </div>
  );
}

export default Home;
