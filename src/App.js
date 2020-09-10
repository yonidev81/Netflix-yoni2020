import React from "react";
import "./App.css";
import Netflix from "../src/netflix-logo.png"

// Import du Json
import moviesList from "./movies.json";

// import du composant Section
import Section from "./Section";

function App() {
  return (
    <div className="App">
      {/* Logo */}
<img className = "logo" alt ="Netflix" src= {Netflix} />

      {/* Parcourir le tableau moviesList pour retourner à chaque tour <Section/> */}
      {moviesList.map((item, index) => {
        console.log(item);
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
}

export default App;
