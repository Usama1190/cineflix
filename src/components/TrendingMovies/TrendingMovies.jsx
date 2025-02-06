import MovieCard from "../common/MovieCard/MovieCard";
import movies from "../../utils/constant/movieData.js";

const TrendingMovies = () => {
  return (
    <div>
      {movies.map((item, index) => {
        if (item.year === 2024) {
          return (
            <div key={index}>
              <MovieCard data={item} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default TrendingMovies;
