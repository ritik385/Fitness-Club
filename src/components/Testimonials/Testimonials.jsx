import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from 'framer-motion'
const Testimonials = () => {
  /* selected is the index of the testimonial that is currently selected */
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  /* function for transition*/
const transition = {type : 'spring', duration : 3}

  return (
    <div className="Testimonials" id="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        {/* transition for the content (reverse the coordinates of image.) */}
        <motion.span
         key={selected}
         initial ={{opacity:0, x:-100}}
         animate ={{opacity:1, x:0}}
         exit ={{opacity:0,x:100}}
         transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      {/* now targetting the right part: ie. the dashing image */}
      <div className="right-t">
        {/* two divs below are to give backgrond of the image */}
        <motion.div 
        initial = {{opacity: 0, x: -100}}
        whileInView = {{opacity:1, x:0}}
        transition ={{...transition, duration:2}}
        /> 
        <motion.div
         initial = {{opacity: 0, x: 100}}
         whileInView = {{opacity:1, x: 0}}
         transition ={{...transition, duration:2}}
        />
        <motion.img
        key={selected}
        initial ={{opacity:0, x:100}}
        animate ={{opacity:1, x:0}}
        exit ={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" className="src" />
        <div className="arrows">
          {/*logic for left arrow click 
          if we are at the first testimonial then on clicking left 
          it will change the setSelected to  last(tlength-1) otherwise as usual
          Same goes for the right arrow.*/}
          <img
          onClick={()=>{
            selected === 0 ?setSelected(tLength-1): setSelected((prev)=>prev-1)
          }}
           src={leftArrow} alt="" />
          <img 
          onClick={()=>{
            selected === tLength-1 ? setSelected(0): setSelected((prev)=>prev+1)
          }}
          src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
