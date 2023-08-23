/* eslint-disable react/prop-types */
import { useState } from "react";

function FilterMovies(props) {
    const [firstLetter, setFirstLetter] = useState("All");

    function handleSelect(e){
        // firstLetter is not changed until the component is re-rendered
        setFirstLetter(e.target.value)

        console.log("selected", e.target.value);
        // firstLetter is not modified yet
        props.filterMovieList(e.target.value);
    }

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select value={firstLetter} onChange={(e)=> handleSelect(e)}>
                <option value="All">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    );
}

export default FilterMovies;