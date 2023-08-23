/* eslint-disable react/prop-types */
// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  function resetInputs(){
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  }

  const handleSubmit = (e) => {
    // I don't want the page to reload
    e.preventDefault();
    // Do we have access to the information?? YESSSS
    const newMovie = {
      title: title,
      director: director,
      IMDBRating: IMDBRating,
      hasOscars: hasOscars
    }

    console.log(newMovie);
    // I want to change the array of movies that it's in the parent component
    // in the props I have access to the createMovie function
    props.createMovie(newMovie);
    // when we create the new movie we set al the values to the initial ones
    resetInputs();
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <h3>This is the input value {title}</h3>

      <form>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          onChange={(event) => setDirector(event.target.value)}
          value={director}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          onChange={(event) => setIMDBRating(event.target.value)}
          value={IMDBRating}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          onChange={(event) => setHasOscars(event.target.checked)}
          checked={hasOscars}
        />

        <button onClick={(e) => handleSubmit(e)} type="submit">Add a Movie</button>
      </form>
    </div>
  );

}

export default AddMovie;
