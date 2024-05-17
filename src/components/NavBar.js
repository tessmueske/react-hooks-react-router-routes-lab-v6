import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="../pages/directors">Directors</NavLink>
    <NavLink to="../pages/actors">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
