import { useState } from "react";
import "../style/Navbar.css";
import Logo from "../Asset/logo.png";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={Logo} alt="logo" className="img-logo" style={{ width: "100px" }} />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="/personaltraining">Personal Training</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
