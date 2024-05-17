import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ErrorPage from "./ErrorPage";

function Directors() {

const [directors, setDirectors] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/directors")
  .then(r => r.json())
  .then(data => setDirectors(data))
})

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, id) => (
                <li key={id}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;