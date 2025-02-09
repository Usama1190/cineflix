import Hero from "../../components/Hero/Hero";
import movies from "../../utils/constant/movieData";

const Home = () => {
  return (
    <div className="">
      <div>
        {movies.map((item, index) => {
            if(item.status == 'Upcoming') {
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
