import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

import NumberCounter from 'number-counter'
/*Hero is divided in 2 parts on left its the content and on right
  its the image and the login*/

const Hero = () => {
  /* function for the transition of the div.
  for transition same logic will be used only the right/left position
  and the whileInView position has to be customised.*/
  const transition = { type: "spring", duration: 3 };
  
  /* calculating the size of mobile: smaller will be mobile
  otherwise it will be false.*/ 
  const mobile = window.innerWidth <= 768 ? true:false
 
 
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad*/}
        <div className="the-best-ad">
          {/* transtion logic */}
          <motion.div
            initial={{ left: mobile? '165px':'238px'}}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero Heading: the texts are differently styled.
            so we have put them in diff div and spans.*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures: statistics */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start ={100} delay='4' preFix = "+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start ={700} delay='4' preFix = "+" />
              </span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start ={35} delay='4' preFix = "+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* Hero buttons- Get Started-learn More */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        {/*for transition of whole heart-rate card*/}
        <motion.div
          initial={{ right: "-3rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>
        {/* Hero images */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "10rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/*motion for the calories small card*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
