import { useParams } from "react-router"

const Movie = () => {
    const { id } = useParams();
  return (
    <div>
      Movie { id }
    </div>
  )
}

export default Movie
