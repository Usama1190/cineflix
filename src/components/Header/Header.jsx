import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.hw}>
      <div className={styles.hfw}>
        <p>Cineflex</p>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Trends</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Incoming Poster</NavLink>
          </li>
          <li>
            <Button btnText={"Login"} btnLink={"/"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
