import React from "react";

export default function Rewards() {
  return (
    <>
      <div className="wrapper__rewards">
        <div className="wrapper__rewards__textArea">
          <h2 className="h2__skiprewards">
            <span className="h2__skip">SKIP</span>REWARDS
          </h2>
          <div className="wrapper__rewards__p">
            <p>
              This is the ultimate rewards program for the ultimate foodie. Earn
              points on every order and use your points to get more of what you
              love: free food. Order, earn points, and start getting rewarded
              now.
            </p>
            <br />
            <p>
              There are no sign-ups or monthly fees. To begin, all you need is a
              Skip account. It’s that easy.
            </p>
          </div>
          <button className="btn__learnMore">Learn More</button>
        </div>
        <div className="wrapper__img__girl"></div>
      </div>
    </>
  );
}
