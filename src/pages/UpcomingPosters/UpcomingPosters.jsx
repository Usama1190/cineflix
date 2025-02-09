import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData";

const Home = () => {
  return (
    <div>
      <div>
        {movies.map((item, index) => {
             if(item.year == 2025) {
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
