import React from "react";


const Section = (props) => {
  // destructuring
  const { category, images } = props;

  return (
    <div className = "section">
      <span className = "category"> {category}</span>

      {/* Parcourir le tableau images pour afficher toutes images */}
<div className = "movieslist"> 
      {images.map((url, index) => {
        return <img className= "film" key = {index} alt = {category} src = {url} />
      })}
      </div>
    </div>
  );

  

};

export default Section;

