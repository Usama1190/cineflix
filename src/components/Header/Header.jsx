import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className={styles.hw}>
      <div className={styles.hfw}>
        <h1>Cineflex</h1>
        <div className={isOpen ? `${styles.lw} ${styles.dl}` : `${styles.lw} ${styles.hl}`} onClick={clickHandle}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Movies</NavLink>
            </li>
            <li>
              <NavLink to={"/upcoming-posters"}>Upcoming Posters</NavLink>
            </li>
            <li>
              <Button btnText={"Login"} btnLink={"/login"} btnLayout={"sf"} />
            </li>
          </ul>
        </div>
        <div className={styles.mb} onClick={clickHandle}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
