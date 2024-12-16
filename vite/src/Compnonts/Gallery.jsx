import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />
        <button id="l">◀</button>
        <button id="r">▶</button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2019/11/22/03/58/cat-4644008_1280.jpg";
