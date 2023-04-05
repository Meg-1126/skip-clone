import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function PopularCuisines() {
  const [screenWidth, setScreenWidth] = useState(0);
  const goRight = () => {
    const element = document.getElementById("wrapper__popularcuisines__cards");
    if (element) {
      element.scrollBy({ left: 920, behavior: "smooth" });
      setScreenWidth(element.scrollLeft + 1);
    }
  };

  const goLeft = () => {
    const element = document.getElementById("wrapper__popularcuisines__cards");
    if (element) {
      element.scrollBy({ left: -920, behavior: "smooth" });
      setScreenWidth(element.scrollLeft - 920);
    }
  };

  return (
    <div className="wrapper__popularcuisines">
      <div className="wrapper__popularcuisines__inner">
        {screenWidth === 0 || screenWidth < 920 ? (
          <IoIosArrowDroprightCircle
            className="arrow-right"
            onClick={goRight}
            Id={"1"}
          />
        ) : null}
        {screenWidth > 0 ? (
          <IoIosArrowDropleftCircle
            className="arrow-left"
            onClick={goLeft}
            Id={"2"}
          />
        ) : null}
        <h2 className="h2__popularcuisines">Popular Cuisines</h2>
        <div id="wrapper__popularcuisines__cards">
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
    </div>
  );
}
