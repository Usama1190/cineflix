import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData";

const Home = () => {
  return (
    <div className="">
      <div>
        {movies.map((item, index) => {
            return (
              <div key={index}>
                <Hero data={item} specific_status={'Upcoming'} />
              </div>
            )
          }
        )}
      </div>
    </div>
  );
};

export default Home;
