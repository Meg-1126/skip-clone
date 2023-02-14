import React from "react";

export default function PopularCuisines() {
  return (
    <div className="wrapper__popularcuisines">
      <h2>Popular Cuisines</h2>
      <div className="wrapper__popularcuisines__cards">
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__italian"></div>
          <p>Italian</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__pizza"></div>
          <p>Pizza</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__chinese"></div>
          <p>Chinese</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__japanese"></div>
          <p>Japanese</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__sushi"></div>
          <p>Sushi</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__thai"></div>
          <p>Thai</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__vietnamese"></div>
          <p>Vietnamese</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__burgers"></div>
          <p>Burgers</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__greek"></div>
          <p>Greek</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__indian"></div>
          <p>Indian</p>
        </div>
        <div className="wrapper__popularcuisines__card">
          <div className="card__cuisine card__convenience"></div>
          <p>Convenience</p>
        </div>
      </div>
    </div>
  );
}
