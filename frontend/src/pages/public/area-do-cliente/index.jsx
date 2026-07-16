import Header from "../../../components/layout/Header/Index";
import LoginHero from "../../../components/layout/Hero/LoginHero";
import Footer from "../../../components/layout/Footer";

function AreaDoCliente() {
  return (
    <div>
      <Header />
      <LoginHero />

      <div className="flex justify-center items-center py-16 px-6">
        <form className="w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-azulMarinho text-xl font-semibold text-center mb-2">
            Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="border border-gray-300 rounded px-4 py-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="border border-gray-300 rounded px-4 py-2"
          />

          <button
            type="submit"
            className="bg-azulBg text-white rounded px-4 py-2 mt-2"
          >
            Entrar
          </button>
          <a className="pt-4 text-sm text-azulMarinho hover:underline" href="#">
            Esqueci minha senha - A FAZER
          </a>
          <a className="text-sm text-azulMarinho hover:underline" href="#">
            Ainda não tenho meu login - A FAZER
          </a>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default AreaDoCliente;
