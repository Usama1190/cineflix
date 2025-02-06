import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ data }) => {
  const { id, title, producer, director, year, description } = data;
  return (
    <NavLink to={`/movies/${id}`}>
      <div className={styles.mcw}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Realeased: {year}</p>
        <p>Producer: {producer}</p>
        <p>Director: {director}</p>
      </div>
    </NavLink>
  );
};

export default MovieCard;
