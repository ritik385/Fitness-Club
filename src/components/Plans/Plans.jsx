import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1" /> {/*two divs for left and right blurs */}
      <div className="blur plans-blur-2" />
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start</span>
        <span>Your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      {/* plan cards */}
      <div className="plans">
        {plansData.map((plan, ind) => (
          <div className="plan" key={ind}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            {/* double-mapping: 
             mapping on each of the features so that
             we can access each of the comma separeated texts */}
            <div className="features">
              {plan.features.map((feature, ind) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={ind}> {feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
