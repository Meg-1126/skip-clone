import React from "react";

export default function ActionCards() {
  return (
    <div className="wrapper__cards">
      <div>
        <img src="./images/couriers.jpeg" />
        <h3>Drive With Skip</h3>
        <p>
          Earn extra money in your spare time. Set your availability, keep 100%
          of your delivery fees and tips, and get paid weekly.
        </p>
        <button>Join Now</button>
      </div>
      <div>
        <img src="./images/restaurants.jpeg" />
        <h3>Partner With Skip</h3>
        <p>
          Team up with us to reach more customers. Let us take care of the
          details, so you can stay focused on making great food.
        </p>
        <button>Learn More</button>
      </div>
      <div>
        <img src="./images/careers.jpeg" />
        <h3>Careers At Skip</h3>
        <p>
          Gain experience that matters. Grow with our team of high performers in
          a fun, challenging, and fast-paced environment.
        </p>
        <button>Apply Today</button>
      </div>
    </div>
  );
}