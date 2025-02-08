import MovieCard from "../../components/common/MovieCard/MovieCard";
import movies from "../../utils/constant/movieData";
import styles from './MovieListing.module.css'

const MovieListing = () => {
  return (
    <div className={styles.ml}>
      <div className={styles.mli}>
        {movies.map((item, index) => {
          return <MovieCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default MovieListing;
