import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieListing from "./pages/MovieListing/MovieListing";
import Movie from "./pages/Movie/Movie";
import Error from "./components/Error/Error";
import UpcomingPosters from "./pages/UpcomingPosters/UpcomingPosters";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieListing />} />
        <Route path="/upcoming-posters" element={<UpcomingPosters />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="*" element={<Error />} />
        <Route path="/movies/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
