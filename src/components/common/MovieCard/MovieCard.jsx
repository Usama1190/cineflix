import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ data }) => {
  const { id, rating, year, image_url, img_alt } = data;
  return (
    <NavLink to={`/movies/${id}`}>
      <div className={styles.mcw}>
        <div className={styles.mci}>
          <img src={image_url} alt={img_alt} />
        </div>
        <p>Realeased: {year}</p>
        <p>Rating : {rating}</p>
      </div>
    </NavLink>
  );
};

export default MovieCard;
