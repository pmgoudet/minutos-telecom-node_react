import Header from "../../../components/layout/Header/Index";
import LoginHero from "../../../components/layout/Hero/LoginHero";
import Footer from "../../../components/layout/Footer";

function AreaDoCliente() {
  return (
    <div>
      <Header />
      <LoginHero />

      <div className="flex justify-center items-center py-16 px-6">
        <h1>ADMIN CONECTADO</h1>
      </div>

      <Footer />
    </div>
  );
}

export default AreaDoCliente;
