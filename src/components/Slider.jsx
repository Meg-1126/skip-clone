import React, { useState, useEffect } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderContents = [
    {
      title: "More Choice",
      message:
        "We have thousands of restaurants, including local favorites that don't normally deliver. Discover new cuisines all around you.",
      image: "./images/more-choice_mobile.jpeg",
      imageDesktop: "./images/more-choice_desktop.jpeg",
    },
    {
      title: "Smarter Delivery",
      message:
        "Watch your order from the moment you place it until the food is at your door. Transparency. Welcome to the future.",
      image: "./images/smarter-delivery_mobile.jpeg",
      imageDesktop: "./images/smarter-delivery_desktop.jpeg",
    },
    {
      title: "Gain Time",
      message:
        " Life can be complicated but ordering food doesn't have to be. Let us take care of the details while you focus on what really matters.",
      image: "./images/gain-time_mobile.jpeg",
      imageDesktop: "./images/gain-time_desktop.jpeg",
    },
  ];

  const infiniteScroll = () => {
    if (currentIndex === sliderContents.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, 6000);
    return () => clearInterval(interval);
  });

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
        {currentIndex === 0 ? (
          <button
            className="indicator ind-left"
            onClick={go1st}
            style={{ backgroundColor: "#f36804" }}
          />
        ) : (
          <button className="indicator ind-left" onClick={go1st} />
        )}
        {currentIndex === 1 ? (
          <button
            className="indicator ind-middle"
            onClick={go2nd}
            style={{ backgroundColor: "#f36804" }}
          />
        ) : (
          <button className="indicator ind-middle" onClick={go2nd} />
        )}
        {currentIndex === 2 ? (
          <button
            className="indicator ind-right"
            onClick={go3rd}
            style={{ backgroundColor: "#f36804" }}
          />
        ) : (
          <button className="indicator ind-right" onClick={go3rd} />
        )}
      </div>
      <div id="wrapper__carousel">
        {sliderContents.map((item, index) => {
          return (
            <div
              key={index}
              className="carousel"
              style={{
                transform: `translate(-${currentIndex * 100}%)`,
                transition: `0.8s`,
              }}
            >
              <div className="carousel__inner">
                <div className="carousel__text">
                  <div id="wrapper__indicator__desktop">
                    {currentIndex === 0 ? (
                      <button
                        className="indicator ind-left"
                        onClick={go1st}
                        style={{ backgroundColor: "#f36804" }}
                      />
                    ) : (
                      <button className="indicator ind-left" onClick={go1st} />
                    )}
                    {currentIndex === 1 ? (
                      <button
                        className="indicator ind-middle"
                        onClick={go2nd}
                        style={{ backgroundColor: "#f36804" }}
                      />
                    ) : (
                      <button
                        className="indicator ind-middle"
                        onClick={go2nd}
                      />
                    )}
                    {currentIndex === 2 ? (
                      <button
                        className="indicator ind-right"
                        onClick={go3rd}
                        style={{ backgroundColor: "#f36804" }}
                      />
                    ) : (
                      <button className="indicator ind-right" onClick={go3rd} />
                    )}
                  </div>
                  <h3 className="carousel__title">{item.title}</h3>
                  <p className="carousel__msg">{item.message}</p>
                </div>
                <img
                  srcset={`${item.image} 750w, ${item.imageDesktop} 1250w`}
                  sizes="(min-width: 960px) 1250px, 750px"
                  src={item.image}
                  className="carousel__img"
                  alt={item.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
