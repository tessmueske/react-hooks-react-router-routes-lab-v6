import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

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

// This component should render on the /directors route. It should display the text Directors Page in an <h1>, and render a new <article> element for each director in our array of directors. The <article> should contain the director's name in an <h2> and a <ul> with a list of their movies.
