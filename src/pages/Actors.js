import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ErrorPage from "./ErrorPage";

function Actors() {

const [actors, setActors] = useState([])

useEffect(() => {
  fetch(`http://localhost:4000/actors`)
  .then(r => r.json())
  .then(data => setActors(data))
}, [])

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, id) => (
                <li key={id}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
