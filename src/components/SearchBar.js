import React from "react";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Type to search"
            value={term}
            onChange={handleChange}
          />
        </form>
      </div>
      <button class="button-18" onClick={handleFormSubmit}>
        Search
      </button>
    </>
  );
};

export default SearchBar;
