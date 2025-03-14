const Footer = () => {
  return (
    <footer
      className="VAVA d-flex flex-wrap justify-content-between align-items-center py-1 "
      style={{ color: "white" }}
    >
      <header className="d-flex flex-wrap justify-content-center py-1 mb-2">
        <a className="d-flex align-items-center mb-1 mb-md-0 me-md-auto link-body-emphasis text-decoration-none last_1 footer_">
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span
            className="fs-5 last_2"
            style={{
              textAlign: "center",
              marginLeft: "370px",
              marginBottom: "-200px",
              color: "white",
            }}
          >
            © 2025 Adarsha Baskota. All Rights Reserved.
          </span>
        </a>
        <span
          className="fs-4 last_1"
          style={{
            textAlign: "center",
            marginLeft: "-430px",
            marginTop: "120px",
            color: "white",
          }}
        >
          Built with ❤️ by Adarsha Baskota
        </span>
      </header>
    </footer>
  );
};

export default Footer;
