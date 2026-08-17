function ErrorMessage({
  message = "Something went wrong. Please try again."
}) {
  return (
    <div className="error-message">

      <span className="error-icon">
        ⚠️
      </span>

      <div>
        <h3>Oops!</h3>
        <p>{message}</p>
      </div>

    </div>
  );
}

export default ErrorMessage;