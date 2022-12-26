import { NavLink } from "react-router-dom";
import estilos from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/">Portifólio</NavLink>
      <NavLink to="/">Contato</NavLink>
    </nav>
  );
};

export default Menu;
