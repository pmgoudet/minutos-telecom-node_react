import useResponsivity from "../../../hooks/useResponsivity";

function LegalBar() {
  const { isMobile } = useResponsivity();

  return (
    <div>
      {!isMobile ? (
        <p className="bg-azulBg p-4 text-white text-xs lg:pt-0 lg:pb-8 md:flex items-center justify-center">
          © Copyright 2024 - Minutos Telecom | Website criado por{" "}
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
      ) : (
        <div className="bg-azulBg p-4 text-white text-xs text-center">
          <p>
            © Copyright 2024 - Minutos Telecom <br /> Todos os direitos
            reservados.
          </p>
          <p className="flex justify-center items-center py-2 gap-2">
            Website criado por{" "}
            <a
              className="font-semibold underline"
              href="https://pedrogoudet.vercel.app/"
              target="_blank"
            >
              <img
                className="h-6"
                src="/logo/logo-pedro-branco.svg"
                alt="Pedro Mattiazzo Goudet - Portfolio"
              />
            </a>{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default LegalBar;
