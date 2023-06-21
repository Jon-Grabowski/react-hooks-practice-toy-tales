import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysArray, setToysArray }) {
  

  useEffect(()=>{
    fetch(`http://localhost:4000/toys`)
    .then(res => res.json())
    .then(toysArray => setToysArray(toysArray))
  }, [])

  const allToyCards = toysArray.map(toy => {
    return (
      <ToyCard 
        key={toy.id}
        name={toy.name} 
        image={toy.image}
        likes={toy.likes}
        id={toy.id}  
      />
    )
  })

  return (
    <div id="toy-collection">{allToyCards}</div>
  );
}

export default ToyContainer;
