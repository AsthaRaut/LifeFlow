function Button({ children, onClick, type = "button", variant = "primary" }) {
  return (
    <button
      type={type}
      className={`custom-btn ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;