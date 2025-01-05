import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartItem } = useContext(StoreContext);
  const [menu, setMenu] = useState();
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu == "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="footer"
          onClick={() => setMenu("Contact-us")}
          className={menu == "Contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="" alt="" />
        <div className="navbar-search-icon">
          <NavLink to="/cart">
            {/* {" "} */}
            <img src={assets.basket_icon} alt="" />
          </NavLink>
          <div className={getTotalCartItem() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
