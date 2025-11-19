import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="bg-azulBg">
      <div className="container mx-auto flex-row items-center py-4 px-6 md:p-0 lg:flex lg:w-full">
        {/* Logo */}
        <div className="lg:w-[40%]">
          <a href="/">
            <img
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
