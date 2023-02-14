import React from "react";

export default function ActionCards() {
  return (
    <div className="wrapper__cards">
      <div className="card">
        <img src="./images/couriers.jpeg" className="card__img" />
        <div className="card__text card__text1">
          <h3>Drive With Skip</h3>
          <p>
            Earn extra money in your spare time. Set your availability, keep
            100% of your delivery fees and tips, and get paid weekly.
          </p>
        </div>
        <div className="card__btn">Join Now</div>
      </div>
      <div className="card">
        <img src="./images/restaurants.jpeg" className="card__img" />
        <div className="card__text card__text2">
          <h3>Partner With Skip</h3>
          <p>
            Team up with us to reach more customers. Let us take care of the
            details, so you can stay focused on making great food.
          </p>
        </div>
        <div className="card__btn">Learn More</div>
      </div>
      <div className="card">
        <img src="./images/careers.jpeg" className="card__img" />
        <div className="card__text card__text3">
          <h3>Careers At Skip</h3>
          <p>
            Gain experience that matters. Grow with our team of high performers
            in a fun, challenging, and fast-paced environment.
          </p>
        </div>
        <div className="card__btn">Apply Today</div>
      </div>
    </div>
  );
}