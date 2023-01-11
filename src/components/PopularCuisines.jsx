import React from "react";

export default function PopularCuisines() {
  return (
    <div className="wrapper__popularcuisines">
      <h2>Popular Cuisines</h2>
      <div className="wrapper__popularcuisines__cards">
        <div className="card__cuisine card__italian">
          <p>Italian</p>
        </div>
        <div className="card__cuisine card__pizza">
          <p>Pizza</p>
        </div>
        <div className="card__cuisine card__chinese">
          <p>Chinese</p>
        </div>
        <div className="card__cuisine card__japanese">
          <p>Japanese</p>
        </div>
        <div className="card__cuisine card__sushi">
          <p>Sushi</p>
        </div>
        <div className="card__cuisine card__thai">
          <p>Thai</p>
        </div>
        <div className="card__cuisine card__vietnamese">
          <p>Vietnamese</p>
        </div>
        <div className="card__cuisine card__burgers">
          <p>Burgers</p>
        </div>
        <div className="card__cuisine card__greek">
          <p>Greek</p>
        </div>
        <div className="card__cuisine card__indian">
          <p>Indian</p>
        </div>
        <div className="card__cuisine card__convenience">
          <p>Convenience</p>
        </div>
      </div>
    </div>
  );
}
