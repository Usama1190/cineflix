import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  return (
    <div className="">
      <div>
        {movies.map((item, index) => {
            if(index == 2) {
                return (
                  <div key={index}>
                    <MovieListing />
                  </div>
                )
            }
            else if(item.status == 'Upcoming') {
              return (
                <div key={index}>
                  <Hero data={item} />
                </div>
              )
            }
          }
        )}
      </div>
    </div>
  );
};

export default Home;
