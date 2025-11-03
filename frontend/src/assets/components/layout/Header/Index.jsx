import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="bg-azulBg">
      <div className="container mx-auto flex-row items-center py-4 px-6">
        {/* Logo */}
        <div className="">
          <a href="/">
            <img
              // src="../../../public/logo/logotipo-fundo-escuro-minutos-telecom.svg"
              src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
              alt="Logotipo Minutos Telecom"
              className="m-auto pt-12 pb-8"
            />
          </a>
        </div>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
