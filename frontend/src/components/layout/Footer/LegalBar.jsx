function LegalBar() {
  return (
    <p className="bg-azulBg p-4 text-white text-xs lg:pt-0 lg:pb-8 flex items-center justify-center">
      © Copyright 2024 - Minutos Telecom | Criado por{" "}
      <a
        className="font-semibold underline"
        href="https://pedrogoudet.vercel.app/"
        target="_blank"
      >
        <img
          className="px-2 h-6"
          src="/logo/logo-pedro-branco.svg"
          alt="Pedro Mattiazzo Goudet - Portfolio"
        />
      </a>{" "}
      | Todos os direitos reservados.
    </p>
  );
}

export default LegalBar;
