import Button from "../../components/common/Button/Button"
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies"

const Home = () => {
  return (
    <div className="">
      <div>
      Home
      <TrendingMovies />
      <Button btnText={'View Movies'} btnLink={'/movies'} />
      </div>
    </div>
  )
}

export default Home
