function StandardButton({
  children,
  variant = "marinho",
  onClick,
  disabled = false,
}) {
  const variants = {
    marinho: "bg-azulMarinho hover:bg-azulMarinhoHover text-white",
    azulAgua:
      "bg-azulAgua text-azulMarinho font-bold text-xl lg:hover:bg-azulClaroBg duration-200",
    whatsApp:
      "bg-whatsapp font-bold hover:bg-whatsappHover text-[4vw] md:text-lg ultra:py-3 ultra:px-6 ultra:text-xl",
  };

  const base =
    "p-3 rounded-md duration-200 lg:px-7 lg:py-5 xl:text-lg ultra:py-8 ultra:px-12 ultra:text-2xl";

  return (
    <button
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default StandardButton;
