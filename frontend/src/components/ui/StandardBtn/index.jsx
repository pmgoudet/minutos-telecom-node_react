function StandardButton({
  children,
  variant = "marinho",
  onClick,
  disabled = false,
}) {
  const variants = {
    marinho: "bg-azulMarinho",
    azulAgua: "bg-azulAgua",
    whatsApp: "bg-whatsApp",
  };

  const base =
    "mt-4 p-3 rounded-md duration-200 hover:bg-azulMarinhoHover lg:px-7 lg:py-5 xl:text-lg ultra:py-8 ultra:px-12 ultra:text-2xl";

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
