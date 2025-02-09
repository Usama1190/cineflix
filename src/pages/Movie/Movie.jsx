import { useParams } from "react-router";
import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData.js";
import Error from "../../components/Error/Error.jsx";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((item) => String(item.id) === String(id));

  // console.log(movie);

  {
    if(movie == undefined) {
      return (
        <div>
          <Error />
        </div>
      );
    }
    else {
      return (
        <div>
          <Hero data={movie} />
        </div>
      );
    }
  }
};

export default Movie;
