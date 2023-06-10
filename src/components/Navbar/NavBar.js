import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img width= "200" src="./toyota-logo.png" alt="logoEcommerce"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active fs-3" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-3" to="./Modelos">
                Modelos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-3" to="./Contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
