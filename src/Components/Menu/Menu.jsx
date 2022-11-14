import estilos from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Portifólio</a>
      </li>
      <li>
        <a href="#">Contato</a>
      </li>
    </nav>
  );
};

export default Menu;

/* <>
      <div className={estilos.menu}>
        <Link href="#" underline="none">
          {"Home"}
        </Link>
        <Link href="#" underline="hover">
          {"Sobre"}
        </Link>
        <Link href="#" underline="always">
          {"Portifólio"}
        </Link>
        <Link href="#" underline="always">
          {"Contato"}
        </Link>
      </div>
    </> */

/* <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/mpb">MPB</NavLink>

        <NavLink to="/rock">Rock</NavLink>
      </nav> */
