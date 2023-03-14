import React, { useState, useEffect } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderContents = [
    {
      title: "More Choice",
      message:
        "We have thousands of restaurants, including local favorites that don't normally deliver. Discover new cuisines all around you.",
      image: "./images/more-choice_mobile.jpeg",
    },
    {
      title: "Smarter Delivery",
      message:
        "Watch your order from the moment you place it until the food is at your door. Transparency. Welcome to the future.",
      image: "./images/smarter-delivery_mobile.jpeg",
    },
    {
      title: "Gain Time",
      message:
        " Life can be complicated but ordering food doesn't have to be. Let us take care of the details while you focus on what really matters.",
      image: "./images/gain-time_mobile.jpeg",
    },
  ];

  const infiniteScroll = () => {
    if (currentIndex === sliderContents.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(()=> {
    const interval = setInterval(()=>{infiniteScroll()}, 6000)
    return () => clearInterval(interval)
  })

  const go1st = (e) => {
    console.log("click1");
    setCurrentIndex(0);
  };
  const go2nd = (e) => {
    console.log("click2");
    setCurrentIndex(1);
  };
  const go3rd = (e) => {
    console.log("click3");
    setCurrentIndex(2);
  };

  return (
    <>
      <div id="wrapper__indicator">
        <button className="indicator ind-left" onClick={go1st} />
        <button className="indicator ind-middle" onClick={go2nd} />
        <button className="indicator ind-right" onClick={go3rd} />
      </div>
      <div className="wrapper__carousel">
        {sliderContents.map((item, index) => {
          return (
            <div
              key={index}
              className="carousel"
              style={{ transform: `translate(-${currentIndex * 100}%)`, transition: `0.8s` }}
            >
              <h3 className="carousel__title">{item.title}</h3>
              <p className="carousel__msg">{item.message}</p>
              <img src={item.image} className="carousel__img" />
            </div>
          );
        })}
      </div>
    </>
  );
}
