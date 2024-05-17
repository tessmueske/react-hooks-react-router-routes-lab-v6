import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function Movie() {

const [movie, setMovie] = useState({})
const params = useParams();
const movieId = params.id;

useEffect(() =>{
      fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
    }, [movieId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres && movie.genres.map((genre, id) => (
            <span key={id}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;

// This component should render on the /movie route. You will need to include a URL parameter of id on that route.

// The component will display information about one specific movie. It should display the movie's title in an <h1> tag, the movie's time in a <p> tag, and each of the movie's genres within its own <span> tag.

// You'll need to use the useParams hook to get URL parameter data about which movie you want to render, then use that data to fetch and render the appropriate movie.