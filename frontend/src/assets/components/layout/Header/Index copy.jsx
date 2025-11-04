import NavBar from "../NavBar";

export default function Header() {
  return (
    <header className="bg-azulBg ">
      <img
        className="m-auto pt-12 pb-8"
        src="/logo/logotipo-fundo-escuro-minutos-telecom.svg"
        alt="Logo Minutos Telecom"
      />
      <NavBar />
    </header>
  );
}
