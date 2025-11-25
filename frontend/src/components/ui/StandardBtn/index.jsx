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

  const base = "my-4 p-3 rounded-md duration-200 hover:bg-azulMarinhoHover";

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
