import React from "react";
import { sculptureList } from "../data/sculptureList";
import { useState } from "react";

const Gallery = () => {
  
  const [index, setIndex] = useState(0)

  function handleClick() {
    setIndex(index => index + 1)
    console.log("handle index : " + index);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}> Next </button>
      <h2>{sculpture.name}</h2>
      <h2>
        ({index + 1} out of {sculptureList.length})
      </h2>
      <img src={sculpture.imageUrl} alt={sculpture.alt}></img>
      <div>
        <p>{sculpture.description}</p>
      </div>
    </>
  );
};

export default Gallery