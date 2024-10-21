import "./NavBar.scss";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ itemsInCart }) => {
  return (
    <header className="header">
      <div className="container-l">
        <nav className="nav-bar">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-items">
            <li>
              <Link to={"/"} className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="nav-item">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="nav-cart">
                <i className="bt bi-cart"></i>
                <span className="cart-quantity">{itemsInCart}</span>
              </Link>
            </li>
          </ul>
          <buttn className="menu-bar">
            <i className="bi bi-list"></i>
          </buttn>
        </nav>
      </div>
    </header>
  );
};
NavBar.propTypes = {
  itemsInCart: PropTypes.number,
};

export default NavBar;
