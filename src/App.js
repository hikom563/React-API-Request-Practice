import React from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  return (
    <>
      <h1 className="heading" >Search for Free Stock Images</h1>
      <h2 className="heading2" >I am using Unsplash API</h2>
      <div className="App">
        <div className="search-bar-container">
          <div>
            <SearchBar onSubmit={handleSubmit} />
          </div>
          <div>
            <ImageList images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
