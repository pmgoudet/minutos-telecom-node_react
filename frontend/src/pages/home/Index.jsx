import Header from "../../components/layout/Header/Index";
import Hero from "../../components/layout/Hero";
import Footer from "../../components/layout/Footer";
import SectionCarousel from "../../components/sections/carousel";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionCarousel />
      <Footer />
    </div>
  );
}

export default Home;
