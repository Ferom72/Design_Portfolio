import { useNavigate } from "react-router-dom";
import "../pages/MyStyles/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid color">
        <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
          Design Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">{/* Links go here */}</div>
        </div>
        <div className="navbar-nav ms-auto">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={() => navigate("/")}
          >
            Work
          </a>
          <a
            className="nav-link active"
            href="#"
            onClick={() => navigate("/contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
