import MovieCard from "../../components/common/MovieCard/MovieCard";
import movies from "../../utils/constant/movieData";

const MovieListing = () => {
  return (
    <div>
      MovieListing
      {movies.map((item, index) => {
        return <MovieCard key={index} data={item} />;
      })}
    </div>
  );
};

export default MovieListing;
