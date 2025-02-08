import { NavLink } from "react-router-dom";

const Button = ({ btnText, btnLink, btnLayout }) => {
  return (
    <>
      <NavLink to={btnLink}>
        <button className={`${btnLayout}`}>{btnText}</button>
      </NavLink>
    </>
  );
};

export default Button;
