import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img width= "150" src="https://seeklogo.com/images/T/toyota-logo-08A29AEE08-seeklogo.com.png" alt="logoEcommerce"></img>
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
              <NavLink className="nav-link active fs-3" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active fs-3" to={'/category/automoviles'}>
                Autos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active fs-3" to={'/category/camionetas'}>
                Camionetas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active fs-3" to={'./Contacto'}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
