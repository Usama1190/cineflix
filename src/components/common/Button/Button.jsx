import { NavLink } from "react-router-dom";
import './Button.module.css'

const Button = ({ btnText, btnLink }) => {
  return (
    <>
      <NavLink to={btnLink}>
        <button>{btnText}</button>
      </NavLink>
    </>
  );
};

export default Button;
