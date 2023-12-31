import stylesError from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <div className={stylesError.errorMessage}>
      <h4>Oops! There was a problem loading the movies.</h4>
      <p>
        Please try refreshing the page or come back later. <br />
        If you are currently in Russia, please note that the service is only
        accessible with a <strong>VPN</strong>.
      </p>

      <button
        className={stylesError.buttonError}
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
      <button
        className={stylesError.buttonError}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorMessage;
