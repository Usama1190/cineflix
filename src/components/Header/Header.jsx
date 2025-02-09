import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.hw}>
      <div className={styles.hfw}>
        <h1>Cineflex</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/movies"}>Movies</NavLink>
          </li>
          <li>
            <Button btnText={"Login"} btnLink={"/login"} btnLayout={'sf'} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
