import { NavLink } from "react-router-dom";

const Button = ({ btnText, btnLink, btnLayout }) => {
  return (
    <>
      <a href={btnLink} target="_blank">
        <button className={`${btnLayout}`}>{btnText}</button>
      </a>
    </>
  );
};

export default Button;
