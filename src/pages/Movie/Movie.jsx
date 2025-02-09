import { useParams } from "react-router";
import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData.js";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((item) => String(item.id) === String(id));

  console.log(movie);

  return (
    <div>
      <Hero data={movie} />
    </div>
  );
};

export default Movie;
